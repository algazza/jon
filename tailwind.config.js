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
            colors: {
                primary: "#f8f8f8",
                abuTerang: "#F9F9F9",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                jakarta: ["Plus Jakarta Sans", "sans-serif"]
            },
            screens: {
                xs: "480px",
                ss: "620px",
                sm: "768px",
                md: "1060px",
                lg: "1200px",
                xl: "1700px",
            },
            gridTemplateColumns: {
                x2500: "620px 230px",
                x250: "250px",
            },
            backgroundImage: {
                footerimg: "url('../img/Footer-img.svg')",
              },
        },
    },
    daisyui: {
        themes: ["light"],
        // styled: [false],
    },

    plugins: [forms, require("daisyui")],
};
