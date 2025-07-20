import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AboutUs from '../Pages/Landing/Content/about/About'; 
import Section from '../Pages/Landing/Content/course/course'; 
import Landing from '../Pages/Landing/Landing'; 

const AppRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/courses" element={<Section />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);
};

export default AppRoutes;