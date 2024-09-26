import { useState, useEffect } from 'react';
import testimonialData from '../../../../testimonialData';
import './testi.scss'; // Optional: add your styling here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTestiVisible, setIsTestiVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const TestiSection = document.querySelector('.testimonial-section');
      if (TestiSection) {
        const rect = TestiSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsTestiVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const { image, title, student, feedback } = testimonialData[currentIndex]; // Get current testimonial data

  return (
    <div className={`testimonial-section ${isTestiVisible ? 'fade-in' : ''}`}>
      <div className="testimonial-heading">
        <h2 className={isTestiVisible ? 'fade-in' : ''}>
          What Our Students Say About Us
        </h2>
        <div className="testimonial-sub">
          <span className={isTestiVisible ? 'fade-in' : ''}>Testimonial</span>
        </div>
        <p>
          We work directly with the students, addressing their issues and concerns. 
          We're all listening to what students have to say about us.
        </p>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="feedback-container">
            <FontAwesomeIcon icon={faQuoteLeft} className="feedback-icon" /> {/* Testimonial icon */}
            <span>"{feedback}"</span> {/* Use feedback here */}
          </div>
          <div className="detail-content">
            <div className="detail-image">
              <img src={image} alt={`${student}'s feedback`} />
            </div>
            <div className="detail-name">
              <div className="name">
                <h3>{student}</h3>
              </div>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
