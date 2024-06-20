import React from 'react';
import './CityTeam.css';

// Import team member images
import nabilImage from '../../assets/team/nabil.png';
import maxwellImage from '../../assets/team/max.jpg';
import tomImage from '../../assets/team/tom.png';
import abdullaImage from '../../assets/team/abdulla.png';
import danielImage from '../../assets/team/daniel.jpeg'
import shimonImage from '../../assets/team/shimon.jpeg'
import victorImage from '../../assets/team/victor.png'
import { FaUserAlt } from 'react-icons/fa';


const CityTeam = () => {
  return (
    <div className="city-team-page">
      {/* <section
        className="hero text-center"
        style={{ backgroundImage: `url(${teamBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
      >
        <div className="container mx-auto"></div>
      </section> */}

      <section className="team-section py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">City, University of London Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
              <p className="team-name">Prof. Nabil Aouf</p>
              <p className="team-role">Professor of Autonomous Systems and Machine Intelligence</p>
              
              {/* <p className="team-time">10% Time</p> */}
              <p className="team-responsibility">NPD, Technical and Managerial Lead of the activities at City University of London</p>
            </div>
            <div className="team-member">
              <img src={tomImage} alt="Thomas Hickling" className="team-img" />
              <p className="team-name">Thomas Hickling</p>
              <p className="team-role">PhD Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Guidance/planning algorithms</p>
            </div>
            <div className="team-member">
              <img src={maxwellImage} alt="Maxwell Hogan" className="team-img" />
              <p className="team-name">Maxwell Hogan</p>
              <p className="team-role">PhD Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Overall Instrumentation and Embedding of algorithms</p>
            </div>
            <div className="team-member">
              <img src={abdullaImage} alt="Abdulla Tammam" className="team-img" />
              <p className="team-name">Abdulla Tammam</p>
              <p className="team-role">PhD Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Navigation and Control algorithms</p>
            </div>
            <div className="team-member">
              <img src={danielImage} alt="Daniel Awolowo" className="team-img" />
              <p className="team-name">Daniel Awolowo</p>
              <p className="team-role">MSc Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Implementation Support</p>
            </div>
            <div className="team-member">
              <img src={shimonImage} alt="Shimon Jacobs" className="team-img" />
              <p className="team-name">Shimon Jacobs</p>
              <p className="team-role">MSc Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Implementation Support </p>
            </div>
            <div className="team-member">
            <img src={victorImage} alt="Shimon Jacobs" className="team-img" />
              <p className="team-name">Victor Alonso</p>
              <p className="team-role">MSc Student</p>
              
              {/* <p className="team-time">15% Time</p> */}
              <p className="team-responsibility">Implementation Support </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityTeam;
