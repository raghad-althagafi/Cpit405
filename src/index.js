import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage/HomePage';
import Services from './ServicesPage/Services';
<<<<<<< HEAD
import ContactUs from './ContactUsPage/ContactUs';
=======
>>>>>>> 0423d0b5b71ef98240f75558421bd8c7f41d001e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
<<<<<<< HEAD
    <ContactUs />
=======
    <Services />
>>>>>>> 0423d0b5b71ef98240f75558421bd8c7f41d001e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
