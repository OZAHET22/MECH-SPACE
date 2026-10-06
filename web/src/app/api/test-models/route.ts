/**
 * TEST MODELS ENDPOINT
 * Visit: http://localhost:3000/api/test-models
 * Lists available Gemini models with the current API key
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET(req: Request) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: 'API key not configured',
        success: false
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    // Try different model names
    const modelsToTry = [
      'gemini-pro',
      'gemini-1.5-pro',
      'gemini-1.5-pro-latest',
      'gemini-1.5-flash',
      'gemini-1.5-flash-latest',
      'gemini-pro-vision',
    ];

    const results: any = {};

    for (const modelName of modelsToTry) {
      try {
        console.log(`[TEST_MODELS] Testing model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        // Try a simple request
        const result = await model.generateContent('Hello');
        results[modelName] = { status: 'working', response_length: result.response.text().length };
        console.log(`[TEST_MODELS] ✅ ${modelName} works`);
      } catch (err: any) {
        results[modelName] = {
          status: 'error',
          error: err.message?.substring(0, 200),
        };
        console.log(`[TEST_MODELS] ❌ ${modelName} error:`, err.message?.substring(0, 100));
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        apiKeyExists: !!apiKey,
        apiKeyLength: apiKey.length,
        modelsTestedCount: modelsToTry.length,
        models: results,
      }, null, 2),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: 'Test failed',
        errorMessage: err?.message,
        success: false
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
