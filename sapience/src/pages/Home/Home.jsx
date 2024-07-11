// src/Home.jsx
import React from 'react';
import nabilImage from '../../assets/team/nabil.png';
import stephanImage from '../../assets/team/stephen.jpeg';
import bryanImage from '../../assets/team/bryan.jpeg';
import ewoudImage from '../../assets/team/ewoud.jpeg';
import img1 from '../../assets/activities/img1.png';
import img2 from '../../assets/activities/img2.png';
import img3 from '../../assets/activities/img3.png';
import search from '../../assets/search_and_rescue.jpg';
import drone from '../../assets/drone_swarm.png';
import newBanner from '../../assets/blue_map_2.png'
import finalBanner from '../../assets/final-sapience-banner-design-5.png';
import natoBanner from '../../assets/sprg.png';
import cityLogo from '../../assets/city-logo.jpeg';
import uokLogo from '../../assets/uok-logo.jpeg';
import uahLogo from '../../assets/uah-logo.png';
import dutLogo from '../../assets/dut-logo.png';
import flyer from '../../assets/SST_event_flyer.pdf';
import './Home.css';

const Home = () => {


  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${finalBanner})` }}>
          <div className="hero-content">
            <h2 className="intro-title">SAPIENCE</h2>
            <p className="intro-subtitle">Sense & Avoid - a cooPeratIvE droNe CompEtition</p>
          </div>
        </section>

        <section className="banner" style={{ backgroundImage: `url(${natoBanner})` }}>
        </section>

        {/* Intro Section */}
        <section className="intro py-16 text-center">
          <div className="intro-container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-white">Project Goals</h2>
            <div className="research-areas-grid">
              <div className="research-area-tile">
                <img src={search} alt="Search & Rescue Missions" className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Reimagining Search & Rescue Missions</p>
                  <p className="description">Utilising autonomous drones to survey indoor and outdoor environments in disaster areas. Minimising human involvement in dangerous areas and providing first responders with the information they need to achieve the best possible outcome.</p>
                </div>
              </div>
              <div className="research-area-tile">
                <img src={img2} alt="Increasing the level of perception autonomy" className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Increasing the Level of Perception Autonomy</p>
                  <p className="description">Enhancing drones' ability to perceive, understand, and navigate their surroundings independently. Allowing them to operate in diverse environments, adapting to new challenges in real-time.</p>
                </div>
              </div>
              <div className="research-area-tile">
                <img src={drone} alt="Showcasing Cooperative Multi-Drone Solutions" className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Showcasing Cooperative Multi-Drone Solutions</p>
                  <p className="description">Focusing on the interaction and coordination between multiple autonomous agents to achieve complex tasks and improve overall mission efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="facilities py-16 bg-gray-100 text-center">
          <div className="facilities-container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Impact</h2>
            <p className="intro-text text-lg">
              The SAPIENCE project significantly advances the field of autonomous systems by leveraging artificial intelligence for enhanced perception and guidance autonomy in drones. Through a series of collaborative competitions, this initiative fosters innovation in search and rescue operations, enabling multiple drones to effectively navigate and map GPS-denied environments, detect and deliver aid to victims, and perform complex cooperative tasks. By integrating cutting-edge AI techniques, the project not only enhances the capabilities of autonomous systems but also contributes to disaster response efforts, potentially saving lives and improving safety in critical situations.
            </p>
          </div>
        </section>

        {/* Project Partners Section */}
        <section className="leader-section py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Project Partners</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
                <div className="team-info">
                  <p className="team-name">Prof. Nabil Aouf</p>
                  <p className="team-country">Project Lead and NATO Country Project Director</p>
                  <p className="team-role">City, University of London</p>
                </div>
                <img src={cityLogo} alt="City Logo" className="city-logo-img" />
              </div>
              <div className="team-member">
                <img src={stephanImage} alt="Prof. Stephan Weiss" className="team-img" />
                <div className="team-info">
                  <p className="team-name">Prof. Stephan Weiss</p>
                  <p className="team-country">Partner Country Project Director</p>
                  <p className="team-role">University of Klagenfurt</p>
                </div>
                <img src={uokLogo} alt="UOK Logo" className="logo-img" />
              </div>
              <div className="team-member">
                <img src={bryanImage} alt="Dr. Bryan Mesmer" className="team-img" />
                <div className="team-info">
                  <p className="team-name">Dr. Bryan Mesmer</p>
                  <p className="team-country">Project Co-Director</p>
                  <p className="team-role">The University of Alabama in Huntsville</p>
                </div>
                <img src={uahLogo} alt="UAH Logo" className="logo-img" />
              </div>
              <div className="team-member">
                <img src={ewoudImage} alt="Dr. Ir. Ewoud Smeur" className="team-img" />
                <div className="team-info">
                  <p className="team-name">Dr. Ir. Ewoud Smeur</p>
                  <p className="team-country">Project Co-Director</p>
                  <p className="team-role">Delft University of Technology</p>
                </div>
                <img src={dutLogo} alt="DUT Logo" className="logo-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Document Section */}
        <section className="document-section py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="document-text text-4xl font-bold mb-8 text-black">Read and Download the Leaflet for Competition 1</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
              <div className="w-full">
                <div className="w-full h-full object-cover rounded-lg shadow-lg bg-white flex items-center justify-center">
                  <iframe src={flyer} width="100%" height="800px" style={{ border: 'none' }}></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>





      </div>
    </div>
  );
};

export default Home;
