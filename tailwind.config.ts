import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			dark: {
				1: '#050505',
				2: '#011006ee',
			},
			green: {
				1: '#22c55e',
			},
			sky: {
				1: '#3f8b4bea'
			},
			pink: {
				1: '#be18a5',
			},
			purple: {
				1: '#830EF9',
			},
			yellow: {
				1: '#F9A90E',
			},
  		},

		backgroundImage: {
			'hero': "url('/images/banner-hero.jpg')",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
