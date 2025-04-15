import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.jsx";
import SurprisePage from "./pages/SurprisePage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
};

export default App;
