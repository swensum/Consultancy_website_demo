import './upcomming.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import upcomingEvents from '../../../../upcomingEvents'; 

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
        <span className={isUpVisible ? 'fade-in' : ''}>Our Events</span>
        <h1 className={isUpVisible ? 'fade-in' : ''}>Join Our Upcoming Events</h1>
        <p className={isUpVisible ? 'fade-in' : ''}>
          Stay tuned for exciting activities, workshops, and more that you don't want to miss.
        </p>

        {/* New row of three containers */}
        <div className="up-row">
          {upcomingEvents.map(event => (
            <div className="up-container" key={event.id}>
              <img src={event.image} alt={`Event ${event.id}`} />
              <div className="up-events">
                <div className="up-event1">{event.date}</div>
                <div className="up-event2"><FontAwesomeIcon icon={faClock} /> {event.time}</div>
                <div className="up-event3"><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</div>
              </div>
              <h2>{event.title}</h2>
              <div className="up-event4">
                <h3>{event.description}</h3>
              </div>
              <div className="watch">
                <a href={event.videoLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPlay} /> watch us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComming;
