import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Drive from './Drive';
import Offers from './Offers';
import Select from './Select';
import Gallery from './Gallery';
import Support from './Support';
import About from './About';
import BookCab from './BookCab';
import SearchCab from './SearchCab';
import RequestCab from './RequestCab';
import SignUp from './SignUp';
import MiniCarSelection from './MiniCarSelection';
import LuxuryCarSelection from './LuxuryCarSelection';
import SuvCarSelection from './SuvCarSelection';
import CurrentOffer from './CurrentOffer';
function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/select" element={<Select />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/booknow" element={<BookCab />} />
          <Route path="/searchcab" element={<SearchCab />} />
          <Route path="/requestcab" element={<RequestCab />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/mini-car-selection" element={<MiniCarSelection/>} />
          <Route path="/luxury-car-selection" element={<LuxuryCarSelection/>} />
          <Route path="/suv-car-selection" element={<SuvCarSelection/>} />
          <Route path="/current-offer" element={<CurrentOffer/>} />
      
        </Routes>

      </div>
    </Router>
  );
}


export default App;
