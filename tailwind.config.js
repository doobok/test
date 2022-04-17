const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
        './resources/js/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // colors: {
            //     primary: '#4168BB',
            //     secondary: '#FFC046',
            // },
            // animation: {
            //     'fade-in': 'fadeIn 3s linear infinite',
            // },
            // keyframes: {
            //     fadeIn: {
            //         '0%': { opacity: 0 },
            //         '100%': { opacity: 1 },
            //     }
            // }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
