// React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Rentals from "./pages/Rentals/Rentals";
import NotFound from "./pages/404/404";
// Styles
import "./style/fonts.css";
import "./style/main.css";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rentals/:rentalId" element={<Rentals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
