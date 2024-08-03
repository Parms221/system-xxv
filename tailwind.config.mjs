/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				"2xl": "1440px",
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#14213D",
					foreground: "#FFFFFF"
				},
				yellow: {
					DEFAULT: "#FCA311",
					foreground: "#000000"
				},
				gray: {
					DEFAULT: "#E5E5E5",
					foreground: "#000000"
				}
			}
		},
	},
	plugins: [],
}
