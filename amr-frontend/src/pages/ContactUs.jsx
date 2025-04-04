import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
  // Form data state
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mob: '',
    message: ''
  });

  // Form states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Weather temperature state
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  // Refs
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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Form validation functions
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = 'First name is required';
    }

    if (!formData.lname.trim()) {
      newErrors.lname = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.mob.trim() && !isValidPhone(formData.mob.trim())) {
      newErrors.mob = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.amr-transportation-test.com/contact/submit',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status === 'success') {
        setSuccess(true);
      } else {
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
      <Navbar />

      {/* Weather Temperature Display */}
      <div className="order-lg-1 navbar-nav temperature-container" style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <p id="displayResult" className="nav-item temperature-value">{temperature}</p>
        <span>&deg;F <i
          id="openDialog"
          className="nav-item fas fa-solid fa-pen edit-icon"
          onClick={() => setDialogOpen(true)}
        ></i></span>
        <p id="displayCity" className="temperature-value temp-city">{city}</p>
      </div>

      {/* Zip Code Dialog */}
      {dialogOpen && (
        <div className="dialog-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
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
              width: '300px'
            }}
          >
            <h4>Search By Zip Code</h4>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter your Zip Code"
              style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => setDialogOpen(false)}
                style={{ padding: '5px 10px' }}
              >
                Cancel
              </button>
              <button
                onClick={fetchWeatherData}
                style={{ padding: '5px 10px' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="contact-form" style={{ marginTop: '100px' }}>
        <div className="container-fluid px-1 py-5 mx-auto">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card">
                <h2 className="text-center mb-4 title legend-font-change">Say Hello!</h2>

                {success ? (
                  <div className="success-message text-center">
                    <i className="fas fa-check-circle" style={{ color: 'green', fontSize: '28px' }}></i>
                    <h3 className="mt-4">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                ) : (
                  <form className="form-card" onSubmit={handleSubmit}>
                    {/* Personal Info */}
                    <fieldset>
                      <legend className="legend-font-change">Personal Information</legend>
                      <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleChange}
                            placeholder="First name"
                            style={{ borderColor: errors.fname ? 'red' : '' }}
                          />
                          {errors.fname && (
                            <div className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                              {errors.fname}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                          <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Last name"
                            style={{ borderColor: errors.lname ? 'red' : '' }}
                          />
                          {errors.lname && (
                            <div className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                              {errors.lname}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            style={{ borderColor: errors.email ? 'red' : '' }}
                          />
                          {errors.email && (
                            <div className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                          <input
                            type="tel"
                            id="mob"
                            name="mob"
                            value={formData.mob}
                            onChange={handleChange}
                            placeholder="Phone number"
                            style={{ borderColor: errors.mob ? 'red' : '' }}
                          />
                          {errors.mob && (
                            <div className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                              {errors.mob}
                            </div>
                          )}
                        </div>
                      </div>
                    </fieldset>

                    {/* Message */}
                    <fieldset>
                      <legend className="legend-font-change">Message</legend>
                      <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex">
                          <textarea
                            className="form-control"
                            id="message-textbox"
                            name="message"
                            rows="3"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ borderColor: errors.message ? 'red' : '' }}
                          ></textarea>
                          {errors.message && (
                            <div className="error-message" style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
                              {errors.message}
                            </div>
                          )}
                        </div>
                      </div>
                    </fieldset>

                    {/* Submit Button */}
                    <div className="row justify-content-center">
                      <div className="form-group col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block proceed-btn"
                          disabled={loading}
                        >
                          {loading ? 'Sending...' : 'Submit'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactUs;