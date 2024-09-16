import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt , faClock } from '@fortawesome/free-solid-svg-icons';
import './top.scss';

const Top = () => {
  // Data for the items to display
  const items = [
    { type: 'heading', content: 'Welcome to Felix Eastern' },
    { type: 'email', content: 'contact@felixeastern.com' },
    { type: 'phone', content: 'Call +1-234-567-890' }
  ];

  // State to keep track of the current item index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle left arrow click
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // Function to handle right arrow click
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  // Randomly change the content every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the current item based on the current index
  const currentItem = items[currentIndex];

  return (
    <div className="dashboard">

      <div className="dashboard-main">
        {/* Navigation arrows */}
        <button className="arrow left" onClick={handleLeftArrowClick}>&lt;</button>

      
        <div className="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>Kathmandu, Nepal</span>
      </div>
        {currentItem.type === 'heading' && <h1 className="fade-in">{currentItem.content}</h1>}
        {currentItem.type === 'email' && (
          <a href={`mailto:${currentItem.content}`} className="fade-in">
            {currentItem.content} <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
          </a>
        )}
        {currentItem.type === 'phone' && (
          <a className="fade-in">
            {currentItem.content} <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
          </a>
        )}
 <div className="working-hours">
        <FontAwesomeIcon icon={faClock} />
        <span>Mon-Fri: 9:00 AM TO 7:00 PM</span>
      </div>
        <button className="arrow right" onClick={handleRightArrowClick}>&gt;</button>
      </div>
    </div>
  );
};

export default Top;
