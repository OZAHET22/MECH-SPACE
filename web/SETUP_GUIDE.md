# MECH SPACE Chatbot - Complete Setup & Troubleshooting Guide

## ✅ What's Been Fixed

Your Next.js app now has a **fully functional Gemini-powered chatbot** with:

- ✅ **Correct API Endpoint:** `/api/chat` using Google Generative AI SDK
- ✅ **Simple JSON Response:** `{ reply: "...", success: true }`
- ✅ **Error Handling:** Rate limiting, authentication, and server errors handled gracefully
- ✅ **Updated ChatWidget:** Works with the new JSON response format
- ✅ **Environment Configuration:** `.env.local` with Gemini API key
- ✅ **Type-Safe:** Full TypeScript support
- ✅ **Production Ready:** Proper error handling and validation

---

## 📋 Project Structure

```
web/
├── src/app/api/chat/route.ts          ← Fixed API endpoint
├── src/components/ChatWidget.tsx       ← Updated UI component
├── .env.local                          ← API keys (git-ignored)
├── .env.local.example                  ← Template for setup
├── API_DOCUMENTATION.md                ← Full API reference
└── SETUP_GUIDE.md                      ← This file
```

---

## 🚀 Quick Start

### 1. Verify Environment Variables

Check `.env.local` has your Gemini API key:

```bash
cat .env.local
# Should show:
# GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy...
```

### 2. Install Dependencies

```bash
cd web
npm install
```

This installs the required `@google/generative-ai` package.

### 3. Start Development Server

```bash
npm run dev
```

Expected output:
```
▲ Next.js 16.2.6
- Local:    http://localhost:3000
✓ Ready in 500ms
```

### 4. Test the Chatbot

1. Open `http://localhost:3000` in browser
2. Click the chat button (bottom-right)
3. Type a question like: "What services does MECH SPACE provide?"
4. Chat should respond within 2-3 seconds

---

## 📁 Implementation Details

### API Route (`src/app/api/chat/route.ts`)

**Key Features:**
- Uses Google Generative AI SDK directly
- Validates API key before processing
- Returns clean JSON responses
- Handles rate limiting gracefully
- Supports multi-turn conversations
- Type-safe with TypeScript interfaces

**Request/Response:**
```typescript
// Request
{
  messages: [
    { role: 'user', content: 'Your question' },
    { role: 'assistant', content: 'Previous response' }
  ]
}

// Response
{
  reply: "AI response here",
  success: true
}
```

### ChatWidget (`src/components/ChatWidget.tsx`)

**Key Features:**
- Beautiful animated UI using Framer Motion
- Real-time message display
- Loading states with spinner
- Error handling with user-friendly messages
- Auto-scrolling to latest message
- Accessible with proper ARIA labels

**Props:** None (standalone component)

---

## 🔧 Configuration

### Environment Variables

**Required:**
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
```

Get free API key: [Google AI Studio](https://aistudio.google.com/apikey)

**Optional (for lead capture):**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_key
```

---

## 🧪 Testing

### Test with cURL

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "Hello"}
    ]
  }'
```

### Test in Browser Console

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'What is automation?' }
    ]
  })
})
.then(r => r.json())
.then(d => console.log(d.reply))
```

### Expected Response

```json
{
  "reply": "Automation refers to...",
  "success": true
}
```

---

## ❌ Troubleshooting

### Problem: "Error connecting to AI Server"

**Cause:** API endpoint not responding

**Solutions:**
1. Check dev server is running: `npm run dev`
2. Verify API key in `.env.local`
3. Restart dev server: Kill it and run `npm run dev` again
4. Check browser console for errors (F12 → Console)

---

### Problem: "Rate limited" Error

**Cause:** Hit Gemini free tier daily quota

