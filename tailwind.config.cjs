/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 30s linear infinite",
                slowspin: "spin 6s linear infinite",
            },
            colors: {
                darkspace: "#030014",
                glowpurple: "#5b1ce3",
            },
        },
    },
    plugins: [],
};
