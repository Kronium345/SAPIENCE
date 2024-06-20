import React from 'react';
import './DUTTeam.css';
import ewoudImage from '../../assets/team/ewoud.jpeg';
import bartImage from '../../assets/team/bart.png';
import jakubImage from '../../assets/team/jakub.png';
import maximeImage from '../../assets/team/maxime.png';
import marcoImage from '../../assets/team/marco.png';
import tomImage from '../../assets/team/tomA.png';
import richardImage from '../../assets/team/richard.png';
// import teamBanner from '../../assets/team/team-banner.png';

const DUTTeam = () => {
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
          <h2 className="text-4xl font-bold mb-8">Project Team - Delft University of Technology</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={ewoudImage} alt="Dr.Ir. Ewoud Smeur" className="team-img" />
              <p className="team-name">Dr.Ir. Ewoud Smeur</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">Assistant Professor</p>
              {/* <p className="team-time">5%</p> */}
              <p className="team-role-detail">Co-Director NL, Project supervision</p>
            </div>
            <div className="team-member">
              <img src={bartImage} alt="Bart Remes" className="team-img" />
              <p className="team-name">Bart Remes</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">Project Manager</p>
              {/* <p className="team-time">5%</p> */}
              <p className="team-role-detail">Project supervision</p>
            </div>
            <div className="team-member">
              <img src={jakubImage} alt="Jakub Plonka" className="team-img" />
              <p className="team-name">Jakub Plonka</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">BSc Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation support</p>
            </div>
            <div className="team-member">
              <img src={maximeImage} alt="Maxime Capelle" className="team-img" />
              <p className="team-name">Maxime Capelle</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">MSc Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation support</p>
            </div>
            <div className="team-member">
              <img src={marcoImage} alt="Marco Xausa" className="team-img" />
              <p className="team-name">Marco Xausa</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">MSc Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation support</p>
            </div>
            <div className="team-member">
              <img src={tomImage} alt="Tom Aantjes" className="team-img" />
              <p className="team-name">Tom Aantjes</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">MSc Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation support</p>
            </div>
            <div className="team-member">
              <img src={richardImage} alt="Richard Teschl" className="team-img" />
              <p className="team-name">Richard Teschl</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-title">MSc Student</p>
              {/* <p className="team-time">15%</p> */}
              <p className="team-role-detail">Implementation support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DUTTeam;
