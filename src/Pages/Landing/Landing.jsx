import { useState, useEffect} from 'react';
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
import { faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import AboutUs from '../../Pages/Landing/Content/about/About';
import Section from '../../Pages/Landing/Content/course/course';
import Top from '../../widget/Home/Top';
import Service from '../../Pages/Landing/Content/Service/service';
import Team from '../../Pages/Landing/Content/Team/Team';
import Mission from '../../Pages/Landing/Content/mission/mission';
import Footer from '../../Pages/Landing/Content/Footer/Footer';



const Landing = () => {
  const [activeCircle, setActiveCircle] = useState('1');
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleCircleClick = (circleNumber) => {
    setActiveCircle(circleNumber);
  };

  const handleIconClick = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const contentSection = document.querySelector('.content-section');
       
      if (contentSection) {
        const rect = contentSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsContentVisible(true);

        }
      }
  
     
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className='Landing'>
      <div className="Landing-Top">
        <div className="Landing-header">
        <Top />
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
          <div className="three-boxes-container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
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

        </div>

        {/* second section */}
       
        {/* third section */}
        <div className={`content-section ${isContentVisible ? 'fade-in' : ''}`}>
          <h2 className={isContentVisible ? 'fade-in' : ''}>Are You Ready To<br />Transform Your Life?</h2>
          <p className={isContentVisible ? 'fade-in' : ''}>
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
              onClick={() => handleCircleClick('1') } 
            >
              {activeCircle === '1' && (
                <FontAwesomeIcon
                  icon={faCirclePlay }
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
                  icon={faCirclePlay }
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
                  icon={faCirclePlay }
                  className="play-icon"
                  onClick={() => handleIconClick('https://www.youtube.com/watch?v=VIDEO_ID_3')}
                />
              )}
            </div>
          </div>
        </div>
        <section id="courses">
      <Section />
    </section>
    <Service/>
        <section id="about">
      <AboutUs />
    </section>
    <section id="team">
      <Team />
    </section>
    <Mission/>
  <section id="contact">
    <Footer/>
    </section>
    {/*fifth section*/}
     </div>

      {/* Modal for video playback */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default Landing;



