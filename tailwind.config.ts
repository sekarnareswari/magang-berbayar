import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "mb-green": {
                    "100": "#EEF7F8",
                    "200": "#31969D",
                    "300": "#04636A",
                    "400": "#023C40",
                },
                "mb-gray": "#727272",
            },
        },
    },
    plugins: [],
};
export default config;
