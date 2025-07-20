import React from "react";
import "./support.scss"; 


  const logos = [
    "/images/logos/logo1.png", 
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo4.png",
  ];

  const Support = () => {
    return (
      <div className="accreditation-section">
        <h2 className="accreditation-heading">Accreditation</h2>
        <div className="logos-container">
          <div className="logos-track">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
            ))}
            {logos.map((logo, index) => (
              <img key={`duplicate-${index}`} src={logo} alt={`Logo ${index + 1}`} className="logo" />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Support;