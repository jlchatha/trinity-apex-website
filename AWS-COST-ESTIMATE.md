# Trinity Apex AWS Migration: Cost Estimate

**Date Created**: June 6, 2025 (UNIT 3)  
**Framework**: Trinity Framework 2.0 Compliant ✓

## Overview

This document provides a detailed cost estimate for hosting the Trinity Apex website on AWS Amplify and related services. These estimates are based on typical usage patterns for a corporate website with moderate traffic and contact form submissions.

## Cost Breakdown by AWS Service

### AWS Amplify Hosting

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| Build minutes | 100 minutes/month (10 builds × 10 min) | $1.00 |
| Hosting - Stored GB | 0.5 GB | $0.11 |
| Data transfer out | 10 GB/month | $0.92 |
| **Amplify Subtotal** | | **$2.03** |

### Amazon API Gateway

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| API calls | 1,000 calls/month | $0.00 (Free Tier: 1M calls) |
| Data transfer | Minimal | $0.00 (Included in Free Tier) |
| **API Gateway Subtotal** | | **$0.00** |

### AWS Lambda

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| Invocations | 1,000 invocations/month | $0.00 (Free Tier: 1M invocations) |
| Compute time | 1,000 × 300ms × 128MB | $0.00 (Free Tier: 400,000 GB-seconds) |
| **Lambda Subtotal** | | **$0.00** |

### Amazon DynamoDB

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| Storage | 0.25 GB | $0.00 (Free Tier: 25GB) |
| Write request units | 1,000 WCUs/month | $0.00 (Free Tier: 25M WCUs) |
| Read request units | 1,000 RCUs/month | $0.00 (Free Tier: 25M RCUs) |
| **DynamoDB Subtotal** | | **$0.00** |

### Amazon SES (Simple Email Service)

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| Emails sent | 2,000 emails/month | $0.00 (Free Tier: 62,000 outbound emails) |
| **SES Subtotal** | | **$0.00** |

### AWS Certificate Manager

| Component | Estimated Usage | Monthly Cost |
|-----------|-----------------|--------------|
| Public SSL certificate | 1 certificate | $0.00 (Free for use with Amplify) |
| **ACM Subtotal** | | **$0.00** |

## Total Estimated Monthly Cost

| Service | Monthly Cost |
|---------|--------------|
| AWS Amplify | $2.03 |
| API Gateway | $0.00 |
| Lambda | $0.00 |
| DynamoDB | $0.00 |
| SES | $0.00 |
| ACM | $0.00 |
| **Total** | **$2.03** |

## Annual Cost Projection

| Scenario | Monthly Cost | Annual Cost |
|----------|--------------|-------------|
| Baseline (as estimated) | $2.03 | $24.36 |
| With 25% growth | $2.54 | $30.48 |
| With 50% growth | $3.05 | $36.60 |

## Cost Optimization Recommendations

1. **Free Tier Benefits**
   - AWS Free Tier benefits will cover all Lambda, DynamoDB, API Gateway, and SES usage at current estimates
   - Free Tier benefits apply for 12 months from AWS account creation date

2. **Minimizing Amplify Costs**
   - Optimize asset sizes to reduce storage costs
   - Implement efficient caching to reduce bandwidth usage
   - Limit the number of builds to stay within budget

3. **Cost Monitoring**
   - Set up AWS Budgets to alert if costs exceed expected amounts
   - Regularly review CloudWatch metrics to identify unexpected usage spikes
   - Consider implementing AWS Cost Explorer for detailed cost analysis

## Comparison to GitHub Pages

| Aspect | GitHub Pages | AWS Amplify (Estimated) |
|--------|-------------|-------------------------|
| Monthly Cost | $0.00 | $2.03 |
| Annual Cost | $0.00 | $24.36 |
| Value-Added Features | None | Full contact form, API, database storage, improved CDN |
| Future Expandability | Very limited | Extensive |

## Notes and Assumptions

1. **Traffic Assumptions**
   - 500-1,000 unique visitors per month
   - 10 GB bandwidth usage per month
   - 50-100 contact form submissions per month

2. **Resource Usage**
   - Low to moderate website usage patterns
   - Static content with minimal dynamic elements
   - Small database requirements for form submissions only

3. **Free Tier Considerations**
   - Cost estimates assume AWS Free Tier eligibility
   - After Free Tier expiration (12 months), costs may increase slightly
   - Post-Free Tier estimated monthly cost: $3-5

## Conclusion

The estimated cost of running the Trinity Apex website on AWS Amplify and related services is approximately $2.03 per month or $24.36 per year, with most services covered under the AWS Free Tier. This represents excellent value given the significant functionality improvements compared to GitHub Pages, including a fully functional contact form, backend processing capabilities, improved performance, and enhanced security.

These costs are minimal compared to the business value provided by a professional web presence with proper contact capabilities for potential clients to reach Trinity Apex.

---

**This document follows Trinity Framework 2.0 documentation standards and maintains complete separation from Trinity MVP and Trinity-AD projects.**

**Documentation prepared by**: HISTORIAN  
**Last Updated**: June 6, 2025 (UNIT 3)