import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Rates() {
  const tableRef = useRef(null);

  useEffect(() => {
    // Initialize DataTable when component mounts
    let dataTable = null;

    const initializeDataTable = async () => {
      try {
        // Fetch rates data
        const response = await axios.get('data/rates.json');

        // Initialize DataTable with the fetched data
        if (tableRef.current && !$.fn.DataTable.isDataTable(tableRef.current)) {
          dataTable = $(tableRef.current).DataTable({
            data: response.data.data,
            columns: [
              { data: 'vehicle_type', title: 'Vehicle Type' },
              { data: 'make_and_model', title: 'Make & Model' },
              { data: 'number_of_passengers', title: '# of Passengers' },
              {
                data: 'hourly_rate',
                title: 'Hourly Rate',
                render: function (data) {
                  return `$${parseFloat(data).toFixed(2)}`;
                }
              },
              {
                data: 'additional_charges',
                title: 'Additional Charges',
                render: function (data) {
                  return `$${parseFloat(data).toFixed(2)}`;
                }
              }
            ],
            responsive: true,
            ordering: true,
            searching: true,
            paging: true,
            lengthMenu: [5, 10, 25, 50],
            pageLength: 10,
            dom: 'lfrtip'
          });
        }
      } catch (error) {
        console.error('Error fetching rates data:', error);
      }
    };

    initializeDataTable();

    // Clean up DataTable instance when component unmounts
    return () => {
      if (dataTable) {
        dataTable.destroy();
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <section id="special" className="py-5 rates first-section">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">Rates</h2>
          </div>

          <div id="ratesTable" className="special-list row g-0">
            <div className="table-responsive">
              <table
                id="rateTable"
                ref={tableRef}
                className="table table-striped"
                style={{ width: '100%' }}
              >
                <thead>
                  <tr>
                    <th>Vehicle Type</th>
                    <th>Make & Model</th>
                    <th># of Passengers</th>
                    <th>Hourly Rate</th>
                    <th>Additional Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {/* DataTables will populate this */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Rates;