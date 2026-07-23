import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Restore path after 404.html redirect (GitHub Pages SPA routing)
if (sessionStorage.redirect) {
  const redirectPath = sessionStorage.redirect;
  delete sessionStorage.redirect;
  // Use replaceState to restore the original URL without reloading
  window.history.replaceState(null, "", '/Portfolio' + redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
