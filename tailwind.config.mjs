/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background' : '#F4D04E',
				'text-main' : '#111',
				'text-secondary' : '#7F7F7F',
			},
			fontFamily: {
				'figtree-var' : ['"Figtree Variable"', 'sans-serif'],
				'figtree-static' : ['Figtree', 'sans-serif'],
			},
			boxShadow: {
				'preview-card' : '8px 8px 0px 0px #000',
			}
		},
	},
	plugins: [],
}
