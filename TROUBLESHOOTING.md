# Troubleshooting GitHub Pages Deployment

## 🔍 How to Check Deployment Logs

### Step 1: Access GitHub Actions
1. Go to your repository: `https://github.com/SaurabhMelgirkar/portfolio-`
2. Click on the **Actions** tab
3. You'll see a list of workflow runs
4. Click on the most recent run (it will show "Deploy to GitHub Pages")

### Step 2: Check Build Logs
1. In the workflow run, you'll see two jobs: **build** and **deploy**
2. Click on the **build** job to expand it
3. Check each step:
   - ✅ **Checkout** - Should complete successfully
   - ✅ **Setup Node.js** - Should show Node version 20
   - ✅ **Install dependencies** - Should install all packages
   - ✅ **Build** - Should show "built in X.XXs"
   - ✅ **Verify build output** - Will show what files were created
   - ✅ **Upload artifact** - Should upload successfully

### Step 3: Check Deploy Logs
1. Click on the **deploy** job
2. Check the **Deploy to GitHub Pages** step
3. Look for any error messages

### Step 4: Common Errors and Solutions

#### ❌ Error: "Build failed"
**Solution:**
- Check the build logs for specific error messages
- Common causes:
  - Missing dependencies
  - Syntax errors in code
  - Import errors

#### ❌ Error: "404 Not Found" for assets
**Solution:**
- Verify base path is set to `/portfolio-/` in `vite.config.js`
- Ensure all asset paths use `import.meta.env.BASE_URL`
- Check that assets are in `public/assets/` folder

#### ❌ White Screen Issue
**Causes and Solutions:**

1. **JavaScript not loading:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for red error messages
   - Check Network tab for failed requests (404 errors)

2. **Base path mismatch:**
   - Verify repository name is exactly `portfolio-`
   - Check `vite.config.js` has `base: '/portfolio-/'`
   - Ensure GitHub Pages is configured correctly

3. **Missing .nojekyll file:**
   - The file should be in `dist/.nojekyll` after build
   - Check build logs for "✓ .nojekyll exists"

4. **Asset paths incorrect:**
   - All components now use `getAssetPath()` helper
   - Assets should be in `public/assets/` folder
   - Paths will automatically include base URL

## 🛠️ Debugging Steps

### 1. Check Browser Console
```javascript
// Open DevTools (F12) and check:
console.log('Base URL:', import.meta.env.BASE_URL)
// Should output: /portfolio-/
```

### 2. Verify File Structure
After build, `dist/` folder should contain:
```
dist/
├── .nojekyll
├── 404.html
├── index.html
└── assets/
    ├── index-xxx.js
    ├── index-xxx.css
    └── (all your images and PDFs)
```

### 3. Test Locally
```bash
# Build the project
npm run build

# Preview the build
npm run preview
# Visit http://localhost:4173/portfolio-/
```

### 4. Check Network Requests
1. Open DevTools → Network tab
2. Reload the page
3. Look for:
   - ✅ 200 status codes (success)
   - ❌ 404 status codes (file not found)
   - ❌ CORS errors

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at: `https://saurabhmelgirkar.github.io/portfolio-/`
- [ ] No console errors in browser DevTools
- [ ] All images load correctly
- [ ] Navigation links work
- [ ] Resume PDF downloads
- [ ] Contact form functions
- [ ] All sections render properly
- [ ] Mobile responsive design works

## 📝 Recent Fixes Applied

1. ✅ **Asset Paths Fixed**
   - Updated all components to use `import.meta.env.BASE_URL`
   - Created `getAssetPath()` helper function
   - Fixed paths in: Hero, Projects, CertificatesCarousel

2. ✅ **404.html Added**
   - Created fallback for client-side routing
   - Automatically copied to dist during build

3. ✅ **Build Verification**
   - Added verification step in workflow
   - Checks for required files (.nojekyll, 404.html, index.html)

4. ✅ **Enhanced Logging**
   - Workflow now shows detailed build output
   - Lists all files in dist folder

## 🚀 Next Steps

1. **Push your changes:**
   ```bash
   git add .
   git commit -m "Fix asset paths for GitHub Pages"
   git push origin master
   ```

2. **Monitor deployment:**
   - Go to Actions tab
   - Watch the workflow run
   - Check for any errors

3. **Test the live site:**
   - Visit: `https://saurabhmelgirkar.github.io/portfolio-/`
   - Open DevTools and check console
   - Verify all assets load

## 💡 Still Having Issues?

If you're still seeing a white screen:

1. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or use incognito/private mode

2. **Check the actual deployed files:**
   - Visit: `https://saurabhmelgirkar.github.io/portfolio-/assets/index-xxx.js`
   - If you see 404, the base path is wrong
   - If you see the file, check browser console for JavaScript errors

3. **Verify GitHub Pages settings:**
   - Repository → Settings → Pages
   - Source should be: **GitHub Actions**
   - Not "Deploy from a branch"

4. **Check repository name:**
   - Must be exactly: `portfolio-`
   - Case-sensitive!

## 📞 Need More Help?

Check the build logs in GitHub Actions for specific error messages. The workflow now includes detailed verification steps that will help identify the exact issue.

