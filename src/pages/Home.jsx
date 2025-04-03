import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />

            {/* ✅ Fullscreen Hero Carousel */}
            <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">

                {/* ✅ Carousel Indicators */}
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* ✅ Carousel Inner */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/images/limo1.jpg"
                            className="d-block w-100 hero-img"
                            alt="Limo 1"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">best cars</h2>
                            <h1 className="fw-bold">new models</h1>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/limo2.jpg"
                            className="d-block w-100 hero-img"
                            alt="Limo 2"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">best prices</h2>
                            <h1 className="fw-bold">affordable experiences</h1>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="/images/limo3.jpg"
                            className="d-block w-100 hero-img"
                            alt="Limo 3"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="text-uppercase">unique experience</h2>
                            <h1 className="fw-bold">for parties & weddings</h1>
                        </div>
                    </div>
                </div>

                {/* ✅ Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Footer />
        </>
    );
}

export default Home;



