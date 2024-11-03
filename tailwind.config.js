import defaultTheme from 'tailwindcss/defaultTheme';
const themeColors = require('./portfolio.config.js');
console.log(themeColors);

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: themeColors.colors,
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
