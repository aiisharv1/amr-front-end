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
        
        footer {
          background-color: #1e2124;
          padding: 60px 0;
        }
        
        .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .footer-row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        
        .footer-col {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          flex: 0 0 25%;
          max-width: 25%;
        }
        
        .mission-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 25px;
          letter-spacing: 1px;
        }
        
        .mission-text {
          color: #9da9b9;
          line-height: 1.6;
          font-size: 15px;
          font-weight: 400;
        }
        
        .footer-heading {
          font-size: 20px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 25px;
        }
        
        .footer-links-container {
          display: flex;
        }
        
        .footer-links-left {
          margin-right: 50px;
        }
        
        .footer-link {
          color: #9da9b9;
          text-decoration: none;
          display: flex;
          align-items: center;
          margin-bottom: 18px;
          transition: color 0.2s;
          font-weight: 400;
        }
        
        .footer-link:hover {
          color: #DBA800;
        }
        
        .footer-link i {
          font-size: 12px;
          margin-right: 8px;
        }
        
        .business-info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          color: #9da9b9;
        }
        
        .business-info-text {
          margin-left: 15px;
          font-weight: 400;
        }
        
        .business-info-icon {
          font-size: 18px;
          color: #9da9b9;
          width: 20px;
          text-align: center;
        }
        
        .social-links {
          display: flex;
          gap: 25px;
        }
        
        .social-link {
          color: #9da9b9;
          font-size: 22px;
          transition: color 0.2s;
        }
        
        .social-link:hover.facebook {
          color: #0D63F5;
        }
        
        .social-link:hover.twitter {
          color: #1F97E1;
        }
        
        .social-link:hover.instagram {
          color: #F21E98;
        }
        
        .social-link:hover.youtube {
          color: #F40A06;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 992px) {
          .footer-col {
            flex: 0 0 50%;
            max-width: 50%;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-col {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 30px;
          }
          
          .footer-links-container {
            flex-direction: column;
          }
          
          .footer-links-left {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      `}</style>

      {/* Hidden element to test Font Awesome loading */}
      <i className="fas fa-check icon-test"></i>

      <div className="footer-container">
        <div className="footer-row">
          {/* AMR Mission */}
          <div className="footer-col">
            <div className="mission-title">AMR MISSION</div>
            <div className="mission-text">
              One family, one mission, to provide best in class luxury transportation that exceeds expectations. We believe in delivering exceptional service, ensuring safety, and creating memorable experiences for every journey.
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <div className="footer-heading">Links</div>
            <div className="footer-links-container">
              <div className="footer-links-left">
                <Link to="/" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Home
                </Link>
                <Link to="/fleet" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Fleet
                </Link>
                <Link to="/reservations" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Reservations
                </Link>
                <Link to="/rates" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Rates
                </Link>
              </div>
              <div className="footer-links-right">
                <Link to="/team" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Team
                </Link>
                <Link to="/aboutus" className="footer-link">
                  <i className="fas fa-chevron-right"></i>About Us
                </Link>
                <Link to="/contactus" className="footer-link">
                  <i className="fas fa-chevron-right"></i>Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Business Info */}
          <div className="footer-col">
            <div className="footer-heading">Business Info</div>
            <div className="business-info-item">
              <i className="fas fa-map-marker-alt business-info-icon"></i>
              <div className="business-info-text">
                E-Transportation, Springfield, VA, 22153 United States of America
              </div>
            </div>
            <div className="business-info-item">
              <i className="fas fa-envelope business-info-icon"></i>
              <div className="business-info-text">
                info@amrtransportation.com
              </div>
            </div>
            <div className="business-info-item">
              <i className="fas fa-phone-alt business-info-icon"></i>
              <div className="business-info-text">
                +1 (703) 678-8934
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="footer-col">
            <div className="footer-heading">Follow Us</div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;