# Deployment Guide - MediMind WebApp to Render

## Prerequisites
- Render account (https://render.com)
- GitHub repository with the project pushed
- Neon PostgreSQL database (Free tier available)

---

## Step 1: Set Up PostgreSQL Database on Neon

1. **Create a Neon Account**
   - Visit https://neon.tech
   - Sign up with your email or GitHub account

2. **Create a New Project**
   - Click "New Project"
   - Name it something like "medimind-db"
   - Choose a region closest to your users
   - Note the connection string details

3. **Get Connection Details**
   - Go to Dashboard > Your Project > Connection string
   - You'll need:
     - Host
     - Database name (default: neondb)
     - User (default: neondb_owner)
     - Password
     - Port (default: 5432)

4. **Initialize Database Schema**
   ```sql
   -- Create symptoms table
   CREATE TABLE symptoms (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) NOT NULL UNIQUE
   );

   -- Create diseases table
   CREATE TABLE diseases (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) NOT NULL UNIQUE
   );

   -- Create disease_symptoms junction table
   CREATE TABLE disease_symptoms (
     disease_id INT NOT NULL REFERENCES diseases(id),
     symptom_id INT NOT NULL REFERENCES symptoms(id),
     PRIMARY KEY (disease_id, symptom_id)
   );

   -- Insert sample data (customize based on your needs)
   INSERT INTO symptoms (name) VALUES 
   ('fever'), ('cough'), ('headache'), ('sore throat'),
   ('body ache'), ('fatigue'), ('shortness of breath');

   INSERT INTO diseases (name) VALUES 
   ('Common Cold'), ('COVID-19'), ('Influenza'), ('Pneumonia');

   INSERT INTO disease_symptoms (disease_id, symptom_id) VALUES 
   (1, 1), (1, 2), (1, 4), (2, 1), (2, 2), (2, 3), 
   (3, 1), (3, 2), (3, 5), (4, 2), (4, 6), (4, 7);
   ```

---

## Step 2: Deploy to Render

### Option A: Using Render Dashboard (Recommended)

1. **Connect GitHub Repository**
   - Log in to Render (https://render.com)
   - Click "New Web Service"
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account
   - Select the medimind-webapp repository

2. **Configure Deployment**
   - **Name**: medimind-webapp (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free tier for testing, paid for production

3. **Set Environment Variables**
   - In Render dashboard, go to Environment > Environment Variables
   - Add these variables from your Neon database:
     ```
     DB_USER=neondb_owner
     DB_HOST=your-project.neon.tech
     DB_NAME=neondb
     DB_PASSWORD=your-password
     DB_PORT=5432
     NODE_ENV=production
     ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy on each git push

### Option B: Using render.yaml

1. **Ensure render.yaml exists** (already created in project root)

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add render configuration"
   git push origin main
   ```

3. **Deploy**
   - Go to https://dashboard.render.com
   - Click "New" > "YAML"
   - Connect your GitHub repository
   - Render will read render.yaml automatically

---

## Step 3: Verify Deployment

1. **Check Deployment Status**
   - Go to Render Dashboard
   - Check "Events" tab for deployment logs
   - Status should show "Live"

2. **Test the Application**
   - Visit your app URL: `https://medimind-webapp.onrender.com`
   - Test the search functionality
   - Test the prediction API

3. **Monitor Logs**
   - In Render dashboard, click "Logs" tab
   - Check for any error messages
   - Ensure database connection is successful

---

## Step 4: Post-Deployment Verification

### Health Check
```bash
curl https://your-app-url.onrender.com/
# Should return the index.html page
```

### API Test - Get Symptoms
```bash
curl "https://your-app-url.onrender.com/api/symptoms?q=fever"
# Should return array of matching symptoms
```

### API Test - Predict Disease
```bash
curl -X POST https://your-app-url.onrender.com/api/predict \
  -H "Content-Type: application/json" \
  -d '{"symptoms":["fever","cough"]}'
# Should return matching diseases with percentages
```

---

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_USER` | PostgreSQL username | neondb_owner |
| `DB_HOST` | PostgreSQL host | my-project.neon.tech |
| `DB_NAME` | Database name | neondb |
| `DB_PASSWORD` | Database password | secret123 |
| `DB_PORT` | Database port | 5432 |
| `NODE_ENV` | Environment | production |
| `PORT` | Server port (auto-set by Render) | 3000 |

---

## Troubleshooting

### Issue: "Cannot connect to database"
- **Solution**: Verify all DB_* environment variables are set correctly
- Check Neon dashboard for connection string
- Ensure database user has proper permissions

### Issue: "Application crashes on startup"
- **Solution**: Check Render logs for errors
- Verify npm dependencies installed: `npm install`
- Check Node version compatibility (requires v18+)

### Issue: "Static files not loading"
- **Solution**: Verify public/ directory structure
- Check that express.static() is configured correctly in app.js
- Ensure CSS/JS paths are relative

### Issue: "404 on API endpoints"
- **Solution**: Verify routes in diseaseRoutes.js
- Check database schema is initialized
- Ensure symptoms/diseases tables have sample data

---

## Security Notes

⚠️ **Important**:
- Never commit `.env` to Git (it's in `.gitignore`)
- Always use strong database passwords
- Render environment variables are encrypted at rest
- Consider enabling HTTPS (automatic on Render)
- Regularly update dependencies: `npm audit`

---

## Monitoring & Maintenance

1. **Check Application Health**
   - Monitor Render dashboard for uptime
   - Set up email alerts for crashes

2. **Monitor Database**
   - View connection limit usage in Neon dashboard
   - Monitor query performance if needed
   - Keep backups enabled (Neon default)

3. **Update Dependencies**
   ```bash
   npm update
   npm audit fix
   git push  # Render auto-deploys
   ```

---

## Rollback

If deployment fails:
1. Check Render "Events" tab for error details
2. Fix the issue in your local code
3. Push fix to GitHub
4. Render will auto-deploy the new version

---

## Support

- **Render Docs**: https://render.com/docs
- **Neon Docs**: https://neon.tech/docs
- **Express.js Docs**: https://expressjs.com
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

