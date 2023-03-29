import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { isEnvBrowser } from "./utils/misc";

import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

if (isEnvBrowser()) {
  const root = document.getElementById("root") as HTMLElement;

  // root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  // root!.style.backgroundSize = "cover";
  // root!.style.backgroundRepeat = "no-repeat";
  // root!.style.backgroundPosition = "center";
}

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
