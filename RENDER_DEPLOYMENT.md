# Render Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### Step 2: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your repos

### Step 3: Create Web Service
1. Click "New +" → "Web Service"
2. Select your repo: `MediMind--------Symptom-based-disease-matching-webapp`
3. Configure:
   - **Name**: `medimind`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

### Step 4: Add Environment Variables
Click "Environment" and add:
```
DB_USER=postgres
DB_PASSWORD=[copy from PostgreSQL instance]
DB_HOST=[copy from PostgreSQL instance]
DB_PORT=5432
DB_NAME=medimind
```

### Step 5: Create PostgreSQL Database
1. Click "New +" → "PostgreSQL"
2. Configure:
   - **Name**: `medimind-db`
   - **Database**: `medimind`
   - **Username**: `postgres`
   - **Region**: Same as your web service
   - **Plan**: Free

3. Copy connection details and paste into Web Service environment variables

### Step 6: Deploy
Render auto-deploys when you push to main.

Your app will be live at: `https://medimind.onrender.com` (or similar)

## Update Your Code

Replace API URL in `public/js/main.js`:

```javascript
const API_BASE_URL = IS_GITHUB_PAGES 
  ? null 
  : (BASE_PATH + "/api");
```

With:

```javascript
const API_BASE_URL = (window.location.hostname === 'nandanhs006.github.io')
  ? null
  : (BASE_PATH + "/api");
```

## Post-Deployment

1. **Initialize Database**:
   - Connect to Render PostgreSQL using pgAdmin or psql
   - Run `src/models/schema.sql` to create tables

2. **Test**: Visit your Render URL and test symptom search

## Free Tier Limits
- Web Service: 750 free hours/month (always on = uses all hours)
- PostgreSQL: 90 days free, then $7/month

## Troubleshooting

If database connection fails:
1. Check environment variables match exactly
2. Verify PostgreSQL instance is running
3. Check Render logs: Dashboard → Web Service → Logs

## Cost (Optional Upgrades)
- Keep running 24/7: Add paid plan (~$7/month for web service)
- Keep database: $7/month for PostgreSQL
- Total: ~$14/month for full functionality
