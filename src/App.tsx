import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import RepoList from "./features/repos/RepoList";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<RepoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
