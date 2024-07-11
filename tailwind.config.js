import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors:{
                abuTerang: "#F9F9F9",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xs: "480px",
                ss: "620px",
                sm: "768px",
                md: "1060px",
                lg: "1200px",
                xl: "1700px",
            },
        },
    },
    daisyui: {
        themes: ["light",],
        // styled: [false],
      },

    plugins: [forms, require('daisyui'),], 
};
