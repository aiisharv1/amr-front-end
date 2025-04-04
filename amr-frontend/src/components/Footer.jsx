import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  useEffect(() => {
    // Check if Font Awesome is loaded
    const isFontAwesomeLoaded = () => {
      return (
        typeof window !== 'undefined' &&
        window.getComputedStyle(document.querySelector('.icon-test')).fontFamily.includes('Font Awesome')
      );
    };

    // Add Font Awesome if not loaded
    if (!isFontAwesomeLoaded()) {
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(fontAwesomeLink);
    }
  }, []);

  return (
      <footer className="bg-dark py-5">
        <style jsx="true">{`
         /* Hidden element to test Font Awesome loading */
         .icon-test {
           position: absolute;
           opacity: 0;
           pointer-events: none;
           }
        `}</style>
        {/* Hidden element to test Font Awesome loading */}
        <i className="fas fa-check icon-test"></i>
        <div className="container">
          <div className="row text-white g-4">
            <div className="col-md-6 col-lg-3">
              <Link to="/" className="text-uppercase text-decoration-none brand text-white">AMR Mission</Link>
              <p className="text-white text-muted mt-3">One family, one mission, to provide best in class luxury
                transportation
                that exceeds expectations. We believe in delivering exceptional service, ensuring safety, and creating
                memorable experiences for every journey.</p>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light">Links</h5>
              <ul className="list-unstyled ul-links">
                <li className="my-3">
                  <Link className="text-white text-decoration-none text-muted" to={"/"}>
                    <i className="fas fa-chevron-right me-1"></i>Home
                  </Link>
                </li>
                <li className="my-3">
                  <Link to={"/fleet"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>Fleet
                  </Link>
                </li>
                <li className="my-3">
                  <Link to={"/reservations"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>Reservations
                  </Link>
                </li>
                <li className="my-3">
                  <Link to={"/rates"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>Rates
                  </Link>
                </li>
              </ul>
              <ul className="list-unstyled ul-links ul-links2">
                <li className="my-3">
                  <Link to={"/team"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>Team
                  </Link>
                </li>
                <li className="my-3">
                  <Link to={"/aboutus"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>About Us
                  </Link>
                </li>
                <li className="my-3">
                  <Link to={"/contactus"} className="text-white text-decoration-none text-muted">
                    <i className="fas fa-chevron-right me-1"></i>Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Business Info</h5>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                        <span className="me-3">
                            <Link to="https://maps.app.goo.gl/H7g2X7NjfpCJ31Vn7" target="_blank"
                               className="text-white text-decoration-none text-muted">
                                <i className="fas fa-map-marked-alt"></i>
                            </Link>
                        </span>
                <span className="fw-light">
                            E-Transportation, Springfield, VA, 22153 United States of America
                        </span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                        <span className="me-3">
                            <Link to="mailto:info@amrtransportation.com"
                               className="text-white text-decoration-none text-muted">
                                <i className="fas fa-envelope"></i>
                            </Link>
                        </span>
                <span className="fw-light">
                            info@amrtransportation.com
                        </span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                        <span className="me-3">
                            <Link to="tel:703-678-8934" className="text-white text-decoration-none text-muted">
                                <i className="fas fa-phone-alt"></i>
                            </Link>
                        </span>
                <span className="fw-light">
                            +1 (703) 678-8934
                        </span>
              </div>
            </div>

            <div className="social-media col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Follow Us</h5>
              <div>
                <ul className="list-unstyled d-flex">
                  <li>
                    <Link to="https://www.facebook.com" target="_blank"
                       className="text-white text-decoration-none text-muted fs-4 me-4">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.twitter.com" target="_blank"
                       className="text-white text-decoration-none text-muted fs-4 me-4">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com" target="_blank"
                       className="text-white text-decoration-none text-muted fs-4 me-4">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com" target="_blank"
                       className="text-white text-decoration-none text-muted fs-4 me-4">
                      <i className="fab fa-youtube"></i>
                    </Link>
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