import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Mount app
createRoot(document.getElementById("root")!).render(<App />);

// Register GSAP plugin (used inside components)
gsap.registerPlugin(ScrollTrigger);
