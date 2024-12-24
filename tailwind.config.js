/* eslint-disable no-undef */
import withMT from '@material-tailwind/react/utils/withMT'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

// primary: {
// 			700: "#60792a",
// 			600: "#708e31",
// 			500: "#a1cb46",
// 			400: "#90b63f",
// 			300: "#c6e198",
// 			200: "#e2f0cc",
// 			100: "#e2efc7",
// 		}
const colors = {
    ...defaultColors,
    ...{
        // primary: {
        //     700: '#10430D', // Darker shade of #1D6713
        //     600: '#165310', // Slightly darker shade
        //     500: '#1D6713', // Main color
        //     400: '#25851B', // Lighter shade
        //     300: '#36A92C', // Even lighter
        //     200: '#8DDA87', // Lighter, softer tone
        //     100: '#C2EEC3', // Lightest shade
        // },

        primary: {
            50: '#A1CA46',
            100: '#165310',
            200: '#A1CA46',
            300: '#A1CA46',
            400: '#96bf39', // main color
            500: '#648c1b',
            600: '#A1CA46',
            700: '#A1CA46',
            800: '#A1CA46',
            900: '#A1CA46',
        },
    },
}

export default withMT({
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/react-phone-input-2/lib/style.css',
    ],
    theme: {
        extend: {},
        colors: colors,
    },

    plugins: [],
})
