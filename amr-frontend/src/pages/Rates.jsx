import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Rates() {
    return (
        <>
            <Navbar />

            <section id="special" className="py-5 rates first-section">
                <div className="container">
                    <div className="title text-center py-5">
                        <h2 className="position-relative d-inline-block">Rates</h2>
                    </div>

                    <div id="ratesTable" className="special-list row g-0">
                        <table id="rateTable" className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Vehicle Type</th>
                                <th scope="col">Make & Model</th>
                                <th scope="col"># of Passengers</th>
                                <th scope="col">Hourly Rate</th>
                                <th scope="col">Additional Charges</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* We'll dynamically load this data later using rates.json */}
                            <tr>
                                <td>SUV</td>
                                <td>Cadillac Escalade</td>
                                <td>6</td>
                                <td>$95/hr</td>
                                <td>+ Gratuity</td>
                            </tr>
                            <tr>
                                <td>Luxury Sedan</td>
                                <td>Mercedes-Benz S-Class</td>
                                <td>4</td>
                                <td>$110/hr</td>
                                <td>+ Gratuity</td>
                            </tr>
                            <tr>
                                <td>Van</td>
                                <td>Ford Transit</td>
                                <td>10</td>
                                <td>$85/hr</td>
                                <td>+ Gratuity</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Rates;
