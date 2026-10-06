# MECH SPACE - GitHub & Vercel Deployment Guide

## 📋 PART 1: PUSH TO GITHUB

### Step 1: Create GitHub Personal Access Token (PAT)
You need a GitHub token to authenticate:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. **Token name:** `MECH-SPACE-Deploy`
4. **Expiration:** 90 days (or longer)
5. **Scopes to select:**
   - ✅ repo (Full control of private repositories)
   - ✅ workflow (Update GitHub Action workflows)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

**Example token format:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### Step 2: Configure Git to Use HTTPS with Token

**Option A: Use Git Credential Manager (Recommended)**

```bash
# Windows will prompt for credentials on first push
# Just paste your GitHub username and token when prompted

git push -u origin main
# When prompted:
# Username: your-github-username
# Password: paste-your-PAT-token-here
```

**Option B: Use Token in URL (Less Secure)**

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/parthprajapati680-art/MECH-SPACE.git
git push -u origin main
```

Replace `YOUR_TOKEN` with your actual token.

---

### Step 3: Push Project to GitHub

```bash
cd "c:\Users\het22\Downloads\parth web sites\web"

# Verify changes are staged
git status

# Add all files if not already done
git add .

# Create commit
git commit -m "feat: Groq API integration and Master system prompt chatbot training"

# Push to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to 8 threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX)
remote: Resolving deltas: 100% (XX/XX), done.
To https://github.com/parthprajapati680-art/MECH-SPACE.git
 * [new branch]      main -> main
Branch 'main' set to track remote branch 'main' from 'origin'.
```

✅ **Success!** Your code is now on GitHub.

---

## 🚀 PART 2: DEPLOY TO VERCEL

### Step 1: Sign Up / Sign In to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. **Recommended:** Sign up with GitHub (this automatically links your repositories)
4. Authorize Vercel to access your GitHub account

---

### Step 2: Import Project to Vercel

1. After login, go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. **Search for:** `MECH-SPACE`
5. Select your repository: `parthprajapati680-art/MECH-SPACE`
6. Click "Import"

---

### Step 3: Configure Project Settings

**Framework:** Next.js (should auto-detect)  
**Root Directory:** `./` (or `web/` if needed)

---

### Step 4: Set Environment Variables

On the "Configure Project" page, add your environment variables:

```
GROQ_API_KEY=your_groq_api_key_here

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

⚠️ **IMPORTANT:** 
- Keep `GROQ_API_KEY` SECRET (prefix with underscore won't expose it)
- Only make keys public if prefixed with `NEXT_PUBLIC_`

---

### Step 5: Deploy

Click "Deploy" button and wait for:
- ✅ Build successful
- ✅ Deployment complete

**Your live URL:** `https://[project-name].vercel.app`

---

## 🔄 PART 3: CONTINUOUS DEPLOYMENT (Auto-Deploy on Push)

After first Vercel deployment, every time you push to GitHub:

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push origin main
```

✅ Vercel automatically:
- Detects the push
- Runs build
- Deploys live

**No manual action needed!**

---

## ✅ VERIFICATION CHECKLIST

After deployment to Vercel, test:

```bash
# Test API endpoint
curl -X POST https://[your-vercel-url].vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"What does MECH SPACE do?"}]}'

# Expected: 200 status with proper chatbot response
```

---

## 🔒 IMPORTANT SECURITY NOTES

1. **Never commit `.env.local`** — Add to `.gitignore`
2. **Vercel handles env vars securely** — Set them in dashboard
3. **API Keys in environment variables** — They won't be exposed in client code
4. **Regenerate keys** if accidentally committed to public repo

Current `.gitignore` should already exclude:
```
.env.local
.env.*.local
node_modules/
.next/
```

---

## 📊 DEPLOYMENT SUMMARY

| Step | Platform | Status | Time |
|------|----------|--------|------|
| 1 | GitHub | Push code | ~2 min |
| 2 | Vercel | Import repo | ~5 min |
| 3 | Vercel | Configure env vars | ~2 min |
| 4 | Vercel | Deploy | ~5-10 min |
| **Total** | | | **14-19 min** |

---

## 🆘 TROUBLESHOOTING

**"Permission denied (403)"**
- ✅ Generate new GitHub PAT token
- ✅ Use GitHub CLI: `gh auth login`
- ✅ Check repository visibility (must be accessible)

**"Build failed on Vercel"**
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify env vars are set
- Run `npm run build` locally to test

**"Chatbot API not working"**
- Verify `GROQ_API_KEY` is set in Vercel env vars
- Check `/api/chat` endpoint in Vercel logs
- Ensure model is still valid: `llama-3.1-8b-instant`

**"Custom domain on Vercel"**
- Go to Vercel dashboard → Project Settings → Domains
- Add your custom domain
- Update DNS records (Vercel provides instructions)

---

## 📞 NEXT STEPS

1. ✅ Create GitHub PAT token
2. ✅ Push to GitHub using token
3. ✅ Sign in to Vercel
4. ✅ Import repository
5. ✅ Set environment variables
6. ✅ Deploy
7. ✅ Test live chatbot
8. ✅ (Optional) Add custom domain

---

**Deployment Date:** May 12, 2026  
**Status:** Ready for Live  
**Chatbot Model:** Groq llama-3.1-8b-instant  
**Framework:** Next.js 16.2.6