**Solutions:**
1. Wait until next day (quota resets at UTC midnight)
2. Upgrade to paid tier at [Google Cloud Console](https://console.cloud.google.com)
3. Use billing-enabled project

**To enable billing:**
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Select your project
- Enable Generative AI API
- Add billing method

---

### Problem: Blank responses

**Cause:** User message not being sent properly

**Solutions:**
1. Check ChatWidget is rendering: Look for blue button in bottom-right
2. Open DevTools: `F12 → Network tab`
3. Send a message and check POST request to `/api/chat`
4. Verify request body has `messages` array
5. Check response status is 200

---

### Problem: "GOOGLE_GENERATIVE_AI_API_KEY is undefined"

**Cause:** Environment variable not loaded

**Solutions:**
1. Verify `.env.local` exists in `web/` directory
2. Check it has `GOOGLE_GENERATIVE_AI_API_KEY=your_key`
3. **Restart dev server after adding/modifying `.env.local`**
4. Verify key is valid at [AI Studio](https://aistudio.google.com)

---

### Problem: Module not found "@google/generative-ai"

**Cause:** Package not installed

**Solution:**
```bash
npm install @google/generative-ai
npm run dev
```

---

### Problem: TypeScript Errors

**Cause:** Type definitions missing or outdated

**Solutions:**
```bash
# Clear cache
rm -rf .next node_modules
npm install

# Rebuild
npm run dev
```

---

## 🎯 Production Deployment

### Before Going Live

1. **Secure API Key**
   - Never commit `.env.local` (it's in `.gitignore`)
   - Use environment variables on hosting platform
   - Rotate keys periodically

2. **Rate Limiting**
   - Implement per-user rate limiting
   - Use Redis for session tracking
   - Log API usage for monitoring

3. **Error Monitoring**
   - Setup error tracking (e.g., Sentry)
   - Monitor 429 (rate limit) errors
   - Track user feedback

4. **Performance**
   - Cache common questions
   - Implement request debouncing
   - Monitor API response times

### Deployment to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Add Gemini chatbot"
git push

# Connect to Vercel and add environment variable:
# GOOGLE_GENERATIVE_AI_API_KEY = your_key
```

---

## 📊 API Rate Limits

**Free Tier (Gemini 1.5 Flash):**
- 60 requests/minute
- ~1,500 requests/day (varies by region)
- Free tier reset: Daily at UTC midnight

**Paid Tier:**
- 10,000 requests/minute
- No daily quota
- Pay per request

Check current usage: [Google Cloud Console](https://console.cloud.google.com/apis/dashboard)

---

## 🔐 Security Checklist

- [ ] `.env.local` is in `.gitignore` (don't commit!)
- [ ] API key is valid and active
- [ ] Input validation on backend
- [ ] Error messages don't expose sensitive data
- [ ] HTTPS enabled in production
- [ ] Rate limiting implemented
- [ ] User data is not logged unnecessarily
- [ ] CORS configured if needed

---

## 📚 Useful Resources

- **Google Generative AI:** https://ai.google.dev
- **Gemini API Docs:** https://ai.google.dev/tutorials
- **Next.js API Routes:** https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Google AI Studio:** https://aistudio.google.com

---

## 🛠️ Common Development Tasks

### Modify System Prompt

Edit `src/app/api/chat/route.ts` - update `SYSTEM_PROMPT`:

```typescript
const SYSTEM_PROMPT = `
You are a helpful assistant...
`
```

### Change Model

Edit `src/app/api/chat/route.ts`:

```typescript
// Current:
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Options:
// - 'gemini-1.5-flash'  (faster, cheaper)
// - 'gemini-1.5-pro'    (more capable)
// - 'gemini-pro'        (legacy)
```

### Add Message Persistence

Create a database table and modify API route:

```typescript
// Save messages to database
await db.messages.create({
  userId: user.id,
  role: 'user',
  content: userMessage
});
```

### Customize UI

Edit `src/components/ChatWidget.tsx` - modify Tailwind classes and styling.

---

## 📞 Support

For issues:

1. Check `.env.local` configuration
2. Review browser console (F12)
3. Check terminal output
4. Read `API_DOCUMENTATION.md`
5. Verify API key at Google AI Studio

---

## ✨ Next Steps

1. **Customize system prompt** for your use case
2. **Add user authentication** if needed
3. **Implement message history** persistence
4. **Setup error monitoring** (Sentry, LogRocket, etc.)
5. **Deploy to production** (Vercel, Railway, etc.)
6. **Monitor API usage** and costs
7. **Collect user feedback** for improvements

---

**Last Updated:** May 11, 2026  
**Status:** ✅ Production Ready
