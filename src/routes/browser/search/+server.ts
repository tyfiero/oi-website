// src/routes/v0/browser/search/+server.js

import { json } from '@sveltejs/kit';
import { PERPLEXITY_API_KEY } from '$env/static/private'; // Ensure APIKEY is defined in .env

export async function GET({ url }) {
	// Extract the query parameter from the request URL
	const query = url.searchParams.get('q');

	if (!query) {
		return json({ error: 'Query parameter is required' }, { status: 400 });
	}

	const apiUrl = 'https://api.perplexity.ai/chat/completions';
	const payload = {
		model: 'pplx-70b-online',
		messages: [
			{
				role: 'user',
				content: query
			}
		],
		max_tokens: 1000
	};
	const headers = {
		accept: 'application/json',
		'content-type': 'application/json',
		authorization: `Bearer ${PERPLEXITY_API_KEY}`
	};

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.statusText}`);
		}

		const data = await response.json();

		return json({ result: data.choices[0].message.content }, { status: 200 });
	} catch (error) {
		return json({ error: error.message }, { status: 500 });
	}
}
