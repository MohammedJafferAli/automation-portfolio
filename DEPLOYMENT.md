# GitHub Pages Deployment Guide

## 🚀 Automated Deployment (Recommended)

Your portfolio is configured for automatic deployment via GitHub Actions.

### Setup Steps:

1. **Push to GitHub** (if not already done):
   ```bash
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository: https://github.com/MohammedJafferAli/automation-portfolio
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to main

3. **Access Your Live Site**:
   - URL: https://mohammedjafferali.github.io/automation-portfolio
   - Updates automatically on every commit to main branch

## 🔧 Manual Deployment

If you prefer manual deployment:

```bash
# Build and deploy
npm run deploy
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. **Update CNAME file**:
   - Edit `public/CNAME`
   - Replace with your domain: `your-domain.com`

2. **Configure DNS**:
   - Add CNAME record pointing to: `mohammedjafferali.github.io`

3. **Update package.json**:
   - Change homepage URL to your custom domain

## 📊 Deployment Status

- ✅ GitHub Actions workflow configured
- ✅ Build optimization enabled
- ✅ SPA routing configured (404.html)
- ✅ Custom domain ready
- ✅ Automatic deployment on push

## 🔍 Troubleshooting

### Build Fails
- Check GitHub Actions logs in the **Actions** tab
- Ensure all dependencies are in package.json
- Verify build runs locally: `npm run build`

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Check GitHub Pages settings
- Verify homepage URL in package.json

### 404 Errors
- Ensure 404.html is in public folder
- Check routing configuration
- Verify all assets are in public folder

## 📈 Performance

Your site includes:
- Optimized production build
- Compressed assets
- Lazy loading
- SEO optimization

**Live URL**: https://mohammedjafferali.github.io/automation-portfolio