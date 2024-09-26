import {  useState, useEffect } from 'react';
import './course.scss';
import photo2 from '/images/photo2.jpg';
import photo4 from '/images/photo4.jpg';
import photo5 from '/images/photo5.jpg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faStar, faUser, faBook, faClock } from '@fortawesome/free-solid-svg-icons';




const Section = () => {
  const [isCoursesVisible, setIsCoursesVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const coursesSection = document.querySelector('.courses-section');
      if (coursesSection) {
        const rect = coursesSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsCoursesVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`courses-section ${isCoursesVisible ? 'fade-in' : ''}`}>
    <h1>Coaching Courses</h1>
    <div className="courses-container">
      <div className="course1">
        <img src={photo2} alt="VISA1" className="visa" />
        <div className="course-info">
          <div className="date-info">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>August 5,2024</span>
          </div>
          <div className="rating-info">
            <FontAwesomeIcon icon={faStar} />

            <span>4.5</span>
          </div>
        </div>
        <h2>Elicos</h2>

        <div className="course-details">
          <div className="detail-item">
            <FontAwesomeIcon icon={faUser} />
            <span>30 Students</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faBook} />
            <span>10 Courses</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} />
            <span>Upto 1 Year</span>
          </div>
        </div>
        <div className="price-bar">
        <p>AUD 4,000 - 10,000</p>
        <span className="enroll">ENROLL ON</span>
   
        </div>
      </div>


      <div className="course2">
        <img src={photo4} alt="VISA2" className="visa" />
        <div className="course-info">
          <div className="date-info">
            <FontAwesomeIcon icon={faCalendarAlt} />

            <span>August 5,2024</span>
          </div>
          <div className="rating-info">
            <FontAwesomeIcon icon={faStar} />

            <span>4.0</span>
          </div>
        </div>
        <h2>Vocational Education & Training</h2>
        <div className="course-details">
          <div className="detail-item">
            <FontAwesomeIcon icon={faUser} />
            <span>25 Students</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faBook} />
            <span>8 Courses</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} />
            <span>5 Upto 3 Years</span>
          </div>
        </div>
        <div className="price-bar">
        <p>AUD 2,000 - 22,000</p>
        <span className="enroll">ENROLL ON</span>
   
         
        </div>
      </div>


      <div className="course3">
        <img src={photo5} alt="VISA3" className="visa" />
        <div className="course-info">
          <div className="date-info">
            <FontAwesomeIcon icon={faCalendarAlt} />

            <span>August 5,2024</span>
          </div>
          <div className="rating-info">
            <FontAwesomeIcon icon={faStar} />

            <span>4.7</span>
          </div>
        </div>
        <h2>Higher Education</h2>
        <div className="course-details">
          <div className="detail-item">
            <FontAwesomeIcon icon={faUser} />
            <span>25 Students</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faBook} />
            <span>8 Courses</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} />
            <span>1 to 3 Years </span>
          </div>
        </div>
        <div className="price-bar">
          <p>AUD 8,000 - 60,000</p>
          <span className="enroll">ENROLL ON</span>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Section;
