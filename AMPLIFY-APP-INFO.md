# Trinity Apex AWS Amplify App Information

**Date Created**: June 6, 2025 (UNIT 3)  
**Framework**: Trinity Framework 2.0 Compliant ✓

## Amplify App Details

- **App Name**: trinity-apex-website
- **App ID**: d1lr9hil3wn2il (Console) / d16dycuau7qtsc (CLI)
- **App ARN**: arn:aws:amplify:us-west-2:644177601378:apps/d1lr9hil3wn2il
- **Default Domain**: d1lr9hil3wn2il.amplifyapp.com
- **Region**: us-west-2
- **Creation Date**: June 6, 2025

## Next Steps

1. Connect the Amplify app to the GitHub repository:
   ```bash
   aws amplify create-branch \
     --app-id d16dycuau7qtsc \
     --branch-name main
   ```

2. Set up a deployment from the GitHub repository:
   ```bash
   aws amplify create-deployment \
     --app-id d16dycuau7qtsc \
     --branch-name main
   ```

3. Configure build settings:
   ```bash
   aws amplify update-branch \
     --app-id d16dycuau7qtsc \
     --branch-name main \
     --framework jekyll \
     --stage PRODUCTION
   ```

## Important URLs

- **Amplify Console URL**: https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/d16dycuau7qtsc
- **Default Site URL**: https://main.d16dycuau7qtsc.amplifyapp.com (after deployment)

## Note

These app details should be used in the deployment process and referenced in the DNS update procedure when configuring the domain settings.

---

**Documentation prepared by**: HISTORIAN  
**Last Updated**: June 6, 2025 (UNIT 3)