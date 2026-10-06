# 🚀 QUICK DEPLOYMENT COMMANDS

## STEP 1: GitHub Setup (Copy-Paste Ready)

```bash
# Navigate to project
cd "c:\Users\het22\Downloads\parth web sites\web"

# Configure git user (if not done)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add all changes
git add .

# Commit
git commit -m "feat: Groq API chatbot and master system prompt"

# Add GitHub remote
git remote add origin https://github.com/parthprajapati680-art/MECH-SPACE.git

# Rename to main branch
git branch -M main

# Push to GitHub (will prompt for credentials)
git push -u origin main
```

When Git prompts:
```
Username: your-github-username
Password: paste-your-PAT-token-here
```

---

## STEP 2: Vercel Deployment (Click-by-Click)

1. **Visit:** https://vercel.com/dashboard
2. **Click:** "Add New..." → "Project"
3. **Click:** "Import Git Repository"
4. **Search:** `MECH-SPACE`
5. **Select:** `parthprajapati680-art/MECH-SPACE`
6. **Click:** "Import"

### On Configuration Page:

**Framework:** Next.js (auto-detected)  
**Root Directory:** `./`

### Set Environment Variables:

```
GROQ_API_KEY = your_groq_api_key_here
NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = your_supabase_key
```

7. **Click:** "Deploy"
8. ✅ Wait 5-10 minutes for deployment

---

## ✅ After Deployment

Your chatbot will be live at:
```
https://[project-name].vercel.app
```

Test the API:
```bash
curl -X POST https://[your-vercel-url].vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"What does MECH SPACE do?"}]}'
```

---

## 📝 PRE-DEPLOYMENT CHECKLIST

- ✅ All code committed locally
- ✅ GitHub PAT token created
- ✅ GitHub repository accessible
- ✅ Vercel account created
- ✅ Environment variables ready
- ✅ `.env.local` in `.gitignore`

---

## 🔄 Future Deployments (After First Deploy)

Every time you update code:

```bash
cd "c:\Users\het22\Downloads\parth web sites\web"
git add .
git commit -m "Update: your changes here"
git push origin main
```

✅ Vercel auto-deploys in ~5 minutes!

---

## 🎯 ESTIMATED TIMELINE

| Task | Duration |
|------|----------|
| Create PAT token | 2 min |
| Push to GitHub | 2 min |
| Sign in to Vercel | 2 min |
| Import repository | 5 min |
| Set env variables | 2 min |
| Deploy | 10 min |
| **TOTAL** | **~23 min** |

---

**Good luck! 🚀**
