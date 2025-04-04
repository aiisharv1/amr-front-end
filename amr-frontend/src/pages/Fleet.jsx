import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Fleet() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/data/vehicles.xml', {
          responseType: 'document'
        });

        // Parse XML response
        const xmlDoc = response.data;

        if (!xmlDoc) {
          throw new Error('Failed to parse XML');
        }

        // Get baseUrl from XML
        const baseUrl = xmlDoc.getElementsByTagName('baseurl')[0]?.textContent || '';

        // Extract vehicle data
        const vehicleNodes = Array.from(xmlDoc.getElementsByTagName('vehicle'));
        const parsedVehicles = vehicleNodes.map((vehicle, index) => {
          const getValueFromXML = (tagName) => {
            return vehicle.getElementsByTagName(tagName)[0]?.textContent || '';
          };

          return {
            id: index,
            name: getValueFromXML('vehicle_name'),
            image: baseUrl + getValueFromXML('vehicle_img'),
            makeAndModel: getValueFromXML('make_and_model'),
            alt: getValueFromXML('image_alt')
          };
        });

        setVehicles(parsedVehicles);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching vehicle data:', err);
        setError('Failed to load vehicle data. Please try again later.');
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  // Function to handle image loading error
  const handleImageError = (e) => {
    e.target.src = '/images/placeholder-vehicle.jpg'; // Fallback image
    e.target.alt = 'Vehicle image not available';
  };

  // Function to create star ratings
  const renderStars = (count = 5) => {
    return Array(count).fill().map((_, i) => (
      <span key={i} className="text-primary">
        <i className="fas fa-star"></i>
      </span>
    ));
  };

  return (
    <>
      <Navbar />

      <section id="special" className="py-5 fleet first-section">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Fleet</h2>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading our luxury fleet...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : (
            <div className="special-list row g-0">
              {vehicles.map((vehicle) => (
                <div
                  id={vehicle.name}
                  key={vehicle.id}
                  className="col-md-6 col-lg-4 col-xl-3 p-2"
                >
                  <div
                    id={`${vehicle.name}-img-container`}
                    className="special-img position-relative overflow-hidden"
                  >
                    <img
                      id={`${vehicle.name}-img`}
                      src={vehicle.image}
                      alt={vehicle.alt}
                      className="w-100 fleet-img"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="text-center">
                    <div className="rating mt-3">
                      {renderStars()}
                    </div>
                    <p
                      id={`${vehicle.name}-make-model`}
                      className="text-capitalize my-1"
                    >
                      {vehicle.makeAndModel}
                    </p>
                    <Link
                      to={`/reservations?vehicle=${encodeURIComponent(vehicle.makeAndModel)}`}
                      className="btn btn-primary btn-block proceed-btn"
                    >
                      Reserve Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Fleet;