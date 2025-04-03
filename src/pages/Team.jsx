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
                        <div className="row gy-lg-5 align-items-center">
                            <div className="col-lg-6 text-center">
                                <div className="text-center">
                                    <img
                                        src="/images/entrepreneur-593358_1280.jpg"
                                        alt="Founder Hidayat Ullah"
                                        className="img-fluid team-img rounded-team-img"
                                    />
                                </div>
                                <h3 className="team-names mt-3">HIDAYAT ULLAH</h3>
                                <p className="lead text-muted">Founder</p>
                                <p>A father to 4 kids, who migrated to US in 2005.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="hrLineDiv">
                    <hr className="hrLine" />
                </div>

                <section className="py-5 team-sec">
                    <div className="container">
                        <div className="row gy-lg-5 align-items-center">
                            <div className="col-lg-6 text-center">
                                <div className="text-center">
                                    <img
                                        src="/images/man-3803551_1280.jpg"
                                        alt="CFO Muhammad Awais"
                                        className="img-fluid team-img rounded-team-img"
                                    />
                                </div>
                                <h3 className="team-names mt-3">MUHAMMAD AWAIS</h3>
                                <p className="lead text-muted">Chief Financial Officer</p>
                                <p>A father to 3 kids, and one on the way. Also, a professor at GMU.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="hrLineDiv">
                    <hr className="hrLine" />
                </div>

                <section className="py-5 team-sec">
                    <div className="container">
                        <div className="row gy-lg-5 align-items-center">
                            <div className="col-lg-6 text-center">
                                <div className="text-center">
                                    <img
                                        src="/images/woman-3116587_1280.jpg"
                                        alt="CTO Sana Hidayat"
                                        className="img-fluid team-img rounded-team-img"
                                    />
                                </div>
                                <h3 className="team-names mt-3">SANA HIDAYAT</h3>
                                <p className="lead text-muted">Chief Technology Officer</p>
                                <p>A mother to 1 daughter, and one on the way. Married to amazing husband in London.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="hrLineDiv">
                    <hr className="hrLine" />
                </div>

                <section id="bottom-section" className="py-5 team-sec">
                    <div className="container">
                        <div className="row gy-lg-5 align-items-center">
                            <div className="col-lg-6 text-center">
                                <div className="text-center">
                                    <img
                                        src="/images/adult-1867471_1280.jpg"
                                        alt="Marketing Manager Muhammad Ali"
                                        className="img-fluid team-img rounded-team-img"
                                    />
                                </div>
                                <h3 className="team-names mt-3">MUHAMMAD ALI</h3>
                                <p className="lead text-muted">Marketing Manager</p>
                                <p>GMU Alumni, pursuing Neurology at GW University.</p>
                            </div>
                        </div>

                        <div className="form-group col-sm-12 flex-row d-flex scroll-top mt-3">
                            <a className="text-decoration-none text-muted" href="#top-section">Scroll to Top</a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default Team;
