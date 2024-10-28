import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RefreshContextProvider } from "tome-kolmafia";

import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <RefreshContextProvider>
        <App />
      </RefreshContextProvider>
    </StrictMode>,
  );
}
