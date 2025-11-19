# Fix Multiple Workflows Running - Step by Step Guide

## 🔴 Problem
You have **TWO workflows** running simultaneously:
1. **Default "pages build and deployment"** (automatically triggered by GitHub)
2. **Custom "Deploy to GitHub Pages"** (our workflow)

This causes conflicts and cancellations.

## ✅ Solution - Follow These Steps EXACTLY

### Step 1: Disable Default GitHub Pages Workflow (CRITICAL)

1. **Go to your repository settings:**
   - Visit: `https://github.com/SaurabhMelgirkar/portfolio-/settings/pages`

2. **Find "Build and deployment" section:**
   - Look for the **Source** dropdown

3. **Change the source:**
   - **Current (WRONG):** Probably says "Deploy from a branch" or "GitHub Actions (legacy)"
   - **Change to:** Select **"GitHub Actions"** from the dropdown
   - ⚠️ **IMPORTANT:** Choose "GitHub Actions" (NOT "Deploy from a branch")

4. **Save:**
   - Click **Save** button

5. **Verify:**
   - After saving, the source should show: **"GitHub Actions"**
   - This disables the default "pages build and deployment" workflow

### Step 2: Cancel All Running Workflows

1. **Go to Actions tab:**
   - Visit: `https://github.com/SaurabhMelgirkar/portfolio-/actions`

2. **Cancel all running workflows:**
   - Look for any workflows with status: "In progress", "Queued", or "Waiting"
   - Click on each running workflow
   - Click the **"..."** menu (three dots) in the top right
   - Select **"Cancel workflow run"**
   - Repeat for ALL running workflows

3. **Wait for cancellation:**
   - Wait 1-2 minutes for all workflows to cancel/complete

### Step 3: Push the Updated Workflow

I've renamed and optimized the workflow file. Now push it:

```bash
git add .
git commit -m "Fix: Use single workflow file to prevent conflicts"
git push origin master
```

### Step 4: Verify Only One Workflow Runs

1. **Go to Actions tab:**
   - Visit: `https://github.com/SaurabhMelgirkar/portfolio-/actions`

2. **Check the latest run:**
   - You should see **ONLY ONE** workflow: **"Deploy to GitHub Pages"**
   - It should NOT show "pages build and deployment"

3. **Monitor the deployment:**
   - Click on the workflow run
   - Watch it complete successfully
   - Should show green checkmarks ✅

### Step 5: Test Your Website

After the workflow completes successfully:

1. **Visit your site:**
   - `https://saurabhmelgirkar.github.io/portfolio-/`

2. **Check if it loads:**
   - Should NOT show a white screen
   - All images should load
   - Navigation should work

## 🎯 What Changed

1. ✅ **Renamed workflow file:**
   - From: `jekyll-gh-pages.yml`
   - To: `deploy.yml` (standard name)

2. ✅ **Updated concurrency:**
   - Changed group back to `'pages'` (standard)
   - Set `cancel-in-progress: true` to prevent multiple runs

3. ✅ **Single workflow:**
   - Only one workflow file now exists
   - No conflicts with default workflows

## ⚠️ Critical Settings Check

After Step 1, verify these settings:

**Repository Settings → Pages:**
- ✅ Source: **GitHub Actions**
- ❌ NOT: "Deploy from a branch"
- ❌ NOT: "GitHub Actions (legacy)"

**If you see "Deploy from a branch":**
- This triggers the default workflow
- You MUST change it to "GitHub Actions"

## 🔍 Troubleshooting

### If you still see multiple workflows:

1. **Check repository settings again:**
   - Make absolutely sure Source = "GitHub Actions"

2. **Check for other workflow files:**
   - Go to: `.github/workflows/` folder
   - Should only have: `deploy.yml`
   - Delete any other `.yml` files in that folder

3. **Clear workflow cache:**
   - Wait 5 minutes after changing settings
   - GitHub needs time to update

### If workflow fails:

1. **Check the build logs:**
   - Click on the failed workflow
   - Look at the "build" job
   - Check for error messages

2. **Common errors:**
   - Missing dependencies → Run `npm install` locally first
   - Build errors → Check the error message in logs

## ✅ Success Indicators

You'll know it's working when:
- ✅ Only ONE workflow appears in Actions tab
- ✅ Workflow name: "Deploy to GitHub Pages"
- ✅ Status: Green checkmark ✅
- ✅ Website loads correctly
- ✅ No white screen
- ✅ All assets load

## 📝 Summary

**The key fix:** Change GitHub Pages source from "Deploy from a branch" to "GitHub Actions" in repository settings. This disables the default workflow and uses only our custom one.

