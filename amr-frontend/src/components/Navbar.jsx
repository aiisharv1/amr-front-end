import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  // Weather temperature state
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const dialogRef = useRef(null);

  // Load temperature from localStorage on component mount
  useEffect(() => {
    const storedTemp = localStorage.getItem('temp');
    const storedCity = localStorage.getItem('city');

    if (storedTemp && storedTemp !== '' && storedCity && storedCity !== '') {
      setTemperature(storedTemp);
      setCity(storedCity);
    }
  }, []);

  // Handle dialog close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target) && dialogOpen) {
        setDialogOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dialogOpen]);

  // Weather API call
  const fetchWeatherData = async () => {
    if (!zipCode.trim()) {
      return;
    }

    try {
      const response = await axios.get(
        `https://api.amr-transportation-test.com/weather/api/${zipCode}`
      );

      const parsedData = JSON.parse(response.data);
      const temp = Math.trunc(parsedData.list[0].main.temp);
      const cityName = parsedData.city.name;

      // Save to localStorage and update state
      localStorage.setItem('temp', temp.toString());
      localStorage.setItem('city', cityName);

      setTemperature(temp.toString());
      setCity(cityName);
      setDialogOpen(false);
    } catch (error) {
      alert('Error: Invalid Zipcode Entered!');
    }
  };

  return (
    <>
      <style jsx="true">{`
        @media (max-width: 991px) {
          .temperature-container {
            display: none !important;
          }
        }
      `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top shadow-sm">
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="/images/AMRLogo.png" alt="company-logo" width="130" />
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Nav Menu */}
          <div className="collapse navbar-collapse justify-content-center" id="navMenu">
            <ul className="navbar-nav text-center">
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/">Home</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/fleet">Fleet</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/reservations">Reservations</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/rates">Rates</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/team">Team</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/aboutus">About Us</Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link className="nav-link text-uppercase text-dark" to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Weather Temperature Display */}
          <div
            className="order-lg-1 navbar-nav temperature-container"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0 10px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}
            onClick={() => setDialogOpen(true)}
            title="Click to update weather location"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <p id="displayResult" className="nav-item temperature-value" style={{ fontWeight: '500' }}>
              {temperature}
            </p>
            <span style={{ marginRight: '5px' }}>&deg;F</span>
            <i
              id="openDialog"
              className="nav-item fas fa-solid fa-pen edit-icon"
              style={{
                color: '#DBA800', // Gold color
                marginLeft: '5px',
                fontSize: '14px',
                textShadow: '0 0 1px rgba(0,0,0,0.2)'
              }}
            ></i>
            <p id="displayCity" className="temperature-value temp-city" style={{ fontSize: '14px' }}>
              {city}
            </p>
          </div>
        </div>
      </nav>

      {/* Zip Code Dialog */}
      {dialogOpen && (
        <div className="dialog-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1050,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div
            ref={dialogRef}
            className="dialog-box"
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '5px',
              width: '300px',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            {/* Close (X) button */}
            <button
              onClick={() => setDialogOpen(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '0',
                lineHeight: '1'
              }}
              aria-label="Close"
            >
              &times;
            </button>

            <h4 style={{ marginBottom: '15px' }}>Search By Zip Code</h4>

            <input
              type="text"
              id="userInput"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  fetchWeatherData();
                }
              }}
              placeholder="Enter your Zip Code"
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '15px',
                borderRadius: '4px',
                border: '1px solid #ced4da'
              }}
              autoFocus
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <button
                onClick={() => setDialogOpen(false)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #ced4da',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={fetchWeatherData}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#DBA802',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;