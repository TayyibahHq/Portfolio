import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Restore path after 404.html redirect (GitHub Pages SPA routing)
if (sessionStorage.redirect) {
  const path = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, "", path);
}

createRoot(document.getElementById("root")!).render(<App />);
