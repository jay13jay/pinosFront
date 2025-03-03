/** @type {import('tailwindcss').Config} */
// Tailwind CSS configuration file

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  // Specify the files Tailwind should scan for class names
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",      // Include all JS and TS files from app folder
    "./pages/**/*.{js,ts,jsx,tsx}",    // Include all JS and TS files from pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include all JS and TS files from components folder
  ],
  // Set dark mode to 'class' enabling manual toggling via CSS class
  darkMode: "class",
  theme: {
    // Container configuration for layout
    container: {
      center: true,      // Center the container by default
      padding: "1rem",   // Add horizontal padding
    },
    // Define custom breakpoints for responsive design
    screens: {
      xs: "450px",  // Extra small devices
      sm: "575px",  // Small devices
      md: "768px",  // Medium devices
      lg: "992px",  // Large devices
      xl: "1200px", // Extra large devices
      "2xl": "1400px", // Double extra large devices
    },
    extend: {
      // Extend the default color palette
      colors: {
        current: "currentColor",   // Use the current text color
        transparent: "transparent",  // Transparent color
        white: "#FFFFFF",           // Pure white
        black: "#121723",           // Custom black shade
        dark: "#1D2430",            // Dark theme background
        primary: "#000000",         // Primary accent color
        yellow: "#FBB040",          // Yellow accent color
        "body-color": "#788293",    // Body text color for light theme
        "body-color-dark": "#959CB1", // Body text color for dark theme
        "gray-dark": "#1E232E",     // Dark gray for UI contrast
        "gray-light": "#F0F2F9",     // Light gray for backgrounds
        stroke: "#E3E8EF",          // Stroke color for borders
        "stroke-dark": "#353943",   // Stroke color for dark mode
        "bg-color-dark": "#171C28", // Background color for dark mode layouts
        // "italian-flag": "linear-gradient(90deg, #008C45 33.33%, #F4F5F0 33.33%, #F4F5F0 66.66%, #CD212A 66.66%)" // Italian flag gradient,
      },
      // Extend with custom box shadow utilities
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)", // Shadow style used in signup components
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",       // Light default shadow
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",        // Medium intensity shadow
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",     // Soft shadow for larger elements
        sticky: "inset 0 -1px 0 0 rgba(255, 0, 0, 1)",   // Inset shadow for sticky headers
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)", // Inset shadow variant for dark mode
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)", // Prominent shadow for feature sections
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",      // Standard shadow for submit buttons
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)", // Dark mode shadow for submit buttons
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",         // Minimal button shadow
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",    // Hover state shadow for buttons
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",     // Light variant for button shadow
        'glow-green': '0 0 10px rgba(0, 255, 0, 0.7)',
        'glow-white': '0 0 10px rgba(255, 255, 255, 0.7)',
        'glow-red': '0 0 10px rgba(255, 0, 0, 0.7)',
      },
      // Extend with custom drop shadow utilities
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)", // Additional drop shadow for visual depth
      },
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ],
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  // Define plugins ( no plugins are added)
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
});
