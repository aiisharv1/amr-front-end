import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Team() {
  return (
      <>
        <head>
          <title>AMR - Our Team</title>
        </head>
        <Navbar/>

        <style jsx="true">{`
          /* Team page styles with proper spacing to avoid header overlap */
          body {
            background-color: #ffffff;
          }

          .page-container {
            max-width: 100%;
            overflow-x: hidden;
          }

          .team-section {
            padding: 0 0 100px;
            background-color: #ffffff;
            position: relative;
            /* Added extra top padding to account for fixed header */
            margin-top: 120px;
          }

          .team-header {
            position: relative;
            margin-bottom: 80px;
            text-align: center;
            padding-top: 50px; /* Extra padding at top */
          }

          .team-title {
            font-size: 40px;
            font-weight: 700;
            color: #000;
            position: relative;
            display: inline-block;
            margin: 0;
            padding: 0 20px;
          }

          .team-title::before,
          .team-title::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 80px;
            background-color: #DBA800;
          }

          .team-title::before {
            left: -15px;
          }

          .team-title::after {
            right: -15px;
          }

          .team-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            gap: 120px;
            padding: 0 20px;
          }

          .team-member {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 250px;
          }

          .team-member-image {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 30px;
            border: 0.5rem solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          }

          .team-member-image:hover {
            transform: scale(1.1);
          }

          .team-member-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .member-name {
            font-size: 24px;
            font-weight: 600;
            color: #000;
            margin: 0 0 5px 0;
            text-align: center;
          }

          .member-title {
            font-size: 16px;
            color: #666;
            margin: 0;
            text-align: center;
            font-weight: 400;
          }

          /* Mobile responsiveness */
          @media (max-width: 992px) {
            .team-container {
              gap: 60px;
            }

            .team-title {
              font-size: 36px;
            }

            .team-title::before,
            .team-title::after {
              height: 60px;
            }
          }

          @media (max-width: 768px) {
            .team-section {
              margin-top: 100px;
            }

            .team-header {
              padding-top: 30px;
            }

            .team-container {
              gap: 40px;
            }

            .team-member {
              width: 200px;
            }

            .team-member-image {
              width: 180px;
              height: 180px;
              border-width: 8px;
            }

            .member-name {
              font-size: 20px;
            }
          }

          @media (max-width: 576px) {
            .team-section {
              margin-top: 80px;
            }

            .team-header {
              margin-bottom: 50px;
              padding-top: 20px;
            }

            .team-title {
              font-size: 30px;
            }

            .team-title::before,
            .team-title::after {
              height: 50px;
            }

            .team-container {
              gap: 30px;
            }

            .team-member {
              width: 160px;
            }

            .team-member-image {
              width: 150px;
              height: 150px;
              border-width: 6px;
              margin-bottom: 20px;
            }

            .member-name {
              font-size: 18px;
            }

            .member-title {
              font-size: 14px;
            }
          }
        `}</style>

        <div className="page-container">
          <section className="team-section">
            <div className="team-header">
              <h1 className="team-title">Our Team</h1>
            </div>

            <div className="team-container">
              <div className="team-member">
                <div className="team-member-image">
                  <img src="/images/entrepreneur-593358_1280.jpg" alt="Hidayat Ullah"/>
                </div>
                <h2 className="member-name">Hidayat Ullah</h2>
                <p className="member-title">Founder</p>
              </div>

              <div className="team-member">
                <div className="team-member-image">
                  <img src="/images/woman-3116587_1280.jpg" alt="Sana Hidayat"/>
                </div>
                <h2 className="member-name">Sana Hidayat</h2>
                <p className="member-title">Chief Technology Officer</p>
              </div>

              <div className="team-member">
                <div className="team-member-image">
                  <img src="/images/adult-1867471_1280.jpg" alt="Muhammad Ali"/>
                </div>
                <h2 className="member-name">Muhammad Ali</h2>
                <p className="member-title">Marketing Manager</p>
              </div>
            </div>
          </section>
        </div>

        <Footer/>
      </>
  );
}

export default Team;