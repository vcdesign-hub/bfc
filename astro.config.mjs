// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';
import sharpImageService from 'astro/assets/services/sharp';

// https://astro.build/config
const isVercel = process.env.VERCEL === '1';
const site = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4321';

export default defineConfig({
	site,
	output: 'server',
	adapter: isVercel ? vercel() : node({ mode: 'standalone' }),
	integrations: [
		tailwind(),
		sitemap({
			filter: (page) => {
				const { pathname } = new URL(page);
				return pathname !== '/privacy' && pathname !== '/legal-notice';
			},
		}),
	],
	image: {
		service: sharpImageService,
	},
});
