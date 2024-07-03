import React from 'react';
import './CityTeam.css';

// Import team member images
import nabilImage from '../../assets/team/nabil.png';
import maxwellImage from '../../assets/team/max.jpg';
import tomImage from '../../assets/team/tom.png';
import abdullaImage from '../../assets/team/abdulla.png';
import danielImage from '../../assets/team/daniel.jpeg';
import shimonImage from '../../assets/team/shimon.jpeg';
import victorImage from '../../assets/team/victor.png';

const CityTeam = () => {
  return (
    <div className="city-team-page">
      <section className="team-section">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8 text-white">City, University of London</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
              <p className="team-name">Prof. Nabil Aouf</p>
              <p className="team-responsibility">Technical and Managerial Lead</p>
            </div>
            <div className="team-member">
              <img src={tomImage} alt="Thomas Hickling" className="team-img" />
              <p className="team-name">Thomas Hickling</p>
              <p className="team-role">PhD Student</p>
              <p className="team-responsibility">Guidance/planning algorithms</p>
            </div>
            <div className="team-member">
              <img src={maxwellImage} alt="Maxwell Hogan" className="team-img" />
              <p className="team-name">Maxwell Hogan</p>
              <p className="team-role">PhD Student</p>
              <p className="team-responsibility">Overall Instrumentation and Embedding of algorithms</p>
            </div>
            <div className="team-member">
              <img src={abdullaImage} alt="Abdulla Tammam" className="team-img" />
              <p className="team-name">Abdulla Tammam</p>
              <p className="team-role">PhD Student</p>
              <p className="team-responsibility">Navigation and Control algorithms</p>
            </div>
            <div className="team-member">
              <img src={danielImage} alt="Daniel Awolowo" className="team-img" />
              <p className="team-name">Daniel Awolowo</p>
              <p className="team-role">MSc Student</p>
              <p className="team-responsibility">Implementation Support</p>
            </div>
            <div className="team-member">
              <img src={shimonImage} alt="Shimon Jacobs" className="team-img" />
              <p className="team-name">Shimon Jacobs</p>
              <p className="team-role">MSc Student</p>
              <p className="team-responsibility">Implementation Support</p>
            </div>
            <div className="team-member">
              <img src={victorImage} alt="Victor Alonso" className="team-img" />
              <p className="team-name">Victor Alonso</p>
              <p className="team-role">MSc Student</p>
              <p className="team-responsibility">Implementation Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityTeam;
