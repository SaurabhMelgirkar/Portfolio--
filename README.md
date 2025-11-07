# Saurabh Melgirkar - Portfolio Website

A modern, responsive developer portfolio website built with React and Tailwind CSS, featuring a futuristic black and purple theme.

## Features

- 🎨 Modern dark theme with purple accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🔍 Google Analytics integration
- 📄 Resume download functionality
- 📧 Contact form integration
- 🎯 Smooth scroll navigation

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Typewriter.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── (assets folder should be placed here)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Assets Setup

Place your assets folder (images, resume PDF) in the `public` directory. The portfolio references:
- Profile image: `/saurabh-dev-portfolio/assets/WhatsApp Image 2025-10-19 at 11.43.14 PM.jpeg`
- Resume PDF: `/saurabh-dev-portfolio/assets/saurabh_melgirkar_resume.pdf`
- Project images from the assets folder

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
- `dark-bg`: #0B0B0F
- `purple-primary`: #9D4EDD
- `purple-secondary`: #C77DFF
- `text-light`: #EAEAEA

### Google Analytics

Update the Google Analytics ID in `index.html`:
```html
gtag('config', 'YOUR_GA_ID');
```

## Deployment

The site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

© 2025 Saurabh Melgirkar

