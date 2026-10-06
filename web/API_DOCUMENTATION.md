# Gemini AI Chatbot API Documentation

## Overview

This document explains how the Gemini AI chatbot API works and provides implementation examples for your Next.js application.

---

## API Endpoint

**URL:** `/api/chat`  
**Method:** `POST`  
**Content-Type:** `application/json`

---

## Request Format

```json
{
  "messages": [
    {
      "role": "user",
      "content": "What is gantry automation?"
    },
    {
      "role": "assistant",
      "content": "Gantry automation refers to..."
    }
  ]
}
```

### Request Fields

| Field | Type | Description |
|-------|------|-------------|
| `messages` | Array | Array of message objects with chat history |
| `messages[].role` | String | Either `"user"` or `"assistant"` |
| `messages[].content` | String | The message text |

---

## Response Format

### Success Response (200 OK)

```json
{
  "reply": "Gantry automation systems are multi-axis CNC gantries designed for pick-and-place, welding, cutting, and heavy payload handling...",
  "success": true
}
```

### Error Response

**Rate Limited (429):**
```json
{
  "error": "Rate limited",
  "reply": "⚠️ The AI assistant has reached its daily request limit. Please try again tomorrow..."
}
```

**Authentication Error (401):**
```json
{
  "error": "Authentication failed",
  "reply": "⚠️ AI service authentication failed. Please contact support."
}
```

**Server Error (500):**
```json
{
  "error": "Internal Server Error",
  "reply": "❌ Sorry, something went wrong. Please try again in a moment."
}
```

---

## Configuration

### Environment Variables

Add to `.env.local`:

```env
# Google Gemini API Key (Required)
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here

# Supabase Configuration (Optional - for lead capture)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
```

---

## Frontend Implementation Examples

### 1. Basic Chat Hook (React)

```typescript
import { useState, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessage,
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, newUserMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  };
}
```

### 2. Usage in Component

```typescript
'use client';

import { useState } from 'react';
import { useChat } from '@/hooks/useChat';
import { Loader2, Send } from 'lucide-react';

export function ChatInterface() {
  const { messages, isLoading, error, sendMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg font-semibold">Welcome to MECH SPACE AI Assistant</p>
            <p className="text-sm mt-2">Ask about our automation systems, products, or services</p>
          </div>
        )}

        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-md px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
              <Loader2 size={20} className="animate-spin" />
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t p-4 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about our automation systems..."
            disabled={isLoading}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition flex items-center gap-2"
          >
            <Send size={18} />
            Send
          </button>
        </form>
      </form>
    </div>
  );
}
```

### 3. Standalone Fetch Example

```typescript
async function chatWithAI(userMessage: string, previousMessages: any[] = []) {
  try {
    const messages = [
      ...previousMessages,
      { role: 'user', content: userMessage }
    ];

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Request failed');
    }

    const data = await response.json();
    return {
      success: true,
      reply: data.reply,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

// Usage
const result = await chatWithAI('Tell me about your services');
console.log(result.reply);
```

---

## Error Handling Best Practices

```typescript
async function sendChat(messages: Message[]) {
  setLoading(true);
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });

    // Handle different status codes
    if (response.status === 429) {
      showToast('Rate limited. Please try again later.');
      return;
    }

    if (response.status === 401) {
      showToast('Authentication failed. Please contact support.');
      return;
    }

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      showToast(data.reply || data.error);
      return;
    }

    setMessages(prev => [...prev, {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: data.reply
    }]);

  } catch (error) {
    showToast(
      error instanceof Error 
        ? error.message 
        : 'Connection error. Please check your network.'
    );
  } finally {
    setLoading(false);
  }
}
```

---

## Testing the API

### Using cURL

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "What services does MECH SPACE provide?"
      }
    ]
  }'
```

### Using Postman

1. **URL:** `POST http://localhost:3000/api/chat`
2. **Headers:** `Content-Type: application/json`
3. **Body (JSON):**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Tell me about gantry automation systems"
    }
  ]
}
```

### Using Node.js

```javascript
const messages = [
  { role: 'user', content: 'What is SPM?' }
];

fetch('http://localhost:3000/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages })
})
  .then(res => res.json())
  .then(data => console.log(data.reply))
  .catch(err => console.error(err));
```

---

## Troubleshooting

### Error: "Gemini API key not configured"

**Solution:** Ensure `GOOGLE_GENERATIVE_AI_API_KEY` is set in `.env.local` and the dev server is restarted.

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_actual_key_here
```

### Error: "Rate limited"

**Solution:** You've hit the Gemini free tier quota. Either:
- Wait until the next day for the quota to reset
- Upgrade to a paid tier in Google AI Studio
- Use a different API key

### Error: "Invalid request: messages array required"

**Solution:** Ensure you're sending a valid `messages` array:
```json
{
  "messages": [
    { "role": "user", "content": "Your question here" }
  ]
}
```

### Response is empty or null

**Solution:** Check if:
- The API key is valid
- The request format is correct
- The network request completed successfully
- Check browser DevTools Network tab for the actual response

---

## Performance Tips

1. **Batching Messages:** Don't send every keystroke; wait for user to finish typing
2. **Message History:** Keep message history reasonable (typically last 5-10 messages)
3. **Loading States:** Always show loading indicators during API calls
4. **Error Recovery:** Implement retry logic with exponential backoff
5. **Caching:** Cache frequently asked questions locally

---

## Security Considerations

- **Never expose API keys** in frontend code
- **Always validate** user input on the backend
- **Rate limit** requests per user/IP
- **Use HTTPS** in production
- **Sanitize** user messages before displaying
- **Implement authentication** for production deployments

---

## API Rate Limits

The Gemini API has the following free tier limits:
- **Requests per minute:** 60
- **Daily quota:** Varies by region (typically 1500 free requests/day)

For production use, implement:
- Request throttling
- User-level rate limiting
- Caching for common queries
- Upgrade to paid tier

---

## Support

For issues or questions:
- Check `.env.local` configuration
- Review console logs in browser DevTools
- Check terminal output of dev server
- Verify Gemini API key is valid at [Google AI Studio](https://aistudio.google.com)
