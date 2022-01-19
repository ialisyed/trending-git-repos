import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Repos from "./features/repos/RepoList";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Repos />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
