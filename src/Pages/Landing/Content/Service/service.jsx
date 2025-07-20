import { useState, useEffect } from 'react';
import './service.scss';
//import { serviceItems1, serviceItems2, serviceItems3, serviceItems4, serviceItems5, serviceItems6 } from '../../../../serviceitems';
import service1 from '/images/servicepic/service1.png';
import service2 from '/images/servicepic/service2.png';
import service3 from '/images/servicepic/service3.png';
import service4 from '/images/servicepic/service4.png';
import service5 from '/images/servicepic/service5.png';
import service6 from '/images/servicepic/service6.png';

const Service = () => {
  const [isServiceVisible, setIsServiceVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ServiceSection = document.querySelector('.service-container');
      if (ServiceSection) {
        const rect = ServiceSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsServiceVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`service-container ${isServiceVisible ? 'fade-in' : ''}`}>
      <span className={isServiceVisible ? 'fade-in' : ''}> Our Services</span>
      <h2 className={isServiceVisible ? 'fade-in' : ''}>Discover The Services We Offer</h2>
      <div className="paragraph">
        Explore our variety of services tailored to suit different industries and individual requirements. Whether you're looking for professional advice, hands-on assistance, or customized packages, we have the expertise to deliver outstanding results.
      </div>

      <div className="whole-container">
        <div className="first-container">
          <div className="service1">
            <div className="numbers-container">
                   <img src={service1} alt="Service1" className="image" />
                   <div className="numbers-box"> 01</div>
         
            </div>
            <h1>English Test Preparation Class</h1>
          <p>"Join our English Test Preparation Class and take the first step towards achieving your academic goals!"</p>

          </div>
          <div className="service2">
          <div className="numbers-container">
                   <img src={service2} alt="Service2" className="image" />
                   <div className="numbers-box"> 02</div>
        
            </div>
             <h1>High rate of College</h1>
             <p>"Join our High Rate of College program and take the next step toward your educational journey!"</p>
              </div>
          <div className="service3">
          <div className="numbers-container">
                    <img src={service3} alt="Service3" className="image" />
                    <div className="numbers-box"> 03</div>
            </div>
              <h1>VISA Documentation</h1>
              <p>"Our VISA Documentation service provides comprehensive assistance to individuals seeking to navigate complex world of visa applications."</p>
          
          </div>

          <div className="service4">
          <div className="numbers-container">
                   <img src={service4} alt="Service4" className="image" />
                   <div className="numbers-box"> 04</div>
        
            </div>
               <h1>Accommodation and Job</h1>
               <p>"Our Accommodation and Job service is tailored to provide you with essential resources for a successful relocation."</p>
            </div>
          <div className="service5">
          <div className="numbers-container">
                 <img src={service5} alt="Service5" className="image" />
                 <div className="numbers-box"> 05</div>
          
            </div>
               <h1>Career Counselling</h1>
               <p>"Our Career Counselling service is dedicated to empowering individuals to make informed decisions about their professional paths. "</p>

          </div>
          <div className="service6">
          <div className="numbers-container">
                <img src={service6} alt="Service6" className="image" />
                <div className="numbers-box"> 06</div>
              
            </div>
               <h1>Education Loan Assistance</h1>
               <p>"Our Education Loan Assistance service is designed to empower students and their families by simplifying the process of obtaining financial aid for education."</p>
           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
