import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b683cf",
      dark: "#551772",
    },
    info: {
      main: "#FFFFFF",
    },
    background: {
      default: "#1c1c27",
    },
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
    h1: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 24,
    },
  },
  shadows: ["none", "0 4px 8px rgba(0,0,0,.25)"],
  shape: {
    borderRadius: 8,
  },
  sizes: {
    header: {
      main: 80,
    },
    sidebar: {
      main: 240,
      active: 240,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1600,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xxl",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "inherit",
        },
      },
    },
  },
});

export default Theme;
