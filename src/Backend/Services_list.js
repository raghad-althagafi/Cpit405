import { useEffect, useState } from 'react';

function Services_list() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/Api/get_services.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  

  return (
    <>
      {services.length > 0 ? (
        services.map(service => (
          <div key={service.id} className="service-box">
            <h2 className="service-title">{service.name}</h2>
            <p className="service-desc">{service.description}</p>
          </div>
        ))
      ) : (
        <p>No services available.</p>
      )}
    </>
  );
}

export default Services_list;
