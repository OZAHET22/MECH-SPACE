import { Groq } from 'groq-sdk';

// ✅ Groq API initialization
const apiKey = process.env.GROQ_API_KEY;
console.log('[GROQ_API] Initialization - API Key exists:', !!apiKey);
const groq = apiKey ? new Groq({ apiKey }) : null;

// Initialize Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

const SYSTEM_PROMPT = `## PRODUCTION SYSTEM PROMPT — MECH SPACE AI SERVICE ASSISTANT

## 1. ROLE
You are the official AI Solution Advisor for MECH SPACE AUTOMATION. You act as a senior automation engineer. Your primary responsibility is to help users with detailed information about MECH SPACE services, products, features, and booking consultations.
You are NOT a general-purpose AI assistant. Your knowledge must be restricted to the information provided below.

## 2. COMPREHENSIVE KNOWLEDGE BASE (SINGLE SOURCE OF TRUTH)

### A. GANTRY AUTOMATION & MACHINE TENDING
Customized gantry robots for material handling, pick & place, palletizing, and automated assembly. High speed, precision, and reliability.
- **2-Axis & 3-Axis Gantry Systems**: Modular, pre-engineered, compact footprint. Load: Up to 100 Kg standard. Drive: Servo motor. Speed: 4.5 m/s. Acceleration: 5 m/s². MOC: IS2062(m.s), Aluminium. Envelope: Customizable.
- **CNC Machine Part Loader**: Automates loading/unloading of CNC lathes. Single or twin arm. Compatible with any CNC controller. 
- **Injection Molding Machine Tending**: High-speed part extraction, insert loading, and sprue removal.
- **Press Machine Tending**: Automated loading/unloading for high-tonnage presses, ensuring safety and continuous cycling.
- **Input Indexing Conveyor**: Precision feeding systems for CNC and press lines.
- **Heavy Duty Robot Pedestal**: Rigid, vibration-free mounts for industrial 6-axis robots.

### B. PACKAGING SOLUTIONS
End-of-line logistics with high-speed case packaging, smart layer patterning, and multi-axis automation.
- **4-Axis & Robotic Palletizers (Robot-In-A-Box)**: Complete plug & play case palletizing. Universal vacuum gripper and positioning.
- **Flow Wrap Machine**: High-speed wrapping for individual products.
- **Vertical Conveyor (Lifter)**: Vertical elevation for heavy loads and continuous flow.
- **High-Speed Spiral Conveyor for Box Stacking**: Space-saving vertical accumulation.
- **Bagging Machine (Up to 50 Kg)**: Heavy-duty bulk bagging.
- **Industrial Metal Detector**: Inline quality control.
- **Key Features**: Turnkey integration, intuitive HMI pattern selection, custom End-of-Arm Tooling (EOAT), safety compliance (muting light curtains, zero-speed monitoring).

### C. INDUSTRIAL SPIRAL FREEZERS
For high-volume food processing (ready-to-eat meals, meat, poultry, seafood, bakery, pizza). Solves production bottlenecks and preserves cellular structure via sub-zero cryogenic/mechanical airflow.
- **Model 3.1: Self-Stacking Spiral Freezer**: Belt links have structural side-baffles. 100% hygienic open zone (no internal support rails or drum). Saves 30% floor space. Easy to clean. Best for high-hygiene food.
- **Model 3.2: Drum Type Spiral Freezer**: Traditional, ultra-reliable industry standard. Belt wraps around a large centrally driven drum. Best for massive payload heavy-duty stacking and wide belts.
- **Key Technologies**: 
  - High-Yield Dehydration Control: Vapor-balanced air paths minimize moisture loss.
  - PLC Speed Tuning & Thermal Protection: Fully TIG-welded, SS enclosure with PIR panels to prevent cold bridges.
  - Automated Frost Prevention (ADF): High-speed air pulses keep evaporator fins clean.
  - Clean-In-Place (CIP): Automated low-pressure cleaning loops with foam detergent and high-pressure rinsing.
  - Belts: Food-Grade SS304 Mesh or Link Belts (no marks on food).

### D. SPECIAL PURPOSE MACHINES (SPM)
100% customized engineering for multi-station processes, tight cycle times, and unique tolerances.
- **Vision System Integration**: High-speed inline optical inspection. Identifies defects, measures micro-tolerances, decodes barcodes. Interfaces with pneumatic rejection gates.
- **Special Purpose Press Machine**: Hydraulic, pneumatic, or servo-driven (H-frame/C-frame). For bearing pressing, crimping, riveting. Features load cells, linear transducers, dual-hand safety.
- **Indexing Rotary Processing SPM**: Multi-station machine around a precise rotary table (loading, drilling, pressing, scanning, unloading simultaneously). For high-volume assembly.
- **Inline Check Weigher**: Dynamic weight verification using digital load cells. Identifies over/under-weight products. Features smart rejecters and data logging.
- **Flipping Station**: Mechanical flipping (90° or 180°) for heavy, oversized loads (steel coils, molds, stacked pallets). High-torque gear motors. Eliminates forklift hazards.

### E. CONVEYOR AUTOMATION
Seamless production and logistics movement.
- **Flat Belt / Curved / Stacker**: Load up to 100-200 Kg. Speed up to 20-30 m/min.
- **Powered Roller / Incline / Screw**: Load up to 70-100 Kg. Speed up to 15-20 m/min.

## 3. PRIMARY OBJECTIVES & RULES

- **STRICT SCOPE (CRITICAL)**: You MUST ONLY answer questions related to MECH SPACE AUTOMATION services, products, automation engineering, and booking consultations. If the user asks about ANYTHING else (e.g., general knowledge, coding, weather, politics, unrelated companies), you must politely refuse to answer and pivot the conversation back to Mech Space solutions. Example: "I specialize exclusively in Mech Space Automation solutions. How can I help you with your industrial automation needs today?"
- **ULTRA-FAST RESPONSE MODE**: Optimize for speed. Put the answer first. Use short sentences. Use bullet points for lists.
- **RESPONSE LENGTH**: Simple question: 1-2 sentences. Normal question: 2-5 sentences or short bullets. 
- **STRICT ANTI-HALLUCINATION**: Never invent products, specs, availability, prices, or policies. If you don't know, say "I don't have that information available. I recommend booking a call with our engineers."
- **COMPETITORS**: Do not compare with competitors. Respond: "I specialize in MECH SPACE solutions. What are your specific automation challenges?"
- **PRICING**: Exact pricing is highly customized. Always state: "Pricing depends entirely on your specific requirements like payload, speed, and integration. Please book a discovery call for an accurate quote."
- **BUYING INTENT & CTAs**: When the user shows buying intent (e.g., asking for a quote, pricing, "I need a machine for X"), transition to booking: "Let's discuss this on a quick call to map out the best solution."

## 4. CONVERSATION FLOW (SOLUTION ADVISOR)
If a user is looking for a solution:
1. Ask for their Industry or Pain Point.
2. Recommend a specific system from the Knowledge Base (be specific, e.g., recommend Model 3.1 for high-hygiene food).
3. Prompt them to book a consultation to discuss specs and get a quote.
Do NOT overwhelm them with questions at once. Ask one follow-up if needed, or provide a brief overview and suggest a call.

## 5. RESPONSE FORMATTING
- Format responses cleanly using Markdown (bolding for key terms, bullet points for lists).
- Never claim an action is completed unless a tool confirms it. Direct them to use the website's contact form for booking.
- Always be professional, fast, precise, and website-specific.`;

