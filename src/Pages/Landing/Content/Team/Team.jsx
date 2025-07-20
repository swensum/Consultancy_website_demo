import './team.scss'; 
import {  useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import teamData from '../../../../data';

const Team = () => {
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const TeamSection = document.querySelector('.team-container');
      if (TeamSection) {
        const rect = TeamSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsTeamVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div  className={`team-container ${isTeamVisible ? 'fade-in' : ''}`}>
      <h1 className={isTeamVisible ? 'fade-in' : ''}>Our Team</h1>
      <div className="heading">
        <span className={isTeamVisible ? 'fade-in' : ''}>TEAM OF EXPERTS</span>
      </div>
      <div className="team-members">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h4>{member.name}</h4>
       <div className="social-links">
        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
            <div className="page">
            <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
