import './upcomming.scss';
import {  useState,useEffect } from 'react';
import { events } from '../../../../events';  
import laptop from '/images/laptop.png'
const UpComming = () => {
  const [isUpVisible, setIsUpVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const UpSection = document.querySelector('.Up-container');
      if (UpSection) {
        const rect = UpSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsUpVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`Up-container ${isUpVisible ? 'fade-in' : ''}`}>
      <div className="up-left">
        <h1 className={isUpVisible ? 'fade-in' : ''}>Join Our Upcoming Events</h1>
        <div className="events">
          <span className={isUpVisible ? 'fade-in' : ''}>Our Events</span>
        </div>

    
        {events.map((event) => (
          <div key={event.id} className="first-event-container">
            <div className="date">
              <h2>{event.date}</h2>
              <p>{event.monthYear}</p>
            </div>
            <div className="event-details">
              <div className="bar"></div>
              <div className="event-info">
                <div className="time">
                  <p>{event.time}</p>
                  <span>{event.location}</span>
                </div>
                <h3 className={isUpVisible ? 'fade-in' : ''}>{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="up-right">
      <img src={laptop} alt="Photo" className="up-photo" />
          
             </div>
    </div>
  );
};

export default UpComming;
