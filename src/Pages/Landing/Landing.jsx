import { useState } from 'react';
import './landing.scss';
import Navbar from '../../widget/navbar/NavBar';
import Modal from '../../widget/Model/model';
import six from '/images/six.png';
import student from '/images/student.png';
import success from '/images/success.png';
import uk from '/images/uk.png';
import usa from '/images/usa.png';
import canada from '/images/canada.png';
import australia from '/images/australian.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBook, faChartBar, faFileAlt, faBriefcase, faUserGraduate, faCreditCard, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { serviceItems1, serviceItems2, serviceItems3, serviceItems4, serviceItems5, serviceItems6 } from '../../serviceitems';

const Landing = () => {
  const [activeCircle, setActiveCircle] = useState('1');
  const [expandedService, setExpandedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');





  const handleCircleClick = (circleNumber) => {
    setActiveCircle(circleNumber);

  };

  const handleIconClick = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const toggleService = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };
  return (
    <section id='Landing'>
      <div className="Landing-header">
        <Navbar />
        <div className="header-content">
          <div className="hbox">
            <h1>Welcome To Felix Eastern Educational <br /> Consultancy</h1>
          </div>
          <div className="pbox">
            <p>Study in</p>
            <div className="image-container">
              <div className="location">
                <img src={uk} alt="UK flag" className="flag" />
              </div>
              <div className="location">
                <img src={usa} alt="USA flag" className="flag2" />
              </div>
              <div className="location">
                <img src={canada} alt="CANADA flag" className="flag3" />
              </div>
              <div className="location">
                <img src={australia} alt="Australia flag" className="flag4" />
              </div>
            </div>
          </div>
          <div className="text">
            <p>and</p>
          </div>
        </div>
      </div>

      {/* Horizontal containers between sections */}
      <div className="horizontal-containers">
        <div className="container1">
          <img src={six} alt="Six" className="six" />
          <div className="text-container">
            <h2>Experienced Experts</h2>
            <p>6 Years of Excellency</p>
          </div>
        </div>
        <div className="container2">
          <img src={student} alt="Student" className="student" />
          <div className="text-container">
            <h2>Student's Choice</h2>
            <p>Countless Students Assisted</p>
          </div>
        </div>
        <div className="container3">
          <img src={success} alt="Success" className="success" />
          <div className="text-container">
            <h2>Success Stories</h2>
            <p>Countless Students Assisted</p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <h2>Are You Ready To<br />Transform Your Life?</h2>
        <p>
          Felix is here to assist you in selecting the best destination and <br />
          university for your objectives and aspirations. Our experienced <br />
          staff with 6 years of excellence will assist you throughout the <br />
          full process of pursuing higher education in the UK, USA, Canada <br />
          or Australia. We are authorised representatives for a number of <br />
          Universities and Colleges.
        </p>

        <div className="red">
          <button className='get'>GET STARTED TODAY</button>
          <button className='push'>CONTACT US</button>
        </div>

        <div className="circle-container">
          <div
            className={`circle1 circle ${activeCircle === '1' ? 'active' : 'small'}`}
            onClick={() => handleCircleClick('1')}
          >
            {activeCircle === '1' && (
              <FontAwesomeIcon
                icon={faPlay}
                className="play-icon"
                onClick={() => handleIconClick('https://www.youtube.com/watch?v=VIDEO_ID_1')}
              />
            )}
          </div>
          <div
            className={`circle2 circle ${activeCircle === '2' ? 'active' : 'small'}`}
            onClick={() => handleCircleClick('2')}
          >
            {activeCircle === '2' && (
              <FontAwesomeIcon
                icon={faPlay}
                className="play-icon"
                onClick={() => handleIconClick('https://www.youtube.com/watch?v=VIDEO_ID_2')}
              />
            )}
          </div>

          <div
            className={`circle3 circle ${activeCircle === '3' ? 'active' : 'small'}`}
            onClick={() => handleCircleClick('3')}
          >
            {activeCircle === '3' && (
              <FontAwesomeIcon
                icon={faPlay}
                className="play-icon"
                onClick={() => handleIconClick('https://www.youtube.com/watch?v=VIDEO_ID_3')}
              />
            )}
          </div>
        </div>

        <div className="service-container">
          <h3>Our Services</h3>

          <div className="whole-container">
            <div className="first-container">
              <div
                className={`service1 ${expandedService === 'service1' ? 'expanded' : ''}`}
                onClick={() => toggleService('service1')}
              >
                <FontAwesomeIcon icon={faBook} className="service-icon" />
                <h1>English Test Preparation Class</h1>
                <p>IELTS & PTE <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>
                {expandedService === 'service1' && (
                  <div className="expanded-content">
                    <ul>
                      {serviceItems1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                className={`service2 ${expandedService === 'service2' ? 'expanded' : ''}`}
                onClick={() => toggleService('service2')}
              >
                <FontAwesomeIcon icon={faChartBar} className="service-icon" />
                <h1>High rate of College</h1>
                <p> Universities Selection <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>
                {expandedService === 'service2' && (
                  <div className="expanded-content">
                    <ul>
                      {serviceItems2.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                className={`service3 ${expandedService === 'service3' ? 'expanded' : ''}`}
                onClick={() => toggleService('service3')}
              >
                <FontAwesomeIcon icon={faFileAlt} className="service-icon" />
                <h1>VISA Documentation</h1>
                <p> Guidance <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>
                {expandedService === 'service3' && (
                  <div className="expanded-content">
                    <ul>
                      {serviceItems3.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="second-container">
              <div
                className={`service4 ${expandedService === 'service4' ? 'expanded' : ''}`}
                onClick={() => toggleService('service4')}
              >
                <FontAwesomeIcon icon={faBriefcase} className="service-second" />
                <h1>Accomodation and Job</h1>
                <p> search Assistance <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>
                {expandedService === 'service4' && (
                  <div className="expanded-second">
                    <ul>
                      {serviceItems4.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                className={`service5 ${expandedService === 'service5' ? 'expanded' : ''}`}
                onClick={() => toggleService('service5')}
              >
                <FontAwesomeIcon icon={faUserGraduate} className="service-second" />
                <p>Career Counselling <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>

                {expandedService === 'service5' && (
                  <div className="expanded-second">
                    <ul>
                      {serviceItems5.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                className={`service6 ${expandedService === 'service6' ? 'expanded' : ''}`}
                onClick={() => toggleService('service6')}
              >
                <FontAwesomeIcon icon={faCreditCard} className="service-second" />
                <p>Education Loan Assistance <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" /></p>

                {expandedService === 'service6' && (
                  <div className="expanded-second">
                    <ul>
                      {serviceItems6.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={videoUrl}
      />
    </section>
  );
};

export default Landing;
