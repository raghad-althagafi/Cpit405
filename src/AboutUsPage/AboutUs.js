import { useEffect } from 'react';
import './AboutUs_Style.css';
import Footer from '../Footer';
import Header from '../Header';
import Button from '../Button';

function AboutUs() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsaPkISPfrYeVc_1T1B_zih_PSuXZfW4k&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = function () {
      const location = { lat: 21.422960, lng: 39.828855 };
      const map = new window.google.maps.Map(
        document.getElementById('map'),
        {
          center: location,
          zoom: 17,
          mapTypeId: 'satellite',
        }
      );
      new window.google.maps.Marker({ position: location, map: map });
    };
    document.body.appendChild(script);

    return () => {
      delete window.initMap;
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page">

      <section className="about-section">
        <h1 className="title">About Us</h1>
        <p className="text">
          At IT Solutions, we’re dedicated to delivering innovative, reliable technology services that drive business growth and security.
        </p>
        <Button Link='/ContactUs' name="Get in Touch" className="btn-primary" style={{ marginBottom: '40%' }} />
      </section>

      <section className="cards-section">
        <div className="card">
          <h3>Our Vision</h3>
          <p>To lead the industry by providing top-tier IT solutions that empower companies with secure and scalable infrastructure.</p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>To tailor technology services that meet the unique needs of each client, fostering innovation and continuous support.</p>
        </div>
        <div className="card">
          <h3>Our Values</h3>
          <p>Integrity, innovation, transparency, and customer focus guide everything we do.</p>
        </div>
      </section>

      <section className="map-section">
        <h2 className="title">Our Location</h2>
        <div id="map" className="map-container" style={{ height: '400px', width: '100%' }}></div>
      </section>

      <div className="End-Page">
        <h1 className="title">Ready to elevate your IT infrastructure?</h1>
        <Button Link='/ContactUs' name="Contact Us Now" className="btn-primary" />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;
