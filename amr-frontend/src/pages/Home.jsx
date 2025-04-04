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

		// Add active class to the features on scroll
		const handleScroll = () => {
			const featureElements = document.querySelectorAll('.feature-card');
			const testimonialElements = document.querySelectorAll('.testimonial-card');

			[...featureElements, ...testimonialElements].forEach(element => {
				const rect = element.getBoundingClientRect();
				const isVisible = rect.top < window.innerHeight - 100;

				if (isVisible) {
					element.classList.add('active');
				}
			});
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Trigger once on initial load
		handleScroll();

		// Clean up event listener
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar />

			<style jsx="true">{`
        /* Hero section styles */
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }
        
        .carousel, .carousel-inner, .carousel-item {
          height: 100%;
        }
        
        .carousel-item {
          background-color: rgba(0, 0, 0, 0.5);
          position: relative;
        }
        
        .hero-img {
          object-fit: cover;
          height: 100%;
          width: 100%;
          filter: brightness(0.7);
        }
        
        .carousel-caption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          text-align: center;
          max-width: 1000px;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-transform: uppercase;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }
        
        .hero-text-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .hero-text-animate.show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-btn {
          padding: 12px 30px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          margin: 5px;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }
        
        .hero-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
        }
        
        .hero-btn.outline {
          background-color: transparent;
          border: 2px solid white;
        }
        
        .hero-btn.outline:hover {
          background-color: white;
          color: #007bff;
        }
        
        /* Animated scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 60px;
          cursor: pointer;
          z-index: 100;
        }
        
        .scroll-indicator:before {
          content: '';
          width: 8px;
          height: 8px;
          background: white;
          margin-left: -4px;
          top: 8px;
          border-radius: 50%;
          animation: scrolldown 2s infinite;
          position: absolute;
          left: 50%;
        }
        
        .scroll-indicator:after {
          content: '';
          width: 20px;
          height: 40px;
          position: absolute;
          left: 50%;
          top: 0;
          border: 2px solid white;
          border-radius: 25px;
          transform: translateX(-50%);
        }
        
        @keyframes scrolldown {
          0% { transform: translate(0, 0); opacity: 0; }
          40% { opacity: 1; }
          80% { transform: translate(0, 20px); opacity: 0; }
          100% { opacity: 0; }
        }
        
        /* Features section */
        .features-section {
          padding: 80px 0;
          background-color: #f8f9fa;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }
        
        .section-title:after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-image: linear-gradient(to right, #007bff, #00c6ff);
        }
        
        .feature-card {
          padding: 30px;
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.5s ease;
          margin-bottom: 30px;
          transform: translateY(30px);
          opacity: 0;
          height: 100%;
        }
        
        .feature-card.active {
          transform: translateY(0);
          opacity: 1;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #007bff;
          background-color: rgba(0, 123, 255, 0.1);
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .feature-title {
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        /* Testimonials section */
        .testimonials-section {
          padding: 80px 0;
          background-color: #ffffff;
        }
        
        .testimonial-card {
          padding: 30px;
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          margin-bottom: 30px;
          position: relative;
          transform: scale(0.9);
          opacity: 0;
          transition: all 0.5s ease;
          height: 100%;
        }
        
        .testimonial-card.active {
          transform: scale(1);
          opacity: 1;
        }
        
        .testimonial-card:before {
          content: '"';
          position: absolute;
          top: 10px;
          left: 20px;
          font-size: 4rem;
          color: rgba(0, 123, 255, 0.1);
          font-family: Georgia, serif;
        }
        
        .client-info {
          display: flex;
          align-items: center;
          margin-top: 20px;
        }
        
        .client-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 15px;
        }
        
        .client-name {
          font-weight: 600;
          margin-bottom: 0;
        }
        
        .client-role {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        /* Call to action */
        .cta-section {
          padding: 80px 0;
          background-image: linear-gradient(to right, #007bff, #00c6ff);
          color: white;
        }
        
        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .cta-btn {
          background-color: white;
          color: #007bff;
          padding: 12px 30px;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }
        
        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.4rem;
          }
          
          .carousel-caption {
            width: 90%;
          }
          
          .d-none.d-md-block {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
          
          .features-section, .testimonials-section, .cta-section {
            padding: 50px 0;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-btn {
            margin: 5px 0;
            width: 200px;
          }
        }
      `}</style>

			{/* Enhanced Hero Carousel */}
			<section className="hero-section">
				<div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								src="/images/limo1.jpg"
								className="hero-img"
								alt="Luxury limousine service"
							/>
							<div className="carousel-caption">
								<h2 className="hero-subtitle hero-text-animate">LUXURY TRANSPORTATION</h2>
								<h1 className="hero-title hero-text-animate">EXPERIENCE PREMIUM TRAVEL</h1>
								<div className="hero-text-animate hero-buttons">
									<Link to="/fleet" className="hero-btn">Explore Our Fleet</Link>
									<Link to="/reservations" className="hero-btn outline">Book Now</Link>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="/images/limo2.jpg"
								className="hero-img"
								alt="Elegant limousine for special events"
							/>
							<div className="carousel-caption">
								<h2 className="hero-subtitle hero-text-animate">SPECIAL OCCASIONS</h2>
								<h1 className="hero-title hero-text-animate">MAKE YOUR EVENT UNFORGETTABLE</h1>
								<div className="hero-text-animate hero-buttons">
									<Link to="/reservations" className="hero-btn">Book Your Event</Link>
									<Link to="/contactus" className="hero-btn outline">Contact Us</Link>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="/images/limo3.jpg"
								className="hero-img"
								alt="Professional chauffeur service"
							/>
							<div className="carousel-caption">
								<h2 className="hero-subtitle hero-text-animate">PROFESSIONAL SERVICE</h2>
								<h1 className="hero-title hero-text-animate">QUALITY & RELIABILITY</h1>
								<div className="hero-text-animate hero-buttons">
									<Link to="/aboutus" className="hero-btn">About Us</Link>
									<Link to="/team" className="hero-btn outline">Meet Our Team</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >



			<Footer />
		</>
	);
}

export default Home;