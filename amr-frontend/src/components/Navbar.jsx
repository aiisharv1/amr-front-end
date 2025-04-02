import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
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
            </div>
        </nav>
    );
}

export default Navbar;
