# GitHub Pages Setup Instructions

This guide will help you complete the one-time setup to enable your site to be live at:
**https://georgechittenden.github.io/Les-Chamades/**

## Step 1: Enable GitHub Pages (One-Time Setup)

1. Go to your repository on GitHub: https://github.com/georgechittenden/Les-Chamades
2. Click on **Settings** (top menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Build and deployment**, for **Source**, select **GitHub Actions**
5. That's it! No other configuration needed.

## Step 2: Merge This Pull Request

Once you merge this PR to the `main` branch:
- The GitHub Actions workflow will automatically run
- Your site will be deployed to GitHub Pages
- It will be live at: https://georgechittenden.github.io/Les-Chamades/

## Step 3: Verify Deployment

After merging:
1. Go to the **Actions** tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Visit https://georgechittenden.github.io/Les-Chamades/ to see your live site!

## Monitoring Deployments

- **Actions Tab**: See all deployment runs and their status
- **Environments**: Settings → Environments → github-pages shows deployment history

## What Was Added

This PR added:
- `.github/workflows/deploy.yml` - Automated deployment workflow
- `DEPLOYMENT.md` - Comprehensive deployment documentation
- Updated `README.md` - Added live site URL and deployment info

## Future Deployments

After this initial setup:
- Any push to `main` branch will automatically deploy
- No manual steps needed!
- Changes appear live in 1-2 minutes

## Troubleshooting

If the site doesn't work after setup:
1. Verify GitHub Pages is enabled (Settings → Pages)
2. Check the Actions tab for any errors
3. Ensure the workflow completed successfully
4. Try hard refresh (Ctrl+F5) or clear browser cache

## Next Steps (Optional)

After deployment is working, you can:
1. Set up Google Sheets integration (see SETUP.md)
2. Add your job listings data
3. Customize the design (edit styles.css)
4. Consider adding a custom domain (see DEPLOYMENT.md)

---

**Questions?** Check DEPLOYMENT.md for more details or open an issue.
