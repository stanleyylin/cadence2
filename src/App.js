import React from "react";

import Layout from "./pages/Layout";
import Landing from "./pages/landing/Landing";
import UploadPage from "./pages/UploadPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="upload" element={<UploadPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
