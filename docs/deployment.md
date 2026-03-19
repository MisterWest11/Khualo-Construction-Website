# Deployment Documentation

This guide covers how to deploy the Khualo Construction Website to production.

## Build Process

### Local Build

To create a production build locally:

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Bundles and optimizes assets with Vite
- Minifies CSS and JavaScript
- Generates static files in the `dist/` directory

### Build Output

The build process creates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Compiled CSS, JS, and optimized images
- `dist/favicon.png` - Website favicon
- Static files from `public/` directory

## Deployment Options

### 1. Static Hosting (Recommended)

Deploy to static hosting services that serve the `dist/` directory:

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 2. Traditional Web Hosting

Upload the `dist/` folder contents to any web server that supports static files.

### 3. Docker Deployment

Create a Dockerfile for containerized deployment:

```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t khualo-website .
docker run -p 80:80 khualo-website
```

## Environment Configuration

### Production Environment Variables

Create a `.env.production` file for production-specific settings:

```env
VITE_API_URL=https://api.khualo.co.za
VITE_CONTACT_EMAIL=info@khualo.co.za
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Build-time Variables

Vite exposes environment variables prefixed with `VITE_` to the client-side code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## SEO and Performance

### Pre-deployment Checklist

- [ ] Update meta tags in `index.html`
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Optimize images
- [ ] Test build locally
- [ ] Check for broken links
- [ ] Validate HTML
- [ ] Test responsive design
- [ ] Check loading performance

### SEO Optimization

1. **Meta Tags**: Ensure proper title, description, and Open Graph tags
2. **Sitemap**: Submit to Google Search Console
3. **Robots.txt**: Allow crawling of important pages
4. **Structured Data**: Add JSON-LD for business information

### Performance Optimization

1. **Image Optimization**: Use WebP format with fallbacks
2. **Code Splitting**: Vite automatically splits chunks
3. **Minification**: Enabled by default
4. **Caching**: Set appropriate cache headers

## Domain and SSL

### Custom Domain

1. **Purchase domain** from a registrar (e.g., Namecheap, GoDaddy)
2. **Configure DNS** to point to your hosting provider
3. **Set up SSL certificate** (usually automatic with modern hosts)

### SSL Certificate

Most hosting providers offer free SSL certificates via Let's Encrypt:
- Netlify: Automatic SSL
- Vercel: Automatic SSL
- GitHub Pages: HTTPS enforced

## Monitoring and Analytics

### Google Analytics

Add Google Analytics to track website usage:

1. Create a GA4 property
2. Add the measurement ID to environment variables
3. Include the GA script in `index.html`

### Error Monitoring

Consider adding error monitoring services:
- Sentry for error tracking
- LogRocket for session replay
- Google Search Console for indexing issues

## Continuous Deployment

### GitHub Actions

Set up automatic deployment on push to main branch:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Backup and Rollback

### Version Control

- Use Git for version control
- Tag releases: `git tag v1.0.0`
- Keep deployment history

### Rollback Strategy

1. **Tagged releases**: Deploy specific versions
2. **Branch-based**: Use staging/production branches
3. **Hosting rollback**: Most platforms support rollback to previous deployments

## Security Considerations

### Content Security Policy

Add CSP headers for security:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
```

### HTTPS Enforcement

Ensure all traffic uses HTTPS:
- Redirect HTTP to HTTPS
- Use HSTS headers
- Update all internal links to HTTPS

## Maintenance

### Regular Tasks

- [ ] Update dependencies monthly
- [ ] Monitor performance metrics
- [ ] Check for broken links
- [ ] Update content as needed
- [ ] Renew SSL certificates
- [ ] Backup important data

### Updates

When updating the website:
1. Test changes locally
2. Create a pull request
3. Review and merge
4. Deploy automatically (if CI/CD set up)
5. Monitor for issues
6. Update documentation if needed