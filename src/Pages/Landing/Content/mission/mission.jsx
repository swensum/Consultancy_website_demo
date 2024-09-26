import {  useState,useEffect } from 'react';
import './mission.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardUser, faChartBar  } from '@fortawesome/free-solid-svg-icons';


const Mission = () => {
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const MissionSection = document.querySelector('.mission-container');
      if (MissionSection) {
        const rect = MissionSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsMissionVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div  className={`mission-container ${isMissionVisible ? 'fade-in' : ''}`}>
      <div className="mission-left">
        <h1 className={isMissionVisible ? 'fade-in' : ''}>See What Our Mission Are</h1>
        <div className="mission-text">
          <span className={isMissionVisible ? 'fade-in' : ''}>CORE FEATURES</span>
        </div>
        
        <div className="first-part">
        <div className="icon-container">
        <FontAwesomeIcon icon={faUserGraduate} className="graduation-icon" />
 
        </div>
        <div className="text-container">
          <div className="head">
            <h2 className={isMissionVisible ? 'fade-in' : ''}>Mission</h2>
            </div>
            <p className={isMissionVisible ? 'fade-in' : ''}>To provide full support and help to the students who aimed to be part of different international universities around the globe.</p>
        </div>
        </div>
        
        <div className="second-part">
        <div className="icon-container">
        <FontAwesomeIcon icon={faChalkboardUser} className="graduation-icon" />
 
        </div>
        <div className="text-container">
          <div className="head">
            <h2 className={isMissionVisible ? 'fade-in' : ''}>Vision</h2>
            </div>
            <p className={isMissionVisible ? 'fade-in' : ''}>We are established with a vision to pro- vide quality services that exceed the ex- pectations of our esteemed students</p>
      
        </div>
        </div>
        <div className="third-part">
        <div className="icon-container">
        <FontAwesomeIcon icon={faChartBar} className="graduation-icon" />
 
        </div>
        <div className="text-container">
          <div className="head">
            <h2 className={isMissionVisible ? 'fade-in' : ''}>Vision</h2>
            </div>
            <p className={isMissionVisible ? 'fade-in' : ''}>We are established with a vision to pro- vide quality services that exceed the ex- pectations of our esteemed students</p>
        </div>
        </div>
      
            </div>
      

      
     
        
  
      </div>
      );
};

export default Mission;
