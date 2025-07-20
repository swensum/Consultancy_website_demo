import './footer.scss';

import logo from '/images/logos/logo.png';

import SocialIcons from "../../../../Pages/Landing/Content/Footer/SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="site-logo">
            <img src={logo} alt="Site Logo" className="logo-image" />
            <span>We are a well-known, government-approved test preparation center. We're here to assist you in selecting the appropriate destination and university for your objectives and aspirations.</span>

          </div>
          <div className="social-section">
            <h3 className="social-title">Follow us</h3>
            <SocialIcons />
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-menu quick-links">
            <h3 className="menu-title">Quick Links</h3>
            <ul className="menu-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-menu other-links">
            <h3 className="menu-title">Other Links</h3>
            <ul className="menu-list">
              <li><a href="#">Event</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Instructor</a></li>
            </ul>
          </div>
          <div className="footer-menu contactus">
            <h3 className="menu-title">Contact Us</h3>
            <ul className="menu-list">
              <li>1st Floor HBL Building
                Madan Bhandari Path
                New Baneshwor, Kathmandu-31</li>
              <li>26 Kate Street, Kedron
                QLD, 4031 Australia</li>
              <li>+977 1 4437975, 9843161346
              </li>
              <li>kathmandu@felixeastern.info</li>
            </ul>


          </div>
        </div>
       
      </div>
  <div className="footer-bottom">
  <p className="copyright">Copyright © 2022 Felix Education. All Rights Reserved</p>
  <nav className="legal-menu">
    <a href="#privacy">Privacy Policy</a>
    <a href="#terms">Terms of Use</a>
    <a href="#sales">Support</a>
    <a href="#legal">Legal</a>
    <a href="#sitemap">Site Map</a>
  </nav>
</div>

    </footer>
  );
};

export default Footer;
