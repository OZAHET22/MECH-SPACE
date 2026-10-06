/**
 * DEBUG ENDPOINT
 * Visit: http://localhost:3000/api/debug
 * Returns diagnostic information about the chat API setup
 */

export async function GET(req: Request) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: {
        nodeEnv: process.env.NODE_ENV,
        nextPublicUrl: process.env.NEXT_PUBLIC_URL || 'Not set',
      },
      gemini: {
        apiKeyExists: !!apiKey,
        apiKeyLength: apiKey?.length || 0,
        apiKeyPrefix: apiKey ? `${apiKey.substring(0, 10)}...${apiKey.substring(apiKey.length - 5)}` : 'N/A',
        apiKeyValidFormat: apiKey ? /^AIza[0-9A-Za-z\-_]{35}$/.test(apiKey) : false,
        environmentVariable: 'GOOGLE_GENERATIVE_AI_API_KEY',
      },
      supabase: {
        urlExists: !!supabaseUrl,
        keyExists: !!supabaseKey,
        urlValue: supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : 'N/A',
      },
      diagnostics: {
        apiKey: apiKey ? '✅ API key is loaded' : '❌ API key MISSING',
        format: apiKey && /^AIza/.test(apiKey) ? '✅ API key format looks valid' : '❌ API key format invalid',
        supabase: supabaseUrl && supabaseKey ? '✅ Supabase credentials loaded' : '⚠️ Supabase not configured (optional)',
      },
      recommendations: generateRecommendations(apiKey, supabaseUrl, supabaseKey),
      testCurl: {
        description: 'Test the API with curl (from terminal):',
        command: `curl -X POST http://localhost:3000/api/chat \\
  -H "Content-Type: application/json" \\
  -d '{"messages":[{"role":"user","content":"Hello"}]}'`
      }
    }, null, 2),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

function generateRecommendations(apiKey: string | undefined, supabaseUrl: string | undefined, supabaseKey: string | undefined): string[] {
  const recommendations: string[] = [];

  if (!apiKey) {
    recommendations.push('🔴 CRITICAL: Add GOOGLE_GENERATIVE_AI_API_KEY to .env.local');
    recommendations.push('   Get key at: https://aistudio.google.com/app/apikey');
    recommendations.push('   Then RESTART the dev server: npm run dev');
  }

  if (apiKey && !/^AIza/.test(apiKey)) {
    recommendations.push('🔴 API key format invalid - should start with "AIza"');
  }

  if (!supabaseUrl || !supabaseKey) {
    recommendations.push('⚠️ Supabase not configured - lead capture will not work');
  }

  if (recommendations.length === 0) {
    recommendations.push('✅ All systems configured correctly!');
    recommendations.push('🚀 Test the chat by going to: http://localhost:3000');
  }

  return recommendations;
}

export async function POST(req: Request) {
  // Also allow POST to return the same debug info
  return GET(req);
}
