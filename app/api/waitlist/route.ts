import { supabase } from '@/utils/supabase';

/**
 * Handles the POST request to add a user to the waitlist.
 * 
 * Expects a JSON payload with `email` and `name` properties.
 * 
 * If `email` is missing, responds with a 400 status and an error message.
 * If `name` is missing, responds with a 400 status and an error message.
 * 
 * Attempts to insert the data into the `waitlist_landing_page` table in Supabase.
 * 
 * If the insertion fails, logs the error and responds with a 500 status and the error message.
 * 
 * On successful insertion, responds with a 200 status and a welcome message.
 */
export async function POST(request: Request) {
    const { email, name } = await request.json();

    if (!email) {
        return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    if (!name) {
        return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 });
    }

    const { error } = await supabase
        .from('waitlist_landing_page')
        .insert([
            {
                email: email,
                name: name,
            },
        ]);

    if (error) {
        console.error('Error saving to Supabase:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: `Welcome ${name}!` }), { status: 200 });
}