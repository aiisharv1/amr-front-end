import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Fleet() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch('/data/vehicles.xml')
            .then((res) => res.text())
            .then((xmlText) => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(xmlText, 'application/xml');
                const vehicleNodes = Array.from(xml.getElementsByTagName('vehicle'));

                const vehicleData = vehicleNodes.map((v, i) => ({
                    id: i,
                    name: v.getElementsByTagName('vehicle_name')[0]?.textContent || '',
                    image: v.getElementsByTagName('vehicle_img')[0]?.textContent || '',
                    makeAndModel: v.getElementsByTagName('make_and_model')[0]?.textContent || '',
                    alt: v.getElementsByTagName('image_alt')[0]?.textContent || '',
                }));

                setVehicles(vehicleData);
            })
            .catch((err) => {
                console.error('Failed to load XML', err);
            });
    }, []);

    return (
        <>
            <Navbar />

            <section className="py-5 fleet first-section" id="special">
                <div className="container">
                    <div className="title text-center py-5">
                        <h2 className="position-relative d-inline-block">Fleet</h2>
                    </div>
                    <div className="special-list row g-0">
                        {vehicles.length === 0 ? (
                            <p className="text-center">Loading vehicles...</p>
                        ) : (
                            vehicles.map((vehicle) => (
                                <div key={vehicle.id} className="col-md-6 col-lg-4 col-xl-3 p-2 text-center text-capitalize">
                                    <div className="special-img">
                                        <img
                                            src={`/images/${vehicle.image}`}
                                            className="w-100 fleet-img"
                                            alt={vehicle.alt}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <div className="rating mt-3">
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                        </div>
                                        <p className="my-1">{vehicle.makeAndModel}</p>
                                        <a
                                            href={`/reservations?vehicle=${encodeURIComponent(vehicle.makeAndModel)}`}
                                            className="btn btn-primary"
                                        >
                                            Reserve Now
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Fleet;
