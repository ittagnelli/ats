/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		prerender: {
			crawl: true,
			entries: ['*'],
			handleMissingId: "warn"
		},
	}
};

export default config;

