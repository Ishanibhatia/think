/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        lightsteelblue: {
          "100": "#afc5fb",
          "200": "rgba(175, 197, 251, 0.4)",
        },
        white: "#fff",
        gray: {
          "100": "#000600",
          "200": "rgba(128, 130, 133, 0.28)",
          "300": "rgba(255, 255, 255, 0.4)",
          "400": "rgba(255, 255, 255, 0.6)",
          "500": "rgba(128, 130, 133, 0.8)",
        },
        darkslategray: {
          "100": "#3c3d3f",
          "200": "#333",
        },
        steelblue: "#7d91c7",
        dimgray: {
          "100": "rgba(103, 104, 106, 0.29)",
          "200": "rgba(103, 104, 106, 0.8)",
          "300": "rgba(103, 104, 106, 0.28)",
        },
        mediumslateblue: "#245def",
        purpleLavender: "#8b35b4",
      },
      spacing: {},
      fontFamily: {
        epilogue: "Epilogue",
        arial: "Arial",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        xl: "20px",
        mini: "15px",
        "8xs": "5px",
        "11xl": "30px",
        "3xs": "10px",
        '2xl': '1536px', // New screen size for 2xl
        '3xl': '1920px', // New screen size for 3xl
      },
    },
    fontSize: {
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      xl: "1.25rem",
      base: "1rem",
      sm: "0.875rem",
      "11xl": "1.875rem",
      "31xl": "3.125rem",
      mini: "0.938rem",
      "6xl": "1.563rem",
      xs: "0.75rem",
      lg: "1.125rem",
      "3xs": "0.625rem",
      smi: "0.813rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
