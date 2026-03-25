# MediMind - Quick Deployment Guide

## Current Status
- ✅ Frontend: Working on GitHub Pages
- ⚠️ Backend: Needs Render deployment for full features
- ✅ Code: Ready to deploy

## 🚀 Deploy to Render (5 minutes)

### Prerequisites
- GitHub account with this repo
- Render account (free at https://render.com)

### Step-by-Step

**1. Push Latest Code**
```bash
cd "path\to\Symptom-based-disease-matching-webapp"
git add .
git commit -m "Deploy to Render"
git push origin main
```

**2. Go to Render Dashboard**
- https://render.com/dashboard

**3. Create PostgreSQL Database**
- Click **New +** → **PostgreSQL**
- **Name**: `medimind-db`
- **Database**: `medimind`
- **Region**: Choose closest to you
- **Plan**: Free
- Click **Create**
- ⏳ Wait 2-3 minutes for database to initialize

**4. Copy Database Connection Info**
- Dashboard → PostgreSQL instance → Info tab
- Copy: `External Database URL` or individual credentials

**5. Create Web Service**
- Click **New +** → **Web Service**
- **Repository**: Select `MediMind--------Symptom-based-disease-matching-webapp`
- **Name**: `medimind` (or any name)
- **Region**: Same as database
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Plan**: Free

**6. Add Environment Variables**
- In Web Service settings, go to **Environment**
- Add these variables (from your PostgreSQL instance):

```
DB_USER=postgres
DB_PASSWORD=[your_password]
DB_HOST=[your_host.render.com]
DB_PORT=5432
DB_NAME=medimind
```

- Click **Deploy**

**7. Initialize Database**
Once deployed, you need to run the schema:

Option A: Using Render PostgreSQL Console
- Go to PostgreSQL instance → Info → Connection
- Use `psql` to connect
- Run: `\i src/models/schema.sql`

Option B: Add initialization script
- Create `init.sql` in root
- Copy contents of `src/models/schema.sql`
- Render will auto-run it on deploy

**8. Test**
Once deployed:
- Frontend: GitHub Pages (already working)
- Backend: `https://medimind.onrender.com`
- Visit and test symptom search!

## 📊 Result

After deployment:

| Feature | Status |
|---------|--------|
| Frontend (GitHub Pages) | ✅ Live |
| Backend (Render) | ✅ Live |
| Database (Render PostgreSQL) | ✅ Live |
| Symptom Search | ✅ Working |
| Disease Prediction | ✅ Working |

## 💰 Cost Breakdown

**Free Tier**:
- Web Service: 750 free hours/month (enough for testing)
- PostgreSQL: 90 days free, then $7/month

**For 24/7 Uptime**:
- Web Service: $7/month
- PostgreSQL: $7/month
- **Total: $14/month** (or keep free but with limitations)

## 🔗 Your URLs

After deployment:

```
Frontend (GitHub Pages):
https://nandanhs006.github.io/MediMind--------Symptom-based-disease-matching-webapp/

Backend (Render - after setup):
https://medimind.onrender.com/api/symptoms
https://medimind.onrender.com/api/predict
```

## ⚙️ Troubleshooting

**Backend 502 Error**
- Check Render logs for errors
- Verify environment variables are correct
- Confirm PostgreSQL instance is running

**Database Connection Failed**
- Double-check credentials in environment variables
- Ensure database is created
- Run schema initialization

**Symptoms Search Shows "Demo Mode"**
- Backend URL not set correctly
- Check if API_BASE_URL is being detected
- Open browser console and check network requests

## Next Steps

1. Create Render account (free)
2. Follow deployment steps above
3. Test on https://medimind.onrender.com
4. Share your working app! 🎉

## Support

- Render Docs: https://render.com/docs
- PostgreSQL Setup: https://render.com/docs/databases
- Need help? Check Render logs or contact support

---

**All set! Deploy now and enjoy your working medical symptom app! 🚀**
