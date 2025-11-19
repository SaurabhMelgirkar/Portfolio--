# Fix White Screen Issue - Step by Step

## 🔍 Diagnosis Steps

### Step 1: Check Browser Console (CRITICAL)

1. **Open your website:**
   - `https://saurabhmelgirkar.github.io/portfolio-/`

2. **Open Developer Tools:**
   - Press `F12` or `Right-click → Inspect`
   - Go to **Console** tab

3. **Look for errors:**
   - ❌ Red error messages = Problem found
   - Common errors:
     - `Failed to load module` = JavaScript file not found
     - `404 Not Found` = File path incorrect
     - `CORS error` = Cross-origin issue

### Step 2: Check Network Tab

1. **In DevTools, go to Network tab**
2. **Reload the page (Ctrl+Shift+R)**
3. **Check these files:**
   - `index.html` - Should be 200 ✅
   - `index-xxx.js` - Should be 200 ✅
   - `index-xxx.css` - Should be 200 ✅
   - If any show 404 ❌ = Path problem

### Step 3: Verify File URLs

Check if these URLs work in your browser:
- `https://saurabhmelgirkar.github.io/portfolio-/assets/index-Zx9vYqlk.js`
- `https://saurabhmelgirkar.github.io/portfolio-/assets/index-CejXuKQ8.css`

If they return 404, the files aren't deployed correctly.

## 🔧 Quick Fixes

### Fix 1: Clear Browser Cache

1. **Hard refresh:**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Or use incognito/private mode:**
   - Open a new incognito window
   - Visit the site again

### Fix 2: Check Base Path

The base path must match your repository name exactly:
- Repository: `portfolio-`
- Base path: `/portfolio-/`
- URL: `https://saurabhmelgirkar.github.io/portfolio-/`

### Fix 3: Verify .nojekyll File

The `.nojekyll` file must exist in the deployed files. Check the build logs:
- Should see: `✓ .nojekyll exists`

## 🛠️ Common Issues & Solutions

### Issue 1: JavaScript File 404

**Symptom:** Console shows "Failed to load module" or 404 for JS file

**Solution:**
- Check if the file exists at the correct path
- Verify base path in `vite.config.js` is `/portfolio-/`
- Rebuild and redeploy

### Issue 2: Base Path Mismatch

**Symptom:** Files load but React doesn't render

**Solution:**
- Verify `vite.config.js` has: `base: '/portfolio-/'`
- Check all asset paths use `import.meta.env.BASE_URL`
- Rebuild and redeploy

### Issue 3: Browser Cache

**Symptom:** Old version cached

**Solution:**
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Use incognito mode

## ✅ Verification Checklist

After fixes, verify:
- [ ] Console shows no errors
- [ ] Network tab shows all files loading (200 status)
- [ ] JavaScript file loads successfully
- [ ] CSS file loads successfully
- [ ] Page renders content (not white screen)

## 📝 Next Steps

1. **Check the console** - This will tell us the exact error
2. **Check the network tab** - See which files are failing
3. **Share the error messages** - So we can fix the specific issue

