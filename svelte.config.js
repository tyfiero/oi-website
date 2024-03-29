import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	alias: {
		$components: './src/components',
		$styles: './src/styles',
		$stores: './src/stores',
		$types: '../../types'
	}
};

export default config;
