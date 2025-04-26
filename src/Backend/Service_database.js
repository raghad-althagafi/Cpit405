import React, { useState, useEffect } from 'react';

function Service_database() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost/get_services.php')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Service_database;