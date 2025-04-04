import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Reservations() {
  const [searchParams] = useSearchParams();
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mob: '',
    pickUpDate: '',
    pickUpTime: '',
    pickUp: '',
    dropOff: '',
    numberOfPassengers: '',
    vehicleType: '',
    carSeatRequest: '',
    message: '',
  });

  // Animation effect for form elements
  useEffect(() => {
    const animateFormElements = () => {
      const elements = document.querySelectorAll('.animate-in');

      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('show');
        }, 100 * index);
      });
    };

    // Run animation after a short delay
    setTimeout(animateFormElements, 200);
  }, []);

  useEffect(() => {
    const vehicleFromURL = searchParams.get('vehicle');
    if (vehicleFromURL) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: vehicleFromURL,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US');
  };

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString('en-US', options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      // Format date and time for API
      const formattedDate = formatDate(formData.pickUpDate);
      const formattedTime = formatTime(formData.pickUpTime);

      // First API call to customer confirmation endpoint
      const customerResponse = await axios.post(
        'https://api.amr-transportation-test.com/confirm',
        JSON.stringify({
          firstName: formData.fname,
          email: formData.email,
          formattedDate,
          formattedTime,
          dropOffLocation: formData.dropOff,
          pickUpLocation: formData.pickUp,
          numberOfPassengers: formData.numberOfPassengers,
          vehicleType: formData.vehicleType
        }),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (customerResponse.data.status === 'success') {
        // Success animation
        document.querySelector('.card').classList.add('success-animation');

        setResponseMessage('Thank you for your reservation! Please check your email for confirmation.');

        // Second API call to company confirmation endpoint
        await axios.post(
          'https://api.amr-transportation-test.com/company/confirm',
          JSON.stringify({
            firstName: formData.fname,
            lastName: formData.lname,
            email: formData.email,
            phoneNumber: formData.mob,
            formattedDate,
            formattedTime,
            dropOffLocation: formData.dropOff,
            pickUpLocation: formData.pickUp,
            numberOfPassengers: formData.numberOfPassengers,
            vehicleType: formData.vehicleType,
            carSeatRequest: formData.carSeatRequest,
            customMessage: formData.message
          }),
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        // Third API call to square to retain customer data
        await axios.post(
            'https://api.amr-transportation-test.com/customer/create',
            JSON.stringify({
              firstName: formData.fname,
              lastName: formData.lname,
              email: formData.email,
              phoneNumber: formData.mob
            }),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
        );
      } else {
        setResponseMessage('Sorry, there was an error. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <style jsx="true">{`
        /* Enhanced form styling */
        .first-section {
          margin-top: 100px;
        }
        
        .card {
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.5s ease;
          border: none;
        }
        
        .card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }
        
        /* Success animation */
        .success-animation {
          animation: successPulse 1.5s ease;
        }
        
        @keyframes successPulse {
          0% { box-shadow: 0 0 0 rgba(40, 167, 69, 0); }
          50% { box-shadow: 0 0 30px rgba(40, 167, 69, 0.6); }
          100% { box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); }
        }
        
        fieldset {
          margin-bottom: 25px;
          padding: 0 15px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        fieldset:hover {
          background-color: rgba(0, 123, 255, 0.03);
        }
        
        legend {
          font-weight: 600;
          color: #495057;
          font-size: 1.1rem;
          padding: 0 10px;
          margin-bottom: 15px;
        }
        
        .required-symbol {
          color: #dc3545;
          margin-left: 4px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="number"],
        input[type="date"],
        input[type="time"],
        select,
        textarea {
          padding: 10px 15px;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: none;
          font-size: 0.95rem;
        }
        
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #80bdff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          outline: none;
        }
        
        label {
          margin-bottom: 8px;
          font-weight: 500;
          color: #495057;
        }
        
        .proceed-btn {
          border-radius: 50px;
          padding: 10px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
          background-color: #007bff;
          border: none;
          box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
        }
        
        .proceed-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4);
        }
        
        .proceed-btn:active {
          transform: translateY(1px);
        }
        
        .proceed-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        /* Radio button styling */
        #car-seat-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        input[type="radio"] {
          margin-right: 5px;
        }
        
        /* Responsive styling */
        @media (max-width: 768px) {
          .first-section {
            margin-top: 80px;
          }
          
          fieldset {
            padding: 0 10px 10px;
          }
          
          .card {
            margin: 0 10px;
          }
          
          .form-group {
            margin-bottom: 15px;
          }
        }
        
        /* Animation styles */
        .animate-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .animate-in.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Response message styling */
        #responseMessage {
          padding: 15px;
          border-radius: 8px;
          font-weight: 500;
          animation: fadeIn 0.5s ease;
          background-color: #d4edda;
          color: #155724;
          margin-top: 20px !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section id="reservations" className="py-5 reservation first-section">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block animate-in">Reservations</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card">
                <form onSubmit={handleSubmit} className="form-card p-4">
                  {/* Personal Info */}
                  <fieldset className="animate-in">
                    <legend>Personal Information<span className="required-symbol">*</span></legend>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="text"
                          id="lname"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                          placeholder="Last name"
                          required
                        />
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
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="tel"
                          id="mob"
                          name="mob"
                          value={formData.mob}
                          onChange={handleChange}
                          placeholder="Phone number"
                          required
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Pick & Drop */}
                  <fieldset className="animate-in">
                    <legend>Pick & Drop Information<span className="required-symbol">*</span></legend>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label htmlFor="pickUpDate">Pickup Date:</label>
                        <input
                          type="date"
                          id="pick-up-date"
                          name="pickUpDate"
                          value={formData.pickUpDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label htmlFor="pickUpTime">Pickup Time:</label>
                        <input
                          type="time"
                          id="pick-up-time"
                          name="pickUpTime"
                          value={formData.pickUpTime}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="text"
                          id="pick-up"
                          name="pickUp"
                          value={formData.pickUp}
                          onChange={handleChange}
                          placeholder="Pickup Location"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="text"
                          id="drop-off"
                          name="dropOff"
                          value={formData.dropOff}
                          onChange={handleChange}
                          placeholder="Drop off Location"
                          required
                        />
                      </div>
                    </div>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <input
                          type="number"
                          id="number-of-passengers"
                          name="numberOfPassengers"
                          value={formData.numberOfPassengers}
                          onChange={handleChange}
                          placeholder="Number of Passengers"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <label htmlFor="vehicleType" style={{ paddingBottom: 0, margin: 'unset' }}>Vehicle Type</label>
                        <div className="form-group col-sm-12 flex-row d-flex">
                          <select
                            id="vehicle-type"
                            name="vehicleType"
                            value={formData.vehicleType}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                            required
                          >
                            <option value="" disabled>Select vehicle</option>
                            <option value="suv">SUV</option>
                            <option value="sedan">Sedan</option>
                            <option value="limoBus">Limo Bus</option>
                            <option value="stretchLimo">Stretch Limo</option>
                            <option value="charterBus">Charter Bus</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  {/* Special Requests */}
                  <fieldset className="animate-in">
                    <legend>Special Requests</legend>
                    <div className="form-group col-sm-12 flex-row d-flex">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <p id="car-seat-text">Child Car Seat?<span className="required-symbol">*</span></p>
                        <div id="car-seat-container" className="form-group flex-row d-flex">
                          <input
                            type="radio"
                            id="car-seat-request-yes"
                            name="carSeatRequest"
                            value="Yes"
                            checked={formData.carSeatRequest === 'Yes'}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="car-seat-request-yes">Yes</label>
                          <input
                            type="radio"
                            id="car-seat-request-no"
                            name="carSeatRequest"
                            value="No"
                            checked={formData.carSeatRequest === 'No'}
                            onChange={handleChange}
                          />
                          <label htmlFor="car-seat-request-no">No</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  {/* Additional */}
                  <fieldset className="animate-in">
                    <legend>Additional Details</legend>
                    <div className="row justify-content-between text-left">
                      <div className="form-group col-12 flex-column d-flex">
                        <label className="form-control-label px-3 message-text">Type your message</label>
                        <textarea
                          className="form-control"
                          id="message-textbox"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <div className="row justify-content-center animate-in">
                    <div className="form-group col-sm-6">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block proceed-btn"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : 'Reserve'}
                      </button>
                    </div>
                  </div>

                  {/* Response Message */}
                  {responseMessage && (
                    <div id="responseMessage" className="mt-3 text-center">
                      {responseMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Reservations;