import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import Reservations from './pages/Reservations';
import Rates from './pages/Rates';
import Fleet from './pages/Fleet';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/rates" element={<Rates />} />
                <Route path="/fleet" element={<Fleet />} />
                {/* Static XML file can still be accessed via /public/data/vehicles.xml */}
            </Routes>
        </Router>
    );
}

export default App;
