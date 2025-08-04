# Diora SPA - Railway Deployment Guide

This guide will help you deploy your Diora SPA project to Railway using Docker.

## Project Overview

This is a React TypeScript SPA built with:
- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Client-side routing

## Railway Deployment

### Prerequisites

1. A [Railway](https://railway.app) account
2. Your project code pushed to a GitHub repository
3. Docker support (included in this project)

### Deployment Steps

#### Option 1: Deploy via Railway Dashboard

1. **Connect Your Repository**
   - Go to [Railway Dashboard](https://railway.app/dashboard)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

2. **Configure the Service**
   - Railway will automatically detect the Dockerfile
   - The build will start automatically
   - Wait for the deployment to complete (usually 2-3 minutes)

3. **Access Your Application**
   - Once deployed, Railway will provide a public URL
   - Your SPA will be available at: `https://your-app-name.up.railway.app`

#### Option 2: Deploy via Railway CLI

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize and Deploy**
   ```bash
   # In your project directory
   railway link
   railway up
   ```

### Environment Configuration

If your application uses environment variables, you can set them in Railway:

1. Go to your project in Railway Dashboard
2. Click on "Variables" tab
3. Add your environment variables (e.g., API URLs, keys, etc.)

Common environment variables for a React app:
```bash
# Example environment variables
VITE_API_URL=https://your-api-url.com
VITE_APP_NAME=Diora SPA
```

### Custom Domain (Optional)

To use a custom domain:

1. In Railway Dashboard, go to your service
2. Click on "Settings" tab
3. Scroll to "Domains" section
4. Click "Custom Domain"
5. Add your domain and configure DNS

## Docker Configuration

The project includes optimized Docker configuration:

### Dockerfile Features
- **Multi-stage build** for optimized image size
- **Node.js 18 Alpine** for the build stage
- **Nginx Alpine** for production serving
- **Optimized nginx configuration** with:
  - SPA routing support (falls back to index.html)
  - Gzip compression
  - Static asset caching
  - Security headers

### Build Process
1. Install dependencies with npm
2. Build the application with Vite
3. Serve static files with Nginx
4. Expose on port 80

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Local Docker Testing

To test the Docker build locally:

```bash
# Build the Docker image
docker build -t diora-spa .

# Run the container
docker run -p 8080:80 diora-spa

# Access at http://localhost:8080
```

## Project Structure

```
diora-spa/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── assets/        # Static assets
│   └── lib/           # Utilities
├── public/            # Public assets
├── Dockerfile         # Docker configuration
├── railway.json       # Railway configuration
├── .dockerignore     # Docker ignore rules
└── package.json      # Dependencies and scripts
```

## Performance Optimizations

The deployment includes several optimizations:

1. **Static Asset Caching** - 1-year cache for static files
2. **Gzip Compression** - Reduces file sizes
3. **Optimized Nginx Config** - Fast serving of static content
4. **Multi-stage Docker Build** - Smaller production image

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are listed in package.json
   - Ensure TypeScript compilation passes locally
   - Verify environment variables are set correctly

2. **Runtime Errors**
   - Check browser console for JavaScript errors
   - Verify API endpoints are accessible
   - Check CORS configuration if using external APIs

3. **Routing Issues**
   - The nginx configuration handles SPA routing
   - All routes fall back to index.html for client-side routing

### Getting Help

- Railway Documentation: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Project Issues: Create an issue in your GitHub repository

## Next Steps

After deployment, consider:

1. **Monitoring** - Set up error tracking (Sentry, LogRocket)
2. **Analytics** - Add Google Analytics or similar
3. **SEO** - Consider server-side rendering for better SEO
4. **Security** - Review and update security headers
5. **Performance** - Monitor Core Web Vitals

---

Your Diora SPA is now ready for deployment on Railway! 🚀
