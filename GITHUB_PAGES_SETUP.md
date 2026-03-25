# GitHub Pages Deployment Guide

## Important Note

This project has **two different deployment modes**:

### 1. **Local/Server Deployment** (Full functionality)
- Run with Node.js backend: `node server.js`
- Access at: `http://localhost:5000`
- **Full features**: Symptom search, disease prediction API
- All files load correctly from `http://localhost:5000/pages/`, `http://localhost:5000/css/`, etc.

### 2. **GitHub Pages Deployment** (Demo/Frontend only)
- Repository: `https://github.com/nandanhs006/MediMind--------Symptom-based-disease-matching-webapp`
- Live URL: `https://nandanhs006.github.io/MediMind--------Symptom-based-disease-matching-webapp/`
- **Limited features**: Sidebar, navigation, pages load but API calls show demo message
- Uses relative paths for all assets: `public/css/`, `public/assets/`, `public/js/`

## Why API Doesn't Work on GitHub Pages

GitHub Pages is a **static hosting service** - it only serves HTML, CSS, JS files. It cannot:
- Run Node.js server
- Connect to PostgreSQL database
- Execute backend API logic

## Solution for Full Functionality

Deploy to a server that supports Node.js:
- **Vercel** (recommended for Node.js)
- **Heroku**
- **Railway**
- **Render**
- **AWS/DigitalOcean** (VPS)

### Quick Deploy to Vercel:
1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel automatically detects `server.js` and deploys with backend
4. All features will work!

## Current GitHub Pages Setup

All asset paths have been converted to **relative paths** so they work on GitHub Pages:

```
✅ index.html → references public/css/style.css
✅ public/pages/search.html → references ../css/style.css
✅ public/js/main.js → BASE_PATH detection for subdirectory
✅ All links use relative URLs (e.g., ../../index.html)
```

## Testing

### Local (Full app):
```bash
node server.js
# Visit http://localhost:5000
```

### GitHub Pages:
Visit `https://nandanhs006.github.io/MediMind--------Symptom-based-disease-matching-webapp/`
- Navigation and pages work ✅
- API shows "Demo Mode" message ⚠️

## Migration Path

To move from GitHub Pages to a full deployment:

1. **Option A - Vercel (Easiest)**
   - Connect your GitHub repo
   - Vercel auto-detects and deploys

2. **Option B - Custom Server**
   - Point custom domain to your server
   - Backend API works automatically
   - Database connection established

---

**Current Status**: Frontend ready for GitHub Pages, backend requires separate server deployment.
