import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Preloader, ScrollToTop, UserLayout } from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { PUBLIC_ROUTES } from "./constant/routes";
import "./style.css";
import "./App.css";

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
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={PUBLIC_ROUTES.HOME_PAGE} element={<Home />} />
            <Route path={PUBLIC_ROUTES.PROJECTS} element={<Projects />} />
            <Route path={PUBLIC_ROUTES.ABOUT} element={<About />} />
            <Route path={PUBLIC_ROUTES.NOT_FOUND} element={<Navigate to={PUBLIC_ROUTES.HOME_PAGE} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
