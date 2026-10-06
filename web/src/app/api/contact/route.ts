import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

// Initialize Supabase client if credentials are available
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    console.log('Contact form submission received:', data);

    if (supabase) {
      // Attempt to save to Supabase (assuming a 'contact_submissions' table exists)
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            company: data.company,
            industry: data.industry,
            message: data.message,
            created_at: new Date().toISOString()
          }
        ]);
        
      if (error) {
        console.error('Error inserting into Supabase:', error);
        // Note: You might need to create the 'contact_submissions' table in your Supabase dashboard.
      }
    } else {
      console.warn('Supabase not configured. Submission was only logged to console.');
    }
    
    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
