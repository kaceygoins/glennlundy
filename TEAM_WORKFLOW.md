# Team Workflow Guide

## Quick Overview

We use a **staging** → **main** workflow with automatic Vercel deployments:

- `main` branch = **Production** (live site at 800percent.life)
- `staging` branch = **Testing** (preview URL from Vercel)
- Feature branches = **Development** (your own preview URLs)

---

## For Developers: Making Changes

### 1. Start with a Fresh Branch

```bash
# Make sure you're on staging
git checkout staging

# Pull latest changes
git pull origin staging

# Create your feature branch
git checkout -b feature/your-feature-name
```

**Branch naming:**
- `feature/` - New features (e.g., `feature/new-contact-form`)
- `fix/` - Bug fixes (e.g., `fix/broken-link`)
- `content/` - Content updates (e.g., `content/update-about-page`)

### 2. Make Your Changes

- Edit files as needed
- Test locally: `npm run dev` (runs at http://localhost:3000)
- Make sure everything looks good!

### 3. Commit and Push

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "feat: add new contact form"

# Push your branch
git push origin feature/your-feature-name
```

### 4. Create a Pull Request (PR)

1. Go to GitHub: https://github.com/kaceygoins/glennlundy
2. You'll see a prompt to **"Compare & pull request"** - click it
3. **Base branch:** `staging` ← **Compare branch:** `feature/your-feature-name`
4. Add a title and description
5. Click **"Create pull request"**

**Vercel will automatically:**
- Deploy a preview of your changes
- Add a comment to your PR with the preview URL
- You can share this URL for review!

### 5. Wait for Review

- Nick will review your PR
- He might request changes
- Once approved, he'll merge to `staging`

### 6. Testing in Staging

- After merge, changes go to the staging preview URL
- Test everything thoroughly
- Once confirmed working, Nick will merge `staging` → `main`
- Then it goes live! 🚀

---

## Working Directly on GitHub (No Local Setup)

If you don't have the code locally, you can edit directly on GitHub:

### 1. Navigate to the File
- Go to the repository
- Click on the file you want to edit (e.g., `src/app/about/page.jsx`)

### 2. Click the Edit Button (Pencil Icon)
- Make your changes in the web editor

### 3. Commit Changes
- Scroll down to "Commit changes"
- Select **"Create a new branch for this commit and start a pull request"**
- Name your branch (e.g., `content/update-about`)
- Click **"Propose changes"**

### 4. Create the PR
- Make sure it's merging into `staging` (not `main`)
- Add description
- Submit!

---

## Branch Flow Diagram

```
feature/your-branch  →  staging  →  main
     (your work)      (testing)   (production)
```

---

## Commit Message Format

Use clear, descriptive commit messages:

**Good examples:**
- `feat: add testimonials section to homepage`
- `fix: correct broken link on contact page`
- `content: update about page bio`
- `style: improve mobile responsiveness on FAQ`

**Format:** `type: description`

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `content` - Content updates
- `style` - Visual/design changes
- `docs` - Documentation

---

## Need Help?

**Questions?** Ask Nick!

**Common issues:**
- **Merge conflicts?** Pull the latest `staging` and resolve conflicts
- **Preview not updating?** Check Vercel dashboard or wait a minute
- **Can't push?** Make sure you have write access to the repo

---

## Quick Command Reference

```bash
# Switch to staging
git checkout staging

# Get latest changes
git pull origin staging

# Create new branch
git checkout -b feature/my-feature

# See what changed
git status

# Add all changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push origin feature/my-feature

# Switch between branches
git checkout main
git checkout staging
git checkout feature/my-feature
```
