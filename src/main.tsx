import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/App.css";
import "./css/Introduction.css";
import "./css/ProjectCard.css";
import "./css/ProjectDetails.css";
import "./css/About.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
