import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, ProjectPage } from './pages';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function RedirectToMain() {
  return (
    <Routes>
      <Route render={() => <Main />} />
    </Routes>
    );
}

function App() {
  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectPage />} />

          <Route path="*" element={<RedirectToMain />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
