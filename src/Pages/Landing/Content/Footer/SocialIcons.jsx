import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; 

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} className="social-icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
