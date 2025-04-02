import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mob: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Message submitted! Check console for form data.');
    };

    return (
        <>
            <Navbar />

            <main className="contact-form" style={{ marginTop: '100px' }}>
                <div className="container-fluid px-1 py-5 mx-auto">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                            <div className="card">
                                <h2 className="text-center mb-4 title legend-font-change">Say Hello!</h2>

                                <form className="form-card" onSubmit={handleSubmit}>
                                    {/* Personal Info */}
                                    <fieldset>
                                        <legend className="legend-font-change">Personal Information</legend>
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
                                                />
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
                            name="message"
                            rows="3"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* Submit Button */}
                                    <div className="row justify-content-center">
                                        <div className="form-group col-sm-6">
                                            <button type="submit" className="btn btn-primary btn-block proceed-btn">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>

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
