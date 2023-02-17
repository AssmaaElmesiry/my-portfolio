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
                'gray': '#b6b2bf',
                'html': '#e54c21',
                'css': '#248cc9',
                'sass': '#ce679a',
                'bootstrap': '#9466dc',
                'vuejs': '#3fb984',
                'react': '#61dbfb',
                'js': '#f7e018',
                'paleturquoise' : "paleturquoise",
            },
            Heights: {
                'item': '59.2',
            },
            width: {
                'itemW': '49%'
            },
            inset: {
                'item7r': '43%',
                'item6b': '20%',
                'item6l': '57%'
            },
            margin: {
                'interstM': '30%'
            },
            transformOrigin:{
                'transformtext': '-50% -50%'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}