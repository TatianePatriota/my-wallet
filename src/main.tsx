import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import router from "./router";
import { themes } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <main className="project-container">
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  </React.StrictMode>
);
