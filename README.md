# A statically generated blog example using Next.js, Cosmic, and Cosmic Merge preview capabilities

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Cosmic](https://cosmicjs.com/) as the data source.

## Demo

[https://cosmic-next-blog.vercel.app/](https://cosmic-next-blog.vercel.app/)

## Deploy your own

Once you have access to [the environment variables you'll need](#step-3-set-up-environment-variables), deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/next-merge&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env)


## How to use

Clone the repo to install and bootstrap the example:

```bash
git clone https://github.com/cosmicjs/next-merge
```

## Configuration

### Step 1. Create an account and a project on Cosmic

First, [create an account on Cosmic](https://cosmicjs.com).

### Step 2. Install the Next.js Merge Blog

After creating an account, install the [Next.js Merge Blog](https://www.cosmicjs.com/apps/nextjs-merge-blog) app from the Cosmic App Marketplace.

### Step 3. Set up environment variables

Go to the **Settings** menu at the sidebar and click **Basic Settings**.

Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `COSMIC_BUCKET_SLUG` should be the **Bucket slug** key under **Basic Settings**.
- `COSMIC_READ_KEY` should be the **Read Key** under **API Access**.
- `COSMIC_PREVIEW_SECRET` can be any random string (but avoid spaces) - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

Your `.env.local` file should look like this:

```bash
COSMIC_BUCKET_SLUG=...
COSMIC_READ_KEY=...
COSMIC_PREVIEW_SECRET=...
```

### Step 4. Run Next.js in development mode

```bash
npm install
PORT=4000 npm run dev

# or

yarn install
PORT=4000 yarn dev
```

Your blog should be up and running on [http://localhost:4000](http://localhost:4000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 5. Try Merge preview mode

To add the ability to preview content from a merge request, follow these steps:

1. In the Projects page in Cosmic, clone your current Bucket with Next.js Merge content into a new Staging Bucket by clicking "Clone Bucket"
2. After cloning your Bucket, create a new merge request in your Bucket project clicking the "Merge Icon" in the main nav (or from the Projects table located in `/projects` after logging in)
3. Select the Source Bucket (Staging) to your Target Bucket (Production). Click "Review Changes".
4. There shouldn't be any changes to preview yet. Add your merge link exactly as this:
```
http://localhost:4000?merge_id=[merge_id]
```
Click "Save".

4. Now you can Add or Edit any content in your Staging Bucket.
5. After adding and editing content in staging, go back to your Merge Request and notice the Changes to Objects, Object Types, and / or Media.
6. Click the "Preview" button to see content from the merge request now visible in your locally running app.
7. Make more changes in your Staging Bucket and see real time updates in the app :)

To exit preview mode, you can click on **You are previewing merge content. Click here to remove** at the top.

### Step 6. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/next-merge&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env)
