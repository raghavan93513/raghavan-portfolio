import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/ResumeNew";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import EasterEgg from "./components/EasterEgg";
import BackToTop from "./components/BackToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Applies .revealed class to all .reveal elements in view
function ScrollRevealObserver() {
  const location = useLocation();

  useEffect(() => {
    const applyObserver = () => {
      const revealEls = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => observer.observe(el));
      return observer;
    };

    // Small delay to allow DOM to settle after route change
    const timer = setTimeout(() => {
      const obs = applyObserver();
      return () => obs.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      <ScrollProgress />
      <EasterEgg />
      <Preloader load={load} />
      <BackToTop />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <ScrollRevealObserver />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
