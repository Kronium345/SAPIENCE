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
          <h2 className="text-4xl font-bold mb-8">Project Team - University of Alabama in Huntsville</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={bryanImage} alt="Dr. Bryan Mesmer" className="team-img" />
              <p className="team-name">Dr. Bryan Mesmer</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">Associate Professor</p>
              {/* <p className="team-time">5%</p> */}
              <p className="team-role-detail">Co-Director USA, Technical and Managerial Lead of the activities at The University of Alabama in Huntsville</p>
            </div>
            <div className="team-member">
              <img src={rainerImage} alt="Rainer Steinwandt" className="team-img" />
              <p className="team-name">Rainer Steinwandt</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">Dean & Professor</p>
              {/* <p className="team-time">5%</p> */}
              <p className="team-role-detail">Coordination & Publicity Support</p>
            </div>
            <div className="team-member">
              <img src={sampsonImage} alt="Sampson Gholston" className="team-img" />
              <p className="team-name">Sampson Gholston</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">Chair & Professor</p>
              {/* <p className="team-time">5%</p> */}
              <p className="team-role-detail">Technical and Managerial Support of the activities at The University of Alabama in Huntsville</p>
            </div>
            <div className="team-member">
              <img src={josephImage} alt="Joseph Schwalb" className="team-img" />
              <p className="team-name">Joseph Schwalb</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">PhD Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Computer Science; Construction and integration of AI payloads</p>
            </div>
            <div className="team-member">
              <img src={mariaVImage} alt="Maria Voss" className="team-img" />
              <p className="team-name">Maria Voss</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">MS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Electrical Engineering; Navigation and object recognition</p>
            </div>
            <div className="team-member">
              <img src={gabrielImage} alt="Gabriel Henneberger" className="team-img" />
              <p className="team-name">Gabriel Henneberger</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">MS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Aerospace Systems Engineering; Sensors & instrumentation, sensor fusion, image processing, data analysis, and control systems</p>
            </div>
            <div className="team-member">
              <img src={jacksonImage} alt="Jackson Neese" className="team-img" />
              <p className="team-name">Jackson Neese</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Mechanical Engineering; Hardware and integration</p>
            </div>
            <div className="team-member">
              <img src={brandonImage} alt="Brandon Rostenbach" className="team-img" />
              <p className="team-name">Brandon Rostenbach</p>
              <p className="team-role">University of Alabama in Huntsville</p>
              <p className="team-title">BS Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Electrical Engineering; Operating system integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UAHTeam;
