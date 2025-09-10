# Static Deployment Guide

This guide covers how to deploy your React web app to various static hosting services.

## 🚀 Quick Deploy Options

### 1. AWS S3 + CloudFront (Recommended)

**Pros**: Fast, reliable, cost-effective, global CDN
**Cost**: ~$1-5/month for low traffic

#### Setup Steps:

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-unique-bucket-name
   ```

2. **Configure for Static Website**:
   ```bash
   aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
   ```

3. **Deploy**:
   ```bash
   chmod +x deploy-s3.sh
   ./deploy-s3.sh
   ```

4. **Set up CloudFront** (optional, for custom domain and HTTPS):
   - Go to AWS CloudFront console
   - Create distribution
   - Origin: your S3 bucket
   - Default root object: `index.html`

### 2. Vercel (Easiest)

**Pros**: Zero config, automatic HTTPS, custom domains
**Cost**: Free tier available

#### Setup Steps:

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   cd packages/landing-page
   vercel
   ```

3. **Follow prompts** - Vercel handles everything!

### 3. Netlify

**Pros**: Great for React apps, form handling, functions
**Cost**: Free tier available

#### Setup Steps:

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd packages/landing-page
   netlify deploy --prod --dir=build
   ```

### 4. GitHub Pages

**Pros**: Free, integrated with GitHub
**Cost**: Free

#### Setup Steps:

1. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/rewatchable-streams"
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Build Configuration

### Environment Variables

Create `.env` files for different environments:

**`.env.production`**:
```
REACT_APP_API_URL=https://your-api.com
REACT_APP_ENVIRONMENT=production
```

**`.env.development`**:
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENVIRONMENT=development
```

### Custom Domain Setup

1. **Buy domain** (Route 53, Namecheap, etc.)
2. **Point DNS** to your hosting service
3. **Configure SSL** (automatic with Vercel/Netlify)

## 📁 Build Output

After running `npm run build`, your static files are in the `build/` directory:

```
build/
├── index.html          # Main HTML file
├── static/
│   ├── css/           # CSS files
│   └── js/            # JavaScript bundles
└── manifest.json      # PWA manifest
```

## 🚀 Automated Deployment

### GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3
on:
  push:
    branches: [ web-page ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: cd packages/landing-page && npm install
      - name: Build
        run: cd packages/landing-page && npm run build
      - name: Deploy to S3
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Upload to S3
        run: cd packages/landing-page && aws s3 sync build/ s3://${{ secrets.S3_BUCKET }} --delete
```

## 💡 Best Practices

1. **Enable Gzip compression** on your CDN
2. **Set proper cache headers** for static assets
3. **Use HTTPS** everywhere
4. **Monitor performance** with tools like Lighthouse
5. **Set up error monitoring** (Sentry, LogRocket)

## 🔍 Troubleshooting

### Common Issues:

1. **404 on refresh**: Configure your server to serve `index.html` for all routes
2. **CORS errors**: Configure your API to allow your domain
3. **Build failures**: Check Node.js version compatibility

### Performance Tips:

1. **Optimize images** before uploading
2. **Use CDN** for global distribution
3. **Enable compression** (gzip/brotli)
4. **Minimize bundle size** with code splitting
