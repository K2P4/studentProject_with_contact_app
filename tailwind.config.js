/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				serif: ["Roboto"],
			},
			colors: {
				basic: "#008DDA",
				iconColor:"#31363F"
			},
			
        
      
		},
	},
	plugins: [],
};
