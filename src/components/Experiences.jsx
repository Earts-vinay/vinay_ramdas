import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Experience() {
  const experiences = [
    {
      company: "Self-Employed, NYC",
      duration: "Sep 2020 - July 2023",
      role: "Visual Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      color: "red"
    },
    {
      company: "Insightancer",
      duration: "Aug 2016 - Sep 2020",
      role: "UI/UX Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      color: "black"
    },
    {
      company: "KG Design Studio",
      duration: "Sep 2015 - Aug 2016",
      role: "Web Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      color: "red"
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Work Experience</h2>
      <div className="row">
        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className="col-md-4 text-md-end text-center">
              <p className="mb-1 fw-bold">{exp.company}</p>
              <p>{exp.duration}</p>
            </div>
            <div className="col-md-1 d-flex flex-column align-items-center">
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: exp.color,
                  borderRadius: '50%',
                  border: `2px solid ${exp.color}`,
                  marginBottom: '10px'
                }}
              />
              {index < experiences.length - 1 && (
                <div
                  style={{
                    width: '1px',
                    height: '50px',
                    backgroundColor: '#000',
                    borderStyle: 'dashed'
                  }}
                />
              )}
            </div>
            <div className="col-md-7">
              <h5 className="fw-bold">{exp.role}</h5>
              <p>{exp.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Experience;
