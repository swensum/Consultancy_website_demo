import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartBar, faFileAlt, faBriefcase, faUserGraduate, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './service.scss';
import { serviceItems1,serviceItems2, serviceItems3, serviceItems4, serviceItems5, serviceItems6,} from '../../../../serviceitems';


const Service = () => {
  const [expandedService, setExpandedService] = useState(null);
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

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };


  return (
    <div className={`service-container ${isServiceVisible ? 'fade-in' : ''}`}>
      <h3 className={isServiceVisible ? 'fade-in' : ''}>Our Services</h3>

      <div className="whole-container">
        <div className="first-container">
          <div
            className={`service1 ${expandedService === 'service1' ? 'expanded' : ''}`}
            onClick={() => toggleService('service1')}
          >
            <FontAwesomeIcon icon={faBook} className="service-icon" />
            <h1>English Test Preparation Class</h1>
            <p>IELTS & PTE</p>
            {expandedService === 'service1' && (
              <div className="expanded-content">
                <ul>
                  {serviceItems1.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`service2 ${expandedService === 'service2' ? 'expanded' : ''}`}
            onClick={() => toggleService('service2')}
          >
            <FontAwesomeIcon icon={faChartBar} className="service-icon" />
            <h1>High rate of College</h1>
            <p>Universities Selection</p>
            {expandedService === 'service2' && (
              <div className="expanded-content">
                <ul>
                  {serviceItems2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`service3 ${expandedService === 'service3' ? 'expanded' : ''}`}
            onClick={() => toggleService('service3')}
          >
            <FontAwesomeIcon icon={faFileAlt} className="service-icon" />
            <h1>VISA Documentation</h1>
            <p>Guidance</p>
            {expandedService === 'service3' && (
              <div className="expanded-content">
                <ul>
                  {serviceItems3.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="second-container">
          <div
            className={`service4 ${expandedService === 'service4' ? 'expanded' : ''}`}
            onClick={() => toggleService('service4')}
          >
            <FontAwesomeIcon icon={faBriefcase} className="service-second" />
            <h1>Accommodation and Job</h1>
            <p>Search Assistance</p>
            {expandedService === 'service4' && (
              <div className="expanded-second">
                <ul>
                  {serviceItems4.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`service5 ${expandedService === 'service5' ? 'expanded' : ''}`}
            onClick={() => toggleService('service5')}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="service-second" />
            <p>Career Counselling</p>
            {expandedService === 'service5' && (
              <div className="expanded-second">
                <ul>
                  {serviceItems5.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className={`service6 ${expandedService === 'service6' ? 'expanded' : ''}`}
            onClick={() => toggleService('service6')}
          >
            <FontAwesomeIcon icon={faCreditCard} className="service-second" />
            <p>Education Loan Assistance</p>
            {expandedService === 'service6' && (
              <div className="expanded-second">
                <ul>
                  {serviceItems6.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
