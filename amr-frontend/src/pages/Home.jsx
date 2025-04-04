import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
	return (
		<>
			<Navbar />

			{/* ✅ Fullscreen Hero Carousel */}
			<div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
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
			</div>

			<Footer />
		</>
	);
}

export default Home;


