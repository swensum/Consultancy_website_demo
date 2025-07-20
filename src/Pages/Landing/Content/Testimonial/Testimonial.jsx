import { useState, useEffect } from 'react';
import testimonialData from '../../../../testimonialData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight  } from '@fortawesome/free-solid-svg-icons';
import './testi.scss';

const Testimonial = () => {
  const [isTestiVisible, setIsTestiVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the first testimonial

  // Duplicate testimonials for circular motion
  const extendedTestimonials = [
    testimonialData[testimonialData.length - 1], // Last testimonial
    ...testimonialData,
    testimonialData[0], // First testimonial
  ];

  // Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 1 ? extendedTestimonials.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === extendedTestimonials.length - 2 ? 1 : prevIndex + 1
    );
  };


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

  

  return (
    <div className={`testimonial-section ${isTestiVisible ? 'fade-in' : ''}`}>
      <div className="testimonial-heading">
        <span className={isTestiVisible ? 'fade-in' : ''}>Testimonial</span>
        <h2 className={isTestiVisible ? 'fade-in' : ''}>
          What Our Students Say About Us
        </h2>
        <p>
          We work directly with the students, addressing their issues and concerns. 
          We're all listening to what students have to say about us.
        </p>
      </div>

      <div className="testimonial-container">
        <div className="button-container left">
          <button className="nav-button" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>

      <div className="testimonial-menu"   >
      {extendedTestimonials.map((testimonial) => (
       
                 <div className="testimonial-box" key={testimonial.id}  style={{ transform: `translateX(-${(currentIndex - 1) * 110}%)` }}>
          
               <div className="message-content">
            <img src={testimonial.image} alt={testimonial.student} className="student-image" />
            <div className="student-content">
                <h3 className="student-title">{testimonial.title}</h3>
                <p className="student-name">{testimonial.student}</p>
              </div>
              </div>
          
              <p className="student-feedback">"{testimonial.feedback}"</p>
              <div className="testimonial-icon">
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
        ))}
        </div>

        <div className="button-container right">
          <button className="nav-button" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
