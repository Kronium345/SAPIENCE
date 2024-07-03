import React from 'react';
import './UoKTeam.css';
import stephanImage from '../../assets/team/stephen.jpeg';
import lucaImage from '../../assets/team/luca.jpeg';
import { FaUserAlt } from 'react-icons/fa';
import gilbertImage from '../../assets/team/gilbert.jpeg';
// import marcelImage from '../../assets/team/marcel.png';
import timImage from '../../assets/team/tim.jpeg';
// import benImage from '../../assets/team/ben.png';
// import teamBanner from '../../assets/team/team-banner.png';

const UoKTeam = () => {
  return (
    <div className="team-page">
      {/* <section
        className="hero text-center"
        style={{ backgroundImage: `url(${teamBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
      >
        <div className="container mx-auto"></div>
      </section> */}

      <section className="team-section py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">University of Klagenfurt</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={stephanImage} alt="Prof. Stephan Weiss" className="team-img" />
              <p className="team-name">Prof. Stephan Weiss</p>
              {/* <p className="team-role-detail">Full Professor of Robotics</p> */}
              <p className="team-title">Technical and Managerial Lead</p>
              {/* <p className="team-time">5%</p> */}
            </div>
            <div className="team-member">
              <img src={lucaImage} alt="Luca Di Pierno" className="team-img" />
              <p className="team-name">Luca Di Pierno</p>
              <p className="team-title">PhD Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Project supervision, Mission and Path Planning</p>
            </div>
            <div className="team-member">
              <FaUserAlt size={150} color="#ccc" className="team-img" />
              <p className="team-name">Georg Steinthaler</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Navigation & Perception</p>
            </div>
            <div className="team-member">
              <img src={gilbertImage} alt="Gilbert Tanner" className="team-img" />
              <p className="team-name">Gilbert Tanner</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Perception & AI</p>
            </div>
            <div className="team-member">
              <FaUserAlt size={150} color="#ccc" className="team-img" />
              <p className="team-name">Marcel Lorber</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Mission planning</p>
            </div>
            <div className="team-member">
              <img src={timImage} alt="Tim Schumann" className="team-img" />
              <p className="team-name">Tim Schumann</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Control & Estimation</p>
            </div>
            <div className="team-member">
              <FaUserAlt size={150} color="#ccc" className="team-img" />
              <p className="team-name">Ben Wesse</p>
              <p className="team-title">MS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation & Mapping</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UoKTeam;
