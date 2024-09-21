import {  useState,useEffect } from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 


const AboutUs = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const AboutSection = document.querySelector('.about-us');
      if (AboutSection) {
        const rect = AboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsAboutVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div  className={`about-us ${isAboutVisible ? 'fade-in' : ''}`}>
      <div className="about-left">
        <h1 className={isAboutVisible ? 'fade-in' : ''}>ABOUT US</h1>
        <div className="about-text">
          <span className={isAboutVisible ? 'fade-in' : ''}>Pathway To Success</span>
        </div>
        <p className={isAboutVisible ? 'fade-in' : ''}>Felix Eastern Education Consultancy is a government-registered and test-preparation center with a long history. With a central office in Nepal and a branch office in Australia, we have been delivering services since 2016. Felix is here to assist you in selecting the best destination and university for your objectives and aspirations. We collaborates closely with the Students, bringing challenges and concerns to the table. The resolution of our students' issues and complaints is critical to the company's overall effectiveness.Our experienced staff will assist you throughout the full process of pursuing higher education in another country.</p>
        </div>
      
      <div className="about-right">
        <ul className={`points-list ${isAboutVisible ? 'fade-in' : ''}`}>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" /> Experienced and Skilled Team of Experts
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" /> 6 years of experience
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" /> Authorised representatives for multiple colleges and Universities
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" /> High Visa Success Rate
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} className="icon" /> Assistance throughout and after the process
          </li>
        </ul>
        <button className="explore-button">EXPLORE MORE</button>
 
      </div>
    </div>
      );
};

export default AboutUs;
