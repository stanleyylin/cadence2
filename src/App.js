import React from "react";

import Layout from "./pages/Layout";
import Landing from "./pages/landing/Landing";
import Carousel from "./pages/landing/Carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
