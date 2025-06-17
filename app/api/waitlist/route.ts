import { supabase } from '@/utils/supabase';

export async function POST(request: Request) {
	const { email, name } = await request.json();

	if (!email) {
		return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
	}

	if (!name) {
		return new Response(JSON.stringify({ error: 'Name is required' }), { status: 400 });
	}

	const { error } = await supabase.from('waitlist_landing_page').insert([
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
