import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Repos from "./features/repos/RepoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