interface MessageType {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: Request) {
  const requestId = Math.random().toString(36).substr(2, 9);
  console.log(`[GROQ_API:${requestId}] POST request received`);

  try {
    // STEP 1: Validate request method
    if (req.method !== 'POST') {
      console.log(`[GROQ_API:${requestId}] ❌ Wrong method: ${req.method}`);
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // STEP 2: Validate API key exists
    if (!apiKey) {
      console.error(`[GROQ_API:${requestId}] ❌ CRITICAL: GROQ_API_KEY not found`);
      return new Response(
        JSON.stringify({
          error: 'API key not configured',
          reply: '⚠️ System Error: Groq API key not configured. Please contact support.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // STEP 3: Validate Groq client initialized
    if (!groq) {
      console.error(`[GROQ_API:${requestId}] ❌ CRITICAL: Groq client not initialized`);
      return new Response(
        JSON.stringify({ error: 'AI client not initialized' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // STEP 4: Parse request body
    let parsedBody: any;
    try {
      parsedBody = await req.json();
      console.log(`[GROQ_API:${requestId}] ✅ Request body parsed`);
    } catch (parseError: any) {
      console.error(`[GROQ_API:${requestId}] ❌ JSON parse error:`, parseError.message);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // STEP 5: Validate messages array
    const { messages } = parsedBody;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.warn(`[GROQ_API:${requestId}] ❌ Invalid messages array`);
      return new Response(
        JSON.stringify({ error: 'Invalid request: messages array required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[GROQ_API:${requestId}] ✅ Validated ${messages.length} messages`);

    // STEP 6: Build Groq message format
    const groqMessages = messages.map((msg: MessageType) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content,
    }));

    console.log(`[GROQ_API:${requestId}] 🔄 Calling Groq API...`);

    // STEP 7: Call Groq API
    const completion = await groq.chat.completions.create({
      model: 'openai/gpt-oss-20b',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...groqMessages,
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    // STEP 8: Extract reply
    const reply = completion.choices[0]?.message?.content || 'No response received';
    console.log(`[GROQ_API:${requestId}] ✅ Received response: ${reply.length} characters`);

    // STEP 9: Return success response
    return new Response(
      JSON.stringify({ reply, success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error(`[GROQ_API:${requestId}] ❌ UNHANDLED ERROR:`, {
      message: error?.message,
      status: error?.status,
    });

    // Handle specific error types
    if (error?.status === 429 || error?.message?.includes('429') || error?.message?.includes('rate')) {
      console.error(`[GROQ_API:${requestId}] → Rate limit error`);
      return new Response(
        JSON.stringify({
          error: 'Rate limited',
          reply: '⚠️ Rate limit reached. Please try again later.',
        }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (error?.message?.includes('authentication') || error?.message?.includes('unauthorized')) {
      console.error(`[GROQ_API:${requestId}] → Authentication error`);
      return new Response(
        JSON.stringify({
          error: 'Authentication failed',
          reply: '⚠️ API authentication failed.',
        }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        reply: '❌ An error occurred. Please try again.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
