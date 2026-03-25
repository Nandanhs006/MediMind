# Render Deployment - Setup Checklist

## ✅ Build Status
Your code built successfully on Render!

```
Build command: npm install
Status: ✅ Success
Deployment: In progress...
```

## 📋 Next Steps (Do These Now)

### 1. Set Environment Variables on Render
Go to your Render Web Service → Environment:

Add these variables:
```
DB_USER=postgres
DB_PASSWORD=[your_password]
DB_HOST=[your_host].c.db.onrender.com
DB_PORT=5432
DB_NAME=medimind
NODE_ENV=production
```

### 2. Create PostgreSQL Database (If Not Done)
- Go to Render Dashboard → New + → PostgreSQL
- **Name**: `medimind-db`
- **Database**: `medimind`
- **Plan**: Free
- Click Create
- Copy connection info from Info tab → External Database URL

### 3. Initialize Database Schema
Once database is created:

**Option A: Using pgAdmin (Web Interface)**
- Render automatically provides pgAdmin link
- Run the SQL from `src/models/schema.sql`

**Option B: Using Command Line**
```bash
psql -U postgres -h [host].c.db.onrender.com -d medimind -f src/models/schema.sql
```

### 4. Verify Deployment
After setting environment variables:
- Render auto-redeploys
- Check Logs tab for errors
- Test: `https://[your-service].onrender.com`

## 🔍 Troubleshooting

**Issue: Blank Page or 502 Error**
- Check Logs tab in Render dashboard
- Verify environment variables are correct
- Confirm PostgreSQL instance exists and is running

**Issue: "Demo Mode" on Frontend**
- Backend URL not recognized
- Need to update API URL in frontend
- Or ensure database is initialized

**Issue: Database Connection Failed**
- Check password is correct
- Verify host/port match
- Ensure database `medimind` exists

## 📊 Current Status

| Component | Status | URL |
|-----------|--------|-----|
| Frontend (GitHub Pages) | ✅ Live | `https://nandanhs006.github.io/MediMind...` |
| Backend Build | ✅ Complete | Render |
| Backend Runtime | ⏳ Starting | `https://[service].onrender.com` |
| Database | ⏳ Waiting for setup | Render PostgreSQL |

## 🎯 When Complete

1. **Frontend works**: ✅ Already live
2. **Backend responds**: Set env vars → Auto-redeploy
3. **Database connected**: Add schema → Test API
4. **Full app working**: Try symptom search!

## 📝 Remember

- Free tier: 750 hours/month (test usage)
- PostgreSQL: Free 90 days, then $7/month
- Web Service: Free with limitations

## Next Action

👉 **Go to Render Dashboard → Set Environment Variables** 

Then check the Logs tab to see if app starts without errors!
