import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				albert_sans: ["var(--font-albert_sans)"],
			},
			colors: {
				"bold-blue": "#4D5568",
				"regular-blue": "#7682A0",
				"background-grey": "#F3F5F9",
			},
		},
	},
	plugins: [],
};
export default config;
