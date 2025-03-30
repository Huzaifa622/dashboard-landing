import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter >
    {/* <div className={GeistSans.className} > */}
      <App />
      {/* </div> */}
    </BrowserRouter>
  </StrictMode>
);
