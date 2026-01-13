# Vercel Setup Guide

## Current Setup

✅ **Staging branch created:** `staging`  
✅ **Production branch:** `main`

## How Vercel Deploys Your Site

### Automatic Deployments

Vercel will automatically deploy:

1. **Production (main branch)**
   - Every push to `main` → deploys to `800percent.life` / `glennlundy.com`
   - This is your live, public site

2. **Preview (staging + feature branches)**
   - Every push to `staging` → creates preview URL like `glennlundy-git-staging-yourteam.vercel.app`
   - Every push to any feature branch → creates unique preview URL
   - These are for testing before going live

## Vercel Dashboard Settings

### Production Branch (Clarification)

**Note:** By default, Vercel uses `main` as the production branch. You don't need to manually set this - it's automatic!

If you want to verify or change it:

1. Go to your Vercel dashboard: https://vercel.com
2. Select your project: `glennlundy` or `800percent.life`
3. Go to **Settings** → **Git**
4. Look for **"Production Branch"** section
   - It should show: `main`
   - **If you DON'T see this option**, it means `main` is already set as default ✅

### What You WILL See in Settings → Git:

- **Connected Git Repository:** `kaceygoins/glennlundy`
- **Ignored Build Step:** (optional, leave as default)
- **Auto-deploy:** Should be enabled ✅

## Branch Deployment Behavior

| Branch | Deployment Type | URL Example |
|--------|----------------|-------------|
| `main` | Production | `800percent.life` |
| `staging` | Preview | `project-git-staging.vercel.app` |
| `feature/contact` | Preview | `project-git-feature-contact.vercel.app` |

## Recommended Workflow

```
Developer creates feature branch
         ↓
    Push to GitHub
         ↓
Vercel creates preview URL (check it!)
         ↓
    Create PR to staging
         ↓
   Merge to staging
         ↓
Vercel deploys staging preview (test thoroughly!)
         ↓
    Create PR: staging → main
         ↓
    Merge to main
         ↓
🚀 Vercel deploys to production!
```

## Deployment URLs

After you push the `staging` branch, check your Vercel dashboard to see the staging preview URL. You can bookmark it for quick access during development!

**To find your preview URLs:**
1. Go to Vercel dashboard
2. Click on your project
3. Look at recent deployments
4. Each deployment shows its URL

## Environment Variables

If you need different settings for staging vs production (database URLs, API keys, etc.):

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add variables with different values for:
   - **Production** (main branch)
   - **Preview** (all other branches)

## Custom Domains

**Production domains are already configured:**
- `800percent.life`
- `glennlundy.com`

These automatically deploy from the `main` branch.

## Testing the Setup

1. Push a small change to `staging`
2. Check Vercel dashboard for new deployment
3. Click the preview URL to verify
4. Once confirmed working, merge to `main`
5. Production site updates automatically!

## Common Questions

**Q: Do I need to manually deploy?**  
A: No! Vercel auto-deploys on every push to any branch.

**Q: How long does deployment take?**  
A: Usually 30-60 seconds for this site.

**Q: Can I rollback a deployment?**  
A: Yes! In Vercel dashboard, go to Deployments, find the previous one, click "..." → "Promote to Production"

**Q: What if I want to pause auto-deploy?**  
A: In Settings → Git, you can disable auto-deployments. (Not recommended!)

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support
