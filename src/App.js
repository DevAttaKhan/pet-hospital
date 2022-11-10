import React from "react";

import Home from "./Pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer/Footer";

import Header from "./Components/Header/Header";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
