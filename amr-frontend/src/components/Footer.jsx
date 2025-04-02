import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark py-5 mt-5 footer-light">
        <div className="container">
                <div className="row text-white g-4">
                    <div className="col-md-6 col-lg-3">
                        <Link className="text-uppercase text-decoration-none brand text-white" to="/">
                            AMR Mission
                        </Link>
                        <p className="text-white text-muted mt-3">
                            One family, one mission, to provide best in class luxury transportation that exceeds expectations. We
                            believe in delivering exceptional service, ensuring safety, and creating memorable experiences for every
                            journey.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light">Links</h5>
                        <ul className="list-unstyled ul-links">
                            <li className="my-3">
                                <Link to="/" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Home
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/fleet" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Fleet
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/reservations" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Reservations
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/rates" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Rates
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/team" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Team
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/aboutus" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>About Us
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/contactus" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i>Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Business Info</h5>
                        <p className="text-muted mb-1">E-Transportation, Springfield, VA, 22153</p>
                        <p className="text-muted mb-1">Email: info@amrtransportation.com</p>
                        <p className="text-muted mb-1">Phone: +1 (703) 678-8934</p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Follow Us</h5>
                        <div>
                            <ul className="list-unstyled d-flex">
                                <li>
                                    <a href="https://www.facebook.com/marketplace" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
