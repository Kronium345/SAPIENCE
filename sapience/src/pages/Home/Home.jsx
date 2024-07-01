// src/Home.jsx
import React from 'react';
import nabilImage from '../../assets/team/nabil.png';
import stephanImage from '../../assets/team/stephen.jpeg';
import bryanImage from '../../assets/team/bryan.jpeg';
import ewoudImage from '../../assets/team/ewoud.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Home.css';
import { FaRoute, FaSatelliteDish, FaPlane } from 'react-icons/fa';
import img1 from '../../assets/activities/img1.png';
import img2 from '../../assets/activities/img2.png';
import img3 from '../../assets/activities/img3.png';
import search from '../../assets/search_and_rescue.jpg';
import drone from '../../assets/drone_swarm.png';
import bannerImage from '../../assets/blue_map_2.png'



// Import carousel images
import image1 from '../../assets/carousel/image1.png';
import image2 from '../../assets/carousel/image2.png';
import image3 from '../../assets/carousel/image3.png';

// Import preview images
import previewImage1 from '../../assets/placeholder1.png';
import previewImage2 from '../../assets/placeholder2.png';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="home">
      <div className="container">
        {/* Hero Section */}
        <section className="hero h-screen flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="hero-content">
            <h2 className="intro-title">SAPIENCE</h2>
            <p className="intro-subtitle">Sense & Avoid - a cooPeratIvE droNe CompEtition</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro py-16 bg-customBlue text-center">
          <div className="intro-container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-white">Project Goals</h2>
            {/* <p className="text-xl intro-text">
              This research program is designed as multiple challenges/contests defined for competing teams from multiple leading universities located in NATO member states and NATO partner nations.
            </p> */}
            {/* <p className="text-3xl intro-text text-red-500 font-bold mt-4">
              This project’s interest areas are:
            </p> */}
            <div className="research-areas-grid">
              <div className="research-area-tile">
                <img src={search} alt="Search & Rescue Missions" className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Reimagining Search & Rescue Missions </p>
                  <p className="description">Utilising autonomous drones to survey indoor and outdoor environments in disaster areas. Minimising human involvement in dangerous areas and providing first responders with the information they need to achieve the best possible outcome.</p>
                </div>
              </div>
              <div className="research-area-tile">
                <img src={img2} alt="Increasing the level of perception autonomy" className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Increasing the Level of Perception Autonomy</p>
                  <p className="description">Enhancing drones' ability to perceive, understand, and navigate their surroundings independently.</p>
                </div>
              </div>
              <div className="research-area-tile">
                <img src={drone} alt="Showcasing Cooperative Multi-Drone Solutions  " className="goal-image" />
                <div className="tile-content">
                  <p className="mt-4">Showcasing Cooperative Multi-Drone Solutions  </p>
                  <p className="description">Focusing on the interaction and coordination between multiple autonomous agents to achieve complex tasks and improve overall mission efficiency.</p>
                </div>
              </div>
            </div>

            {/* <a href="https://www.city.ac.uk/news-and-events/news/2023/09/citys-professor-nabil-aouf-leads-on-the-nato-science-for-peace-and-security-programmes-sapience-drone-competition-project" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg inline-block">Read More</a> */}
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

        {/* 4 Lead Section */}
        <section className="team-section py-16 bg-customBlue text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Project Leads</h2>
            <div className="team-grid">
              <div className="team-member">
                <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
                <p className="team-name">Prof. Nabil Aouf</p>
                <p className="team-country">NATO Country Project Director</p>
                <p className="team-role">City, University of London</p>
              </div>
              <div className="team-member">
                <img src={stephanImage} alt="Prof. Stephan Weiss" className="team-img" />
                <p className="team-name">Prof. Stephan Weiss</p>
                <p className="team-country">Partner Country Project Director</p>
                <p className="team-role">University of Klagenfurt</p>
              </div>
              <div className="team-member">
                <img src={bryanImage} alt="Dr. Bryan Mesmer" className="team-img" />
                <p className="team-name">Dr. Bryan Mesmer</p>
                <p className="team-country">Project Co-Director</p>
                <p className="team-role">The University of Alabama in Huntsville</p>
              </div>
              <div className="team-member">
                <img src={ewoudImage} alt="Dr.Ir. Ewoud Smeur" className="team-img" />
                <p className="team-name">Dr. Ir. Ewoud Smeur</p>
                <p className="team-country">Project Co-Director</p>
                <p className="team-role">Delft University of Technology</p>
              </div>
            </div>
          </div>
        </section>



        {/* Document Section */}
        <section className="document-section py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="document-text text-4xl font-bold mb-8 text-white">Read and Download the Leaflet</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
              <div className="w-full md:w-4/5">
                <a href="/IBP_Problemstatement.docx" download className="block text-customBlack text-xl font-bold mb-4">Download the Leaflet</a>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <div className="w-full h-64 object-cover rounded-lg shadow-lg bg-white flex items-center justify-center">
                  <p>Placeholder</p>
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
