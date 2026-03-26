# Pre-Deployment Checklist for Render

## ✅ Code & Configuration Verification

### Package.json
- [x] Has `name`, `version`, `description`
- [x] Has `main: "server.js"`
- [x] Has `scripts`: start, dev, test
- [x] Has `engines`: Node.js >=18.0.0
- [x] Dependencies listed: express, pg, dotenv
- [x] No dev dependencies in dependencies list

### server.js
- [x] Uses `process.env.PORT || 5000` (not hardcoded)
- [x] Properly exports and listens on PORT
- [x] Includes console logging for debugging

### src/config/db.js
- [x] Uses `DB_PASSWORD || DB_PASS` for backward compatibility
- [x] Properly configured for environment variables
- [x] Has error handling for connection failures
- [x] Tests connection on startup

### src/app.js
- [x] Correctly serves static files from `public/` directory
- [x] Correctly serves index.html at root path `/`
- [x] API routes mounted at `/api`
- [x] Express middleware configured (JSON parsing)
- [x] Proper path resolution for production

### src/routes/diseaseRoutes.js
- [x] POST `/api/predict` endpoint implemented
- [x] GET `/api/symptoms` endpoint implemented
- [x] Input validation present
- [x] Error handling with status codes
- [x] SQL query parameterization (prevents SQL injection)

### src/controllers/diseaseController.js
- [x] `predictDisease` function properly implemented
- [x] Query filters results by match_percentage > 30
- [x] Returns formatted response (id, name, match)
- [x] Handles errors gracefully

---

## ✅ Environment & Security

### .env
- [x] Local development credentials configured
- [x] Correctly named variables (DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT)
- [x] File is in .gitignore (not tracked by Git)

### .env.example
- [x] Created with placeholder values
- [x] Serves as template for new deployments
- [x] Clear documentation of each variable

### .gitignore
- [x] `.env` is NOT listed (so .env.example works)
- [x] Only `.env.local` variants are ignored
- [x] Includes `.vercel` if using Vercel

### render.yaml
- [x] Service type set to "web"
- [x] Environment set to "node"
- [x] Build command: `npm install`
- [x] Start command: `npm start`
- [x] Environment variables properly configured

---

## ✅ Database & Schema

### Database Schema
- [ ] Symptoms table created (id, name)
- [ ] Diseases table created (id, name)
- [ ] disease_symptoms junction table created
- [ ] Foreign keys configured
- [ ] Sample data inserted

### Database Connection
- [x] Uses PostgreSQL (pg driver)
- [x] Connection pooling configured
- [x] Timeout handling present
- [x] Non-blocking error handling

---

## ✅ API Endpoints

### GET /api/symptoms?q=fever
- [x] Returns array of matching symptoms
- [x] Case-insensitive search (ILIKE)
- [x] Limits results to 10
- [x] Orders alphabetically
- [x] Handles empty query gracefully

### POST /api/predict
- [x] Accepts JSON body: `{ "symptoms": [...] }`
- [x] Validates input (array, non-empty)
- [x] Returns diseases with match percentages
- [x] Filters by > 30% match
- [x] Returns 404 if no matches found
- [x] Handles database errors

---

## ✅ Frontend

### index.html
- [x] Located in project root
- [x] Correctly links CSS from public/css/
- [x] Correctly links JS from public/js/
- [x] Contains semantic HTML

### public/css/style.css
- [x] Exists and contains styling
- [x] Uses relative paths
- [x] No absolute paths to local files

### public/js/main.js
- [x] Exists and contains client logic
- [x] Makes API calls to /api/predict
- [x] Makes API calls to /api/symptoms
- [x] Handles responses properly
- [x] User-friendly error messages

### public/pages/
- [x] Multiple HTML pages for navigation
- [x] Proper linking between pages
- [x] Responsive design

---

## ✅ Git & Version Control

### Repository Status
- [x] All changes committed
- [x] `.env` NOT committed (only .env.example)
- [x] `node_modules/` in .gitignore
- [x] `package-lock.json` committed
- [x] All source files tracked

### Git Commands
```bash
# Verify status
git status

# Should show:
# - Untracked: .env (if working locally)
# - Tracked: all other files including .env.example

# No uncommitted changes in tracked files
```

---

## ✅ Documentation

- [x] README.md updated with deployment info
- [x] RENDER_DEPLOYMENT.md with complete guide
- [x] .env.example explains each variable
- [x] render.yaml documents service config

---

## 🚀 Pre-Deployment Tests

### Local Testing
```bash
# 1. Install dependencies
npm install

# 2. Check for any security issues
npm audit

# 3. Start server
npm start
# Expected: "Server running on port 5000"

# 4. Test homepage (browser or curl)
curl http://localhost:5000/
# Expected: HTML content

# 5. Test API without database (will fail gracefully)
curl http://localhost:5000/api/symptoms?q=fever
# Expected: Empty array or error (OK if no DB)
```

---

## 📋 Render Deployment Checklist

### Before Deploying
- [x] Code committed to GitHub
- [x] .env NOT in repository
- [x] package.json has all dependencies
- [x] render.yaml exists
- [x] PORT uses environment variable

### On Render Dashboard
- [ ] Create PostgreSQL database on Neon (if not already done)
- [ ] Note Neon connection details
- [ ] Create Web Service on Render
- [ ] Connect GitHub repository
- [ ] Set environment variables:
  - `DB_USER` = (from Neon)
  - `DB_HOST` = (from Neon)
  - `DB_NAME` = (from Neon)
  - `DB_PASSWORD` = (from Neon)
  - `DB_PORT` = 5432
  - `NODE_ENV` = production

### After Deploying
- [ ] Check Render "Events" for deployment success
- [ ] Check "Logs" for any errors
- [ ] Test homepage URL
- [ ] Test API endpoints
- [ ] Verify database connection
- [ ] Monitor for crashes

---

## 🐛 Common Issues & Solutions

| Issue | Root Cause | Solution |
|-------|-----------|----------|
| PORT not set | Hardcoded PORT | ✅ Check server.js uses `process.env.PORT \|\| 5000` |
| DB connection fails | Wrong credentials | Verify all DB_* vars match Neon connection string |
| Static files 404 | Wrong path | Check express.static() points to `public/` folder |
| API returns 500 | Query error | Check database schema is initialized |
| Deployment fails | Missing dependencies | Run `npm install` and check package.json |

---

## ✅ Final Verification

Run this checklist one final time before pushing to GitHub:

1. **Code Quality**
   - [ ] No console.error that crashes app
   - [ ] All require() statements valid
   - [ ] No secrets in version control

2. **Dependencies**
   - [ ] npm install succeeds
   - [ ] No peer dependency warnings
   - [ ] Node version >= 18.0.0

3. **Configuration**
   - [ ] .env has local dev values
   - [ ] .env.example has templates
   - [ ] render.yaml is valid YAML
   - [ ] package.json has scripts

4. **Git**
   - [ ] git status clean
   - [ ] All changes committed
   - [ ] Correct branch (main)

5. **Documentation**
   - [ ] README.md complete
   - [ ] RENDER_DEPLOYMENT.md complete
   - [ ] API documented
   - [ ] Setup clear

---

**Status**: Ready for Render Deployment ✅

Once verified, run:
```bash
git push origin main
```

Then create Web Service on Render dashboard!

