/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003F88", // Blau
				primary_light: "#99c9ff", // Hellblau
				secondary: "#FF6F00", // Orange
			},
		},
	},
	plugins: [],
};
