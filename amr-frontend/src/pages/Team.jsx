import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Team() {
  return (
    <>
      <Navbar />

      <main className="team-section">
        <section id="top-section" className="py-5 first-section team-sec">
          <div className="form-group col-sm-12 flex-row d-flex scroll-bottom">
            <a className="text-decoration-none text-muted" href="#bottom-section">Scroll to Bottom</a>
          </div>
          <div className="container">
            <div className="title text-center py-5">
              <h2 className="position-relative d-inline-block">Our Team</h2>
            </div>
            <div className="row gy-lg-5 align-items-end">
              <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                <h3 className="team-names">HIDAYAT ULLAH</h3>
                <p className="lead text-muted">Founder</p>
                <p>A father to 4 kids, who migrated to US in 2005.</p>
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
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
              <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                <img
                  src="/images/man-3803551_1280.jpg"
                  alt="Picture of CFO of the company AMR"
                  className="img-fluid team-img"
                />
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
                <div className="col-lg-6 order-lg-1 text-center text-lg-end">
                  <h3 className="team-names">MUHAMMAD AWAIS</h3>
                  <p className="lead text-muted">Chief Financial Officer</p>
                  <p>A father to 3 kids, and one on the way. Also, a professor at GMU.</p>
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
              <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                <h3 className="team-names">SANA HIDAYAT</h3>
                <p className="lead text-muted">Chief Technology Officer</p>
                <p>A mother to 1 daughter, and one on the way. Married to amazing husband in London.</p>
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
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
              <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                <img
                  src="/images/adult-1867471_1280.jpg"
                  alt="Picture of the Marketing Manager of the company AMR"
                  className="img-fluid team-img"
                />
              </div>
              <div className="col-lg-6 order-lg-0 text-end">
                <div className="col-lg-6 order-lg-1 text-center text-lg-end">
                  <h3 className="team-names">MUHAMMAD ALI</h3>
                  <p className="lead text-muted">Marketing Manager</p>
                  <p>GMU Alumni, pursuing Neurology at GW University.</p>
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
