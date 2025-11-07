# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Assets

All assets (images, resume PDF) are located in the `public/assets` folder. Make sure:
- Profile image: `public/assets/WhatsApp Image 2025-10-19 at 11.43.14 PM.jpeg`
- Resume PDF: `public/assets/saurabh_melgirkar_resume.pdf`
- Project images are in `public/assets/`

## Features Implemented

✅ Modern black and purple theme
✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scroll animations
✅ Typewriter effect in hero section
✅ Glowing effects on section titles
✅ Google Analytics integration
✅ Resume download functionality
✅ Contact form with FormSubmit integration
✅ Social media links with hover effects
✅ Smooth fade-in animations for all sections

## Customization

### Change Colors
Edit `tailwind.config.js`:
- `dark-bg`: Background color
- `purple-primary`: Primary accent color
- `purple-secondary`: Secondary accent color
- `text-light`: Text color

### Update Google Analytics
Edit `index.html` and replace `G-4GV4GJLERX` with your GA tracking ID.

## Deployment

### Vercel
1. Push to GitHub
2. Import project on Vercel
3. Deploy

### Netlify
1. Push to GitHub
2. Import project on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Troubleshooting

### Images not loading
- Ensure assets are in `public/assets/` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (v16+ required)

