import React from 'react';

const Home = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <div className="hero-section container">
        <div className="d-flex justify-content-center">
          <p style={{ border: '1px solid #FF6F3C', borderRadius: '20px' }} className="text-center px-3 py-1">Hello!</p>
        </div>
        <h1 className='name-heading'>
          I'm <span className="highlight">Vinay,</span>
          <br /> Web Developer
        </h1>

        <div className="row mt-4 align-items-center">
         

          {/* Profile Details on the left side */}
          <div className="col-md-4">
            <div className="profile-details">
              <p>“Hi there! I’m Vinay Ramdas, a passionate web developer with expertise in creating dynamic, user-friendly websites.”</p>
            </div>
            <div className="stats mt-4">
              <div>
                <h2>450+</h2>
                <p>Clients Served</p>
              </div>
            </div>
          </div>

         {/* Hero Image in the middle */}
         <div className="col-md-4 hero-image ">
            <img src="https://via.placeholder.com/350x350" alt="Vinay - Web Developer" className="hero-image" />
          </div>
          

          {/* Experience on the right side */}
          <div className="col-md-4">
            <div className="stats mt-4">
              <div>
                <h2>10 Years</h2>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons mt-5 text-center">
          <button className="btn btn-primary-custom">Portfolio</button>
          <button className="btn btn-secondary-custom">Hire Me</button>
        </div>
      </div>
    </>
  );
};

export default Home;
