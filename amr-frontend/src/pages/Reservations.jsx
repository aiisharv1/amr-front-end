import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Reservations() {
    const [searchParams] = useSearchParams();

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mob: '',
        pickUpDate: '',
        pickUpTime: '',
        pickUp: '',
        dropOff: '',
        carSeatRequest: '',
        preferredDrink: '',
        message: '',
        subscribe: false,
        preferredVehicle: '', // NEW
    });

    useEffect(() => {
        const vehicleFromURL = searchParams.get('vehicle');
        if (vehicleFromURL) {
            setFormData((prev) => ({
                ...prev,
                preferredVehicle: vehicleFromURL,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation submitted:', formData);
        alert('Reservation submitted! Check the console for form data.');
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
                                                    name="mob"
                                                    value={formData.mob}
                                                    onChange={handleChange}
                                                    placeholder="Phone number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* Vehicle Info (Autofill) */}
                                    <fieldset>
                                        <legend>Selected Vehicle</legend>
                                        <div className="row justify-content-between text-left">
                                            <div className="form-group col-12 flex-column d-flex">
                                                <input
                                                    type="text"
                                                    name="preferredVehicle"
                                                    value={formData.preferredVehicle}
                                                    readOnly
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
                                                    name="dropOff"
                                                    value={formData.dropOff}
                                                    onChange={handleChange}
                                                    placeholder="Drop off Location"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* Special Requests */}
                                    <fieldset>
                                        <legend>Special Requests</legend>
                                        <div className="row justify-content-between text-left">
                                            <div className="form-group col-sm-6 flex-column d-flex">
                                                <p>Child Car Seat?<span className="required-symbol">*</span></p>
                                                <div className="form-group col-sm-12 flex-row d-flex">
                                                    <input
                                                        type="radio"
                                                        name="carSeatRequest"
                                                        id="car-seat-request-yes"
                                                        value="yes"
                                                        checked={formData.carSeatRequest === 'yes'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="car-seat-request-yes">Yes</label>
                                                    <input
                                                        type="radio"
                                                        name="carSeatRequest"
                                                        id="car-seat-request-no"
                                                        value="no"
                                                        checked={formData.carSeatRequest === 'no'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="car-seat-request-no">No</label>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-6 flex-column d-flex">
                                                <label htmlFor="preferredDrink">Preferred Drink?</label>
                                                <select
                                                    name="preferredDrink"
                                                    value={formData.preferredDrink}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>Select your option</option>
                                                    <option value="coke">Coca-Cola</option>
                                                    <option value="pepsi">Pepsi</option>
                                                    <option value="fanta">Fanta</option>
                                                    <option value="sprite">Sprite</option>
                                                    <option value="water">Deer Park Water</option>
                                                </select>
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
                                                    name="message"
                                                    rows="3"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="form-group col-12 flex-row d-flex mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="subscribe"
                                                    checked={formData.subscribe}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="subscribe" className="ms-2">Subscribe to our newsletter</label>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* Submit */}
                                    <div className="row justify-content-center">
                                        <div className="form-group col-sm-6">
                                            <button type="submit" className="btn btn-primary btn-block proceed-btn">
                                                Reserve
                                            </button>
                                        </div>
                                    </div>
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
