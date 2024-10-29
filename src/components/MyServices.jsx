import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyServices = () => {
    const services = [
        {
          title: 'UI/UX Design',
          image: `${process.env.PUBLIC_URL}/images/imagehero.png`, // Corrected image path
          backgroundColor: '#2d2d2d',
        },
        {
          title: 'Web Design',
          image: `${process.env.PUBLIC_URL}/images/web-design-sample.jpg`, // Corrected image path
          backgroundColor: '#ff4a4a',
        },
        {
          title: 'Landing Page',
          image: `${process.env.PUBLIC_URL}/images/landing-page-sample.jpg`, // Corrected image path
          backgroundColor: '#2d2d2d',
        },
      ];
      

  return (
    <div className="container">
      <div style={{ backgroundColor: '#1c1c1c', padding: '50px', borderRadius: '20px', color: '#ffffff' }}>
        <div className="d-flex justify-content-between">
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>
            My <span style={{ color: '#ff4a4a' }}>Services</span>
          </h2>
          <p style={{ color: '#a1a1a1' }}>
          Connecting Brands with Brilliant Web Experiences
          </p>
        </div>
        
        <div className="d-flex justify-content-between mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: service.backgroundColor,
                borderRadius: '20px',
                padding: '20px',
                width: '30%',
              }}
            >
              <h5 style={{ color: '#fff',paddingY:'10px' }}>{service.title}</h5>
              <hr/>
              <div style={{ position: 'relative', marginTop: '10px' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: '#000',  }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
