import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), 
    vue(), 
    sitemap(),
	starlight({
		plugins: [starlightLinksValidator()],
		title: 'Site Search',
		social: {
			github: 'https://github.com/mollsandhersh',
		},
		// editLink: {
		// 	baseUrl: 'https://github.com/withastro/contribute.docs.astro.build/edit/main/'
		// },
		customCss: ["./src/styles/theme.css"],
		components: {
			Head: './src/starlight-overrides/Head.astro',
		},
		logo: {
			dark: './src/assets/logo-dark.svg',
			light: './src/assets/logo-light.svg',
			replacesTitle: true,
		},
		head: [
		{
			tag: 'script',
			attrs: {
				src: 'https://cdn.usefathom.com/script.js',
				'data-site': 'EZBHTSIG',
				defer: true,
			},
		},
		],
		sidebar: [
			{ 
				label: 'Welcome', 
				link: '/welcome/' 
			},
			{
				label: 'Guides',
				// items: [
				// 	// Each item here is one entry in the navigation menu.
				// 	{ label: 'Example Guide', link: '/guides/example/' },
				// ],
				autogenerate: { directory: 'guides' },
			},
			{
				label: 'Reference',
				autogenerate: { directory: 'reference' },
			},
		],
	}),
  ],
  site: 'https://mollsandhersh.github.io'
});