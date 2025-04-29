import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage/HomePage';
import Services from './ServicesPage/Services';
<<<<<<< HEAD
<<<<<<< HEAD
import ContactUs from './ContactUsPage/ContactUs';
=======
>>>>>>> 0423d0b5b71ef98240f75558421bd8c7f41d001e

=======
import ContactUs from './ContactUsPage/ContactUs';
>>>>>>> a0aec6cc01b2c0ba03fea9bd6ffea707787e044b
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
<<<<<<< HEAD
<<<<<<< HEAD
    <ContactUs />
=======
    <Services />
>>>>>>> 0423d0b5b71ef98240f75558421bd8c7f41d001e
=======
    <ContactUs />
>>>>>>> a0aec6cc01b2c0ba03fea9bd6ffea707787e044b
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
