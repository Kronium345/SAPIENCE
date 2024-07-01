import React from 'react';
import './UAHTeam.css';
import bryanImage from '../../assets/team/bryan.jpeg';
import rainerImage from '../../assets/team/rainer.jpeg';
import sampsonImage from '../../assets/team/sampson.jpeg';
import josephImage from '../../assets/team/joseph.png';
import mariaVImage from '../../assets/team/maria.png';
import gabrielImage from '../../assets/team/gabriel.png';
import jacksonImage from '../../assets/team/jackson.png';
import brandonImage from '../../assets/team/brandon.png';
// import teamBanner from '../../assets/team/team-banner.png';

const UAHTeam = () => {
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
          <h2 className="text-4xl font-bold mb-8">University of Alabama in Huntsville</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={bryanImage} alt="Dr. Bryan Mesmer" className="team-img" />
              <p className="team-name">Dr. Bryan Mesmer</p>
              {/* <p className="team-title">Associate Professor of Industrial and Systems Engineering</p> */}
              <p className="team-role-detail">Technical and Managerial Lead</p>
              {/* <p className="team-time">5%</p> */}
            </div>

            <div className="team-member">
              <img src={josephImage} alt="Joseph Schwalb" className="team-img" />
              <p className="team-name">Joseph Schwalb</p>
              <p className="team-title">PhD Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Construction and integration of AI payloads</p>
            </div>
            <div className="team-member">
              <img src={mariaVImage} alt="Maria Voss" className="team-img" />
              <p className="team-name">Maria Voss</p>
              <p className="team-title">MS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Navigation and object recognition</p>
            </div>
            <div className="team-member">
              <img src={gabrielImage} alt="Gabriel Henneberger" className="team-img" />
              <p className="team-name">Gabriel Henneberger</p>
              <p className="team-title">MS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Sensors & instrumentation, sensor fusion, image processing, data analysis, and control systems</p>
            </div>
            <div className="team-member">
              <img src={jacksonImage} alt="Jackson Neese" className="team-img" />
              <p className="team-name">Jackson Neese</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Hardware and integration</p>
            </div>
            <div className="team-member">
              <img src={brandonImage} alt="Brandon Rostenbach" className="team-img" />
              <p className="team-name">Brandon Rostenbach</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Operating system integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UAHTeam;
