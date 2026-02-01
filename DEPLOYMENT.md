# Deployment Guide

## Live Site

The site is live at: **https://georgechittenden.github.io/Les-Chamades/**

## Automatic Deployment with GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How It Works

1. **Push to Main**: Every time you push changes to the `main` branch, the deployment workflow automatically triggers
2. **Build**: GitHub Actions workflow runs (`.github/workflows/deploy.yml`)
3. **Deploy**: The site is deployed to GitHub Pages
4. **Live**: Changes appear on the live site within 1-2 minutes

### GitHub Pages Settings

To enable GitHub Pages for this repository (one-time setup):

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The site will be available at `https://georgechittenden.github.io/Les-Chamades/`

### Workflow File

The deployment workflow is located at `.github/workflows/deploy.yml` and includes:

- Triggers on push to `main` branch
- Can be manually triggered via workflow_dispatch
- Uses official GitHub Pages actions
- Deploys all files from the repository root

### Manual Deployment

You can also manually trigger a deployment:

1. Go to **Actions** tab in the repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click **Run workflow**
4. Select the `main` branch
5. Click **Run workflow**

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the repository root with your domain name
2. Configure DNS settings with your domain provider
3. Add the custom domain in repository Settings → Pages

Example `CNAME` file content:
```
www.leschamades.com
```

## Deployment Status

You can check deployment status:

- **Actions Tab**: Shows all workflow runs and their status
- **Environments**: Shows deployment history under Settings → Environments → github-pages

## Troubleshooting

### Deployment Not Working

1. Check that GitHub Pages is enabled in Settings → Pages
2. Verify the workflow file exists at `.github/workflows/deploy.yml`
3. Check Actions tab for any error messages
4. Ensure repository has Pages enabled (may need to be a public repository or have GitHub Pro)

### Changes Not Appearing

1. Wait 1-2 minutes after push for deployment to complete
2. Hard refresh the browser (Ctrl+F5 or Cmd+Shift+R)
3. Clear browser cache
4. Check Actions tab to see if deployment completed successfully

### 404 Page Not Found

1. Ensure the repository name matches the URL path
2. Check that `index.html` exists in the repository root
3. Verify Pages settings are correct in repository settings

## Alternative Deployment Methods

### Netlify

1. Sign up at [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select this repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or `/`)
5. Click "Deploy"

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import this repository from GitHub
4. Keep default settings
5. Click "Deploy"

### Other Static Hosts

This site works with any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages

Simply upload all files from the repository root.

## Important Notes

1. **Config File**: Remember to create `config.js` from `config.example.js` with your Google Sheets API credentials
2. **Security**: Never commit your `config.js` file (it's in `.gitignore`)
3. **API Keys**: For production, consider using environment variables or GitHub Secrets if possible
4. **Updates**: All content updates through Google Sheets appear immediately on refresh
