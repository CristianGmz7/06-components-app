import { Colors } from './constants/Colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          // primary: Colors.light.primary,
          // secondary: Colors.light.secondary,
          ...Colors.light
        },
        dark: {
          ...Colors.dark
        },
        // otras variantes
      },

    },
  },
  plugins: [],
}