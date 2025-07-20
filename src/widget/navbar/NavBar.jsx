import { useState, useEffect } from 'react';
import './navbar.scss';


import logo from '/images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>

      <div className="navbar-main">
        <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-links">
        <li>
          <a href="/">Home</a> {/* This reloads the page */}
        </li>
          <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="bar">|</div>
        <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <button className="join-button">Join Us</button>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
          <li>
          <a href="/"onClick={closeSidebar}>Home</a>
          </li>
          <li>
          <a href="#about"onClick={closeSidebar}>About Us</a>
        </li>
        <li>
          <a href="#courses"onClick={closeSidebar}>Courses</a>
        </li>
          <li><a href="#team"onClick={closeSidebar}>Team</a></li>
          <li><a href="#contact"onClick={closeSidebar}>Contact Us</a></li>
          </ul>
          <div className="sidebar-footer">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






