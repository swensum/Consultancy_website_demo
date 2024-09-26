import { useState, useEffect} from 'react';
import './landing.scss';
import Navbar from '../../widget/navbar/NavBar';
import six from '/images/six.png';
import student from '/images/student.png';
import photo1 from '/images/photo1.jpg';
import success from '/images/success.png';
import AboutUs from '../../Pages/Landing/Content/about/About';
import Section from '../../Pages/Landing/Content/course/course';
import Service from '../../Pages/Landing/Content/Service/service';
import Team from '../../Pages/Landing/Content/Team/Team';
import Mission from '../../Pages/Landing/Content/mission/mission';
import Footer from '../../Pages/Landing/Content/Footer/Footer';
import Testimonial from '../../Pages/Landing/Content/Testimonial/Testimonial';
import Support from '../../Pages/Landing/Content/Support/Support';
import UpComming from '../../Pages/Landing/Content/Upcomming/Upcomming';




const Landing = () => {
   const [isContentVisible, setIsContentVisible] = useState(false);


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
          <Navbar />
          <div className="header-First">
          <div className="header-content">
            <div className="hbox">
              <h1>Welcome To Felix Eastern Educational <br /> Consultancy</h1>
        </div>
              <p>Study in UK, USA, CANADA and<br/> AUSTRALIA</p>
             
          
          </div>
          <div className="three-boxes-container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
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
            <div className="circle1">  </div>
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
    <UpComming/>
    <Testimonial/>
    <Mission/>
    
    <Support/>
  <section id="contact">
    <Footer/>
    </section>
    {/*fifth section*/}
     </div>

    </div>
  );
};

export default Landing;



