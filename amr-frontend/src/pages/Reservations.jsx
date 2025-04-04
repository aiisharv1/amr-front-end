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

      <section id="reservations" className="py-5 reservation first-section">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Reservations</h2>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
              <div className="card">
                <form onSubmit={handleSubmit} className="form-card">
                  {/* Personal Info */}
                  <fieldset>
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
                  <fieldset>
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
                  <fieldset>
                    <legend>Special Requests</legend>
                    <div className="form-group col-sm-12 flex-row d-flex">
                      <div className="form-group col-sm-6 flex-column d-flex">
                        <p id="car-seat-text">Child Car Seat?<span className="required-symbol">*</span></p>
                        <div id="car-seat-container" className="form-group col-sm-12 flex-row d-flex">
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
                  <fieldset>
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
                  <div className="row justify-content-center">
                    <div className="form-group col-sm-6">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block proceed-btn"
                        disabled={loading}
                      >
                        {loading ? 'Processing...' : 'Reserve'}
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