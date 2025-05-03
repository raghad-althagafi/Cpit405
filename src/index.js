import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage/HomePage';
import Services from './ServicesPage/Services';
import AboutUs from './AboutUsPage/AboutUs';
import ContactUs from './ContactUsPage/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();