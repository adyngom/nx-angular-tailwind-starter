module.exports = {
    prefix: '',
    purge: {
      content: [
        './apps/**/*.{html,js,ts,tsx}',
        './libs/**/*.{html,js,ts,tsx}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
