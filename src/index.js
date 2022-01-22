import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import HomePage from './components/homePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurServices from './components/ourServices/OurServices';
import Calendar from './components/Calendar.js/Calendar';
import InfoDesktop from './components/Add-Info/Desktop/InfoDesktop';
import InfoMobileAddInformation from './components/Add-Info/Mobile/InfoMobileAddInformation';
import InfoMobileReview from './components/Add-Info/Mobile/InfoMobileReview';
import CompleteBooking from './components/Add-Info/CompleteBooking';
import Directions from './components/Directions.js';
import App from './App';
import NotFound from './components/NotFound/NotFound';

ReactDOM.render(
  <Router>
  <Navbar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/book" element={<Calendar />} />

      <Route path="/information" element={<InfoDesktop />} /> 
      
      {/* information component splitted into two components for mobile view */}
      <Route path="/info-review" element={<InfoMobileReview />} />
      <Route path="/info" element={<InfoMobileAddInformation />} />
        
      <Route path="/finish" element={<CompleteBooking />} />
      <Route path="/directions" element={<Directions />} />
      
       <Route path="*" element={ <NotFound />}/> 
    </Routes>

    <Footer />
  </Router>
    , 
  document.getElementById('root')
);


