import { Routes, Route, useLocation } from "react-router-dom";
import { useCallback } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./helpers/particlesConfig";

import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";

import "./App.scss";
import Theme from "./components/theme";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="App">
      {/* Particles */}
      {isHome && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}

      {/* Navbar Content */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      {/* Main Page Content */}
      <div className="App__main-content-wrapper">
        <Theme hasHeader={!isHome} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
