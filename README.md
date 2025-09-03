# AI Blog Sanity Studio

This is the Sanity Studio for managing AI-powered blog content.

## Local Development

```bash
npm install
npm run dev
```

The studio will be available at `http://localhost:3333`

## Deployment to Vercel

### Prerequisites

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`

### Deployment Steps

1. **Navigate to the Sanity Studio directory:**

   ```bash
   cd sanity/ai-blog
   ```

2. **Login to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy:**

   ```bash
   vercel --prod
   ```

4. **Set Environment Variables in Vercel:**
   After deployment, go to your Vercel dashboard and add these environment variables:
   - `SANITY_STUDIO_API_PROJECT_ID`: Your Sanity project ID
   - `SANITY_STUDIO_API_DATASET`: `production`
   - `SANITY_STUDIO_API_TOKEN`: Your Sanity auth token (create one in Sanity dashboard)

### Accessing Your Studio

Once deployed, you'll get a URL like `https://your-project-name.vercel.app`

## Authentication

The studio is protected by Sanity's built-in authentication. You'll need to:

1. Go to your Sanity project dashboard
2. Add users under "API" > "CORS origins"
3. Add your Vercel deployment URL as an allowed origin

## Content Management

Use the studio to:

- Create and edit blog posts
- Manage authors
- Upload images
- Configure content structure

Your Next.js frontend will automatically fetch the latest content from Sanity.
