import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#252525",
          2: "#212121",
          3: "#181818",
          4: "#1A1A1A",
        },
        button: "#3A3B3C",
        danger: "#fe6854",
        fontPrimary: "#e5e7eb",
        text: {
          secondary: "#B0B3B8",
          primary: "#FFFFFF",
          light: "#f8f8f8",
        },
        background: "#FBFBFD",
        gradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
        green: {
          dark: "#27AE60",
          light: "#dbe1e8",
        },
        activeNavLink: "rgba(249,249,249, 0.08)",
        activeNavLinkHover: "rgba(249,249,249, 0.03)",
        primary: "#7263F3",
        primary2: "#705DF2",
        grey: {
          dark: "#131313",
          0: "#f8f8f8",
          1: "#dbe1e8",
          2: "#b2becd",
          3: "#6c7983",
          4: "#454e56",
          5: "#2a2e35",
          6: "#12181b",
        },
        white: "#fff",
        primaryGreen: "#6FCF97",
        borderColor: "rgba(249,249,249, 0.08)",
        borderColor2: "rgba(249,249,249, 0.08)",
        icons: {
          1: "rgba(249,249,249, 0.35)",
          2: "rgba(249,249,249, 0.75)",
          3: "rgba(249,249,249, 0.08)",
          4: "rgba(0,0,0, 0.3)",
        },
      },
      boxShadow: {
        shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
      },
      fontSize: {
        h4: "19px",
        small: "14px",
        small2: "15px",
      },
      spacing: {
        gridGap: "2rem",
        padLRSm: "0 2rem",
        marLRSm: "0 1rem",
      },
      sidebar: {
        width: "15rem",
        collapsed: "5.4rem",
      },
    },
  },
  plugins: [],
};

export default config;