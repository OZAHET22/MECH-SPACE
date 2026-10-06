# 🔧 GEMINI AI CHATBOT - COMPLETE TROUBLESHOOTING GUIDE

## 🎯 CURRENT STATUS
✅ **Dev Server:** Running on http://localhost:3000  
✅ **Chat UI:** Loaded and working  
✅ **API Endpoint:** Responds correctly  
❌ **Gemini Models:** All returning 404 - API key issue detected  

---

## 🔴 ROOT CAUSE

The API key in `.env.local` does **NOT** have access to Gemini models.

**Verified:**
- ✅ API key format is valid (AIza...)
- ✅ API key is loaded by the server
- ✅ All model names are correct
- ❌ But ALL models return: `"models/gemini-1.5-flash is not found for API version v1beta"`

**Why this happens:**
1. API key is expired
2. API key was not created properly in Google AI Studio
3. Google Generative AI API not enabled on the GCP project
4. Billing not configured
5. API key has restrictions that block Generative AI

---

## ✅ HOW TO GET A WORKING API KEY (5 MINUTES)

### Step 1: Go to Google AI Studio
```
👉 https://aistudio.google.com/app/apikey
```
(Login with your Google account if needed)

### Step 2: Create a New API Key
- Click: **"Get API Key"** button (big blue button)
- Select: **"Create API key in new project"** 
- Click: **"Create API key"**
- **Copy** the generated key (it starts with `AIza`)

### Step 3: Update .env.local
1. Open file: `c:\Users\het22\Downloads\parth web sites\web\.env.local`
2. Find this line: 
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=AIza...
   ```
3. Replace the entire key with your NEW key:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyXxXxXxXxXxXxXx_YOUR_NEW_KEY_HERE
   ```
4. Save the file

### Step 4: Restart Dev Server
In your terminal (the one running npm dev):
1. Press: **Ctrl + C** to stop the server
2. Wait 2 seconds
3. Run: `npm run dev`
4. Look for: ✓ Ready in X ms

---

## 🧪 TEST YOUR NEW API KEY

### Test 1: Diagnostic Endpoint
```
👉 http://localhost:3000/api/debug
```
Should show:
- ✅ `apiKeyExists: true`
- ✅ `apiKeyValidFormat: true`

### Test 2: Model Test Endpoint
```
👉 http://localhost:3000/api/test-models
```
Should show at least ONE model with `"status": "working"`

Example:
```json
{
  "gemini-1.5-flash": {
    "status": "working",
    "response_length": 150
  }
}
```

### Test 3: Direct Chat Test
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

Should return:
```json
{
  "reply": "Hello! I'm the MECH SPACE...",
  "success": true
}
```

---

## 🎯 FULL CHAT TEST (UI)

1. Go to: http://localhost:3000
2. Click the **chat button** (blue circle, bottom right)
3. Type: "Hello, tell me about automation"
4. Click **Send**
5. You should see an AI response appear!

---

## 📋 IF IT STILL DOESN'T WORK

### Symptom: Still getting 404 errors
**Solution:**
1. Double-check you copied the NEW key completely (no spaces, no extra characters)
2. Make sure you're editing the right `.env.local` file (should be in: `web/` folder)
3. Restart dev server: `Ctrl+C` then `npm run dev`
4. Try the model test endpoint again: http://localhost:3000/api/test-models

### Symptom: Different error about "INVALID_ARGUMENT"
**Solution:** 
- The API key might be revoked. Generate a NEW one in AI Studio
- Delete old keys from https://aistudio.google.com/app/apikey

### Symptom: "Error: API key not found"
**Solution:**
- `.env.local` file doesn't exist or is empty
- Make sure the file exists in: `c:\Users\het22\Downloads\parth web sites\web\.env.local`
- Restart dev server

### Symptom: Chatbot loads but gives "Error connecting to AI Server"
**Solution:**
1. Open browser DevTools (F12)
2. Check the Console for error messages
3. Visit http://localhost:3000/api/debug to diagnose
4. Look for this specific error in the response
5. Share the error with the [CHAT_API] logs from dev server terminal

---

## 🔍 ADVANCED DEBUGGING

### To see detailed server errors:
1. Open the terminal running `npm run dev`
2. Send a message in the chat
3. Look for logs starting with `[CHAT_API]` or `[TEST_MODELS]`
4. These show exactly what went wrong

### To test API directly:
```bash
# Test debug endpoint
curl http://localhost:3000/api/debug

# Test with a message
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"test"}]}'

# Test models
curl http://localhost:3000/api/test-models
```

---

## ✅ SUCCESS CHECKLIST

Before considering it "fixed", verify:

- [ ] API key is valid (✅ in `/api/debug`)
- [ ] At least one model works (✅ in `/api/test-models`)
- [ ] Curl test returns a reply (✅ in `/api/chat`)
- [ ] Chat UI shows AI response (✅ at localhost:3000)
- [ ] No error messages in browser console (F12)
- [ ] Dev server shows `[CHAT_API:xxx] ✅ SUCCESS` in logs

---

## 📞 STILL STUCK?

If the above doesn't work, you need to:

1. **Verify API key one more time:**
   - Go to: https://aistudio.google.com/app/apikey
   - Copy key again (triple-check no extra spaces)
   - Paste into `.env.local`
   - Restart dev server

2. **Check Google account:**
   - Make sure you're signed into the correct Google account
   - The account should have billing enabled (even free tier requires sign-up)

3. **Check file locations:**
   - `.env.local` should be in: `c:\Users\het22\Downloads\parth web sites\web\`
   - NOT in: `c:\Users\het22\Downloads\parth web sites\`
   - NOT in root project directory

4. **Last resort - full restart:**
   ```bash
   # Kill all node processes
   taskkill /F /IM node.exe
   
   # Wait 2 seconds
   # Start fresh
   cd "c:\Users\het22\Downloads\parth web sites\web"
   npm run dev
   ```

---

**Good luck! 🚀**
