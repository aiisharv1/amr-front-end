import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
	// Add animation effects when the component mounts
	useEffect(() => {
		// Animate hero text elements when page loads
		const animateHeroText = () => {
			const textElements = document.querySelectorAll('.hero-text-animate');
			textElements.forEach((element, index) => {
				setTimeout(() => {
					element.classList.add('show');
				}, 300 * index);
			});
		};

		// Start animations after a short delay
		setTimeout(animateHeroText, 500);
	}, []);

	return (
		<>
			<head>
				<title>AMR - HOME</title>
			</head>
			<Navbar />

			<style jsx="true">{`
        /* Text carousel styles */
        .carousel-section {
          height: 100vh;
          background-color: #1e2124;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .carousel-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/limo1.jpg');
          background-size: cover;
          background-position: center;
          z-index: 1;
        }
        
        .carousel-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
        }
        
        .carousel-text-container {
          text-align: left;
          margin-left: 50px;
        }
        
        .carousel-subheading {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 10px;
          text-transform: capitalize;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .carousel-heading {
          font-size: 4rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.2s;
        }
        
        .hero-text-animate.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .carousel-buttons {
          display: flex;
          gap: 15px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
          transition-delay: 0.4s;
        }
        
        .carousel-btn {
          padding: 12px 30px;
          background-color: #DBA800;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .carousel-btn:hover {
          background-color: #c29600;
          transform: translateY(-3px);
        }
        
        .carousel-btn.outline {
          background-color: transparent;
          border: 2px solid white;
        }
        
        .carousel-btn.outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .carousel-subheading {
            font-size: 2rem;
          }
          
          .carousel-heading {
            font-size: 3rem;
          }
          
          .carousel-text-container {
            margin-left: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .carousel-subheading {
            font-size: 1.8rem;
          }
          
          .carousel-heading {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          
          .carousel-text-container {
            margin-left: 20px;
          }
          
          .carousel-btn {
            padding: 10px 20px;
          }
        }
        
        @media (max-width: 576px) {
          .carousel-subheading {
            font-size: 1.5rem;
          }
          
          .carousel-heading {
            font-size: 2rem;
          }
          
          .carousel-text-container {
            margin-left: 10px;
            padding: 0 10px;
          }
          
          .carousel-buttons {
            flex-direction: column;
            gap: 10px;
            width: 200px;
          }
        }
      `}</style>

			{/* Text Carousel Section */}
			<header id="header" className="carousel-section carousel slide" data-bs-ride="carousel" data-bs-interval="500">
				<div className="carousel-background"></div>
				<div className="carousel-container h-100 d-flex align-items-center carousel-inner">
					<div className="carousel-text-container carousel-item active">
						<h2 className="carousel-subheading hero-text-animate">best cars</h2>
						<h1 className="carousel-heading hero-text-animate">new models</h1>
						<div className="carousel-buttons hero-text-animate">
							<Link to="/fleet" className="carousel-btn">Explore Fleet</Link>
							<Link to="/reservations" className="carousel-btn outline">Book Now</Link>
						</div>
					</div>

					<div className="carousel-text-container carousel-item">
						<h2 className="carousel-subheading hero-text-animate">best prices</h2>
						<h1 className="carousel-heading hero-text-animate">affordable experiences</h1>
						<div className="carousel-buttons hero-text-animate">
							<Link to="/rates" className="carousel-btn">See Rates</Link>
							<Link to="/reservations" className="carousel-btn outline">Book Now</Link>
						</div>
					</div>

					<div className="carousel-text-container carousel-item">
						<h2 className="carousel-subheading hero-text-animate">unique experience</h2>
						<h1 className="carousel-heading hero-text-animate">for parties & weddings</h1>
						<div className="carousel-buttons hero-text-animate">
							<Link to="/reservations" className="carousel-btn">Book Event</Link>
							<Link to="/contactus" className="carousel-btn outline">Contact Us</Link>
						</div>
					</div>
				</div>
			</header>

			<Footer />
		</>
	);
}

export default Home;