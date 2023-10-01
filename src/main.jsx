import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import Theme from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
