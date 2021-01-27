import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
