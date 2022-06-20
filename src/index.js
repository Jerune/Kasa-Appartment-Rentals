// @ts-nocheck
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Pages
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Rentals from './pages/Rentals/Rentals';
import NotFound from './pages/404/404';
// Styles
import reportWebVitals from './reportWebVitals';
import "./style/fonts.css";
import "./style/main.css";
// Providers
import { StoreProvider } from './providers/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Header />
      <StoreProvider>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/rentals/:rentalId' element={<Rentals/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </StoreProvider>
      </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
