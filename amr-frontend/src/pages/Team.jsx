import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Team() {
  // Add animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };

    // Run on initial load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <style jsx="true">{`
        /* Team page styles */
        .first-section {
          margin-top: 100px;
        }
        
        .team-img {
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          max-width: 100%;
          height: auto;
        }
        
        .team-img:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .team-names {
          font-weight: 600;
          color: #343a40;
          position: relative;
          display: inline-block;
        }
        
        .team-names::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #007bff;
          transition: width 0.3s ease;
        }
        
        .text-lg-end .team-names::after {
          left: auto;
          right: 0;
        }
        
        .team-sec:hover .team-names::after {
          width: 100%;
        }
        
        .hrLine {
          height: 2px;
          background-image: linear-gradient(to right, transparent, #007bff, transparent);
          border: none;
          margin: 2rem auto;
          width: 80%;
          opacity: 0.5;
        }
        
        .scroll-top, .scroll-bottom {
          justify-content: center;
          margin: 20px 0;
        }
        
        .scroll-top a, .scroll-bottom a {
          padding: 8px 15px;
          background-color: #f8f9fa;
          border-radius: 20px;
          color: #6c757d;
          transition: all 0.3s ease;
          font-weight: 500;
          display: flex;
          align-items: center;
        }
        
        .scroll-top a:hover, .scroll-bottom a:hover {
          background-color: #007bff;
          color: white !important;
          text-decoration: none;
        }
        
        .scroll-bottom a:after {
          content: "\\f078";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          margin-left: 8px;
        }
        
        .scroll-top a:before {
          content: "\\f077";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          margin-right: 8px;
        }
        
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-left {
          transform: translateX(-30px);
        }
        
        .animate-right {
          transform: translateX(30px);
        }
        
        .animate-left.animate, .animate-right.animate {
          transform: translateX(0);
        }
        
        .delay-1 {
          transition-delay: 0.2s;
        }
        
        .delay-2 {
          transition-delay: 0.4s;
        }
        
        .delay-3 {
          transition-delay: 0.6s;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 992px) {
          .team-sec {
            text-align: center !important;
          }
          
          .text-lg-start, .text-lg-end {
            text-align: center !important;
          }
          
          .team-names::after {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%);
          }
          
          .team-sec:hover .team-names::after {
            width: 80%;
          }
          
          .order-lg-0, .order-lg-1 {
            order: unset !important;
          }
          
          .first-section {
            margin-top: 80px;
          }
          
          .row.gy-lg-5 {
            row-gap: 2rem !important;
          }
        }
      `}</style>

      <main className="team-section">
        <section id="top-section" className="py-5 first-section team-sec">
          <div className="form-group col-sm-12 flex-row d-flex scroll-bottom">
            <a className="text-decoration-none text-muted" href="#bottom-section">Scroll to Bottom</a>
          </div>
          <div className="container">
            <div className="title text-center py-5 animate-on-scroll">
              <h2 className="position-relative d-inline-block">Our Team</h2>
            </div>
            <div className="row gy-lg-5 align-items-end">
              <div className="col-lg-6 order-lg-1 text-center text-lg-start animate-on-scroll animate-left">
                <h3 className="team-names">HIDAYAT ULLAH</h3>
                <p className="lead text-muted delay-1">Founder</p>
                <p className="delay-2">A father to 4 kids, who migrated to US in 2005.</p>
              </div>
              <div className="col-lg-6 order-lg-0 text-end animate-on-scroll animate-right">
                <img
                  src="/images/entrepreneur-593358_1280.jpg"
                  alt="A picture of the company founder Hidayat Ullah"
                  className="img-fluid team-img"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="hrLineDiv">
          <hr className="hrLine" />
        </div>

        <section className="py-5 team-sec">
          <div className="container">
            <div className="row gy-lg-5 align-items-end">
              <div className="col-lg-6 order-lg-1 text-center text-lg-start animate-on-scroll animate-left">
                <img
                  src="/images/man-3803551_1280.jpg"
                  alt="Picture of CFO of the company AMR"
                  className="img-fluid team-img"
                />
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
                <div className="col-lg-6 order-lg-1 text-center text-lg-end animate-on-scroll animate-right">
                  <h3 className="team-names">MUHAMMAD AWAIS</h3>
                  <p className="lead text-muted delay-1">Chief Financial Officer</p>
                  <p className="delay-2">A father to 3 kids, and one on the way. Also, a professor at GMU.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hrLineDiv">
          <hr className="hrLine" />
        </div>

        <section className="py-5 team-sec">
          <div className="container">
            <div className="row gy-lg-5 align-items-end">
              <div className="col-lg-6 order-lg-1 text-center text-lg-start animate-on-scroll animate-left">
                <h3 className="team-names">SANA HIDAYAT</h3>
                <p className="lead text-muted delay-1">Chief Technology Officer</p>
                <p className="delay-2">A mother to 1 daughter, and one on the way. Married to amazing husband in London.</p>
              </div>
              <div className="col-lg-6 order-lg-0 text-end animate-on-scroll animate-right">
                <img
                  src="/images/woman-3116587_1280.jpg"
                  alt="Picture of CTO of the company AMR"
                  className="img-fluid team-img"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="hrLineDiv">
          <hr className="hrLine" />
        </div>

        <section id="bottom-section" className="py-5 team-sec">
          <div className="container">
            <div className="row gy-lg-5 align-items-end">
              <div className="col-lg-6 order-lg-1 text-center text-lg-start animate-on-scroll animate-left">
                <img
                  src="/images/adult-1867471_1280.jpg"
                  alt="Picture of the Marketing Manager of the company AMR"
                  className="img-fluid team-img"
                />
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
                <div className="col-lg-6 order-lg-1 text-center text-lg-end animate-on-scroll animate-right">
                  <h3 className="team-names">MUHAMMAD ALI</h3>
                  <p className="lead text-muted delay-1">Marketing Manager</p>
                  <p className="delay-2">GMU Alumni, pursuing Neurology at GW University.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group col-sm-12 flex-row d-flex scroll-top mt-3">
            <a className="text-decoration-none text-muted" href="#top-section">Scroll to Top</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Team;