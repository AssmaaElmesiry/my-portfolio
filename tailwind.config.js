module.exports = {
    purge: [
        './public/index.html',
        './src/**/*.{js,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: {
                'maxWidthHeader': '120px',
                'dropdownWidth': '250px',
            },
            colors: {
                'bgHeader': '#333232',
                'mainColor': ' #45BEB7',
                'bgsection': '#3c3c3c',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}