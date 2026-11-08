import "@quietmind/mdx-docs/index.css";
import { createApp } from "@quietmind/mdx-docs";

import { pages } from "./config/pages.js";
import { site } from "./config/site.js";

createApp({
  pages,
  site,
  theme: {
    fontFamily: '"Fira Sans", -apple-system, system-ui, sans-serif',
    light: {
      palette: {
        primary: { main: "#0269d4" },
        secondary: { main: "#7611a6" },
        background: { default: "#f9f4f4", paper: "#a5d4f5" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#84d2f6" },
        secondary: { main: "#c561f6" },
        background: { default: "#000000", paper: "#101010" },
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: ({ theme }) => ({
            backgroundColor: '#e3e3e3', // or leave unset to use default
            ...theme.applyStyles("dark", {
              backgroundColor: '#010101',
            }),
          })
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: '#2482e6',
            ...theme.applyStyles("dark", {
              backgroundColor: '#000000',
              backgroundImage: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }),
          })
        }
      }
    },
  },
});
