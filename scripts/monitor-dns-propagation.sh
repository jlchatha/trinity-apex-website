#!/bin/bash
# Script to monitor DNS propagation for trinityapex.ai
# UNIT 3-4 Implementation (June 6, 2025)

# Set polling interval in seconds
POLLING_INTERVAL=300  # 5 minutes

# Function to display timestamp
timestamp() {
  date +"%Y-%m-%d %H:%M:%S"
}

# Function to check DNS records
check_dns() {
  local domain=$1
  local record_type=$2
  echo "Checking $record_type records for $domain..."
  
  # Use dig to check DNS records from multiple servers for better global perspective
  echo "Google DNS (8.8.8.8):"
  dig @8.8.8.8 "$domain" "$record_type" +short
  
  echo "Cloudflare DNS (1.1.1.1):"
  dig @1.1.1.1 "$domain" "$record_type" +short
  
  echo "OpenDNS (208.67.222.222):"
  dig @208.67.222.222 "$domain" "$record_type" +short
  
  echo "Local DNS server:"
  dig "$domain" "$record_type" +short
  
  echo ""
}

# Function to check website availability
check_website() {
  local url=$1
  echo "Checking website availability: $url"
  
  # Use curl to check if the website is accessible and get status code
  status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status_code" -eq 200 ]; then
    echo "✅ Website is accessible! Status code: $status_code"
  elif [ "$status_code" -ge 300 ] && [ "$status_code" -lt 400 ]; then
    echo "⚠️ Website is redirecting. Status code: $status_code"
    redirect_url=$(curl -s -I "$url" | grep -i "location:" | awk '{print $2}')
    echo "   Redirect target: $redirect_url"
  else
    echo "❌ Website is not accessible. Status code: $status_code"
  fi
  
  echo ""
}

# Function to check SSL certificate
check_ssl() {
  local domain=$1
  echo "Checking SSL certificate for $domain..."
  
  if openssl s_client -connect "$domain":443 -servername "$domain" < /dev/null > /dev/null 2>&1; then
    cert_info=$(openssl s_client -connect "$domain":443 -servername "$domain" < /dev/null 2>/dev/null | openssl x509 -noout -dates -issuer -subject)
    echo "$cert_info"
  else
    echo "❌ Could not connect to $domain on port 443"
  fi
  
  echo ""
}

# Main monitoring loop
while true; do
  clear
  echo "==================================================================="
  echo "Trinity Apex DNS Propagation Monitor - $(timestamp)"
  echo "==================================================================="
  echo "Polling every $POLLING_INTERVAL seconds. Press Ctrl+C to stop."
  echo ""
  
  # Check DNS and website status
  echo "=== DNS Records ==="
  check_dns "www.trinityapex.ai" "CNAME"
  check_dns "trinityapex.ai" "A"
  
  echo "=== Website Availability ==="
  check_website "https://www.trinityapex.ai"
  check_website "https://trinityapex.ai"
  
  echo "=== SSL Certificate Information ==="
  check_ssl "www.trinityapex.ai"
  
  echo "DNS propagation can take up to 48 hours to complete worldwide."
  echo "This script will continue checking every $((POLLING_INTERVAL / 60)) minutes."
  echo "Press Ctrl+C to stop monitoring."
  echo "==================================================================="
  
  # Wait for the polling interval
  sleep $POLLING_INTERVAL
done