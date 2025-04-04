import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
  return (
      <>
        <head>
          <title>AMR - About Us</title>
        </head>
        <Navbar/>

        <main className="about-page">
          <section id="about-1" className="py-5 first-section">
            <div className="container">
              <div className="row gy-lg-5 align-items-center">
                <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                  <div className="title pt-3 pb-5">
                    <h2 className="position-relative d-inline-block ms-4">About Us</h2>
                  </div>
                  <p className="lead text-muted">
                    An idea that started within the family, to a reality that has now reached many.
                  </p>
                </div>
                <div className="col-lg-6 order-lg-0">
                  <img
                      src="/images/team-spirit-2447163_1280.jpg"
                      alt="Team holding each others arms."
                      className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about-2" className="py-5">
            <div className="container">
              <div className="row gy-lg-5 align-items-center">
                <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49766.91123156809!2d-77.17671905!3d38.77673095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64de885e53a9d%3A0x67e76f2416faa504!2sSpringfield%2C%20VA!5e0!3m2!1sen!2sus!4v1726326974623!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Springfield Map"
                  ></iframe>
                </div>
                <div className="col-lg-6 order-lg-0">
                  <p className="lead text-muted">This is where it all started!</p>
                  <p>AMR was founded in Springfield, VA, the home to our idea and success.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer/>
      </>
  );
}

export default AboutUs;
