import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({ out: 'public' })
  }
};

export default config;
