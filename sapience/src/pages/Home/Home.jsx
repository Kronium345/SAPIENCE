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
      {/* Hero Section */}
      <section className="hero h-screen flex flex-col items-center justify-center text-center">
        <div className="hero-content">
          <h2 className="intro-title">SAPIENCE</h2>
          <p className="intro-subtitle">Sense & Avoid - a cooPeratIvE droNe CompEtition</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro py-16 bg-gray-200 text-center">
        <div className="intro-container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Sapience</h2>
          <p className="text-xl intro-text">
            This research program is designed as multiple challenges/contests defined for competing teams from multiple leading universities located in NATO member states and NATO partner nations.
          </p>
          <p className="text-3xl intro-text text-red-500 font-bold mt-4">
            This project’s is interest areas are:
          </p>
          <div className="research-areas-grid">
            <div className="research-area-tile">
              <FaRoute size={48} className="icon" />
              <p className="mt-4">Search & Rescue Missions</p>
              <p className="description">Done for collaborative or cooperative multiple drones investigating different indoor and outdoor settings in a disaster area.</p>
            </div>
            <div className="research-area-tile">
              <FaSatelliteDish size={48} className="icon" />
              <p className="mt-4">Increasing the level of perception autonomy</p>
              <p className="description">Done through the artificial intelligence deployed onboard the fleet of multiple air vehicles.</p>
            </div>
            <div className="research-area-tile">
              <FaPlane size={48} className="icon" />
              <p className="mt-4">Autonomous Cyber (Cyber Soft/Cyber Physical)</p>
              <p className="description">Said vehicles are capable of sensing and avoiding obstacles, planning and replanning tasks and showing resilience</p>
            </div>
          </div>
          <a href="https://www.city.ac.uk/news-and-events/news/2023/09/citys-professor-nabil-aouf-leads-on-the-nato-science-for-peace-and-security-programmes-sapience-drone-competition-project" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg inline-block">Read More</a>
        </div>
      </section>

      {/* 4 Lead Section */}
      <section className="team-section py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Project Co-Directors</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={nabilImage} alt="Prof. Nabil Aouf" className="team-img" />
              <p className="team-name">Prof. Nabil Aouf</p>
              <p className="team-role">City University of London</p>
              <p className="team-country">United Kingdom</p>
              {/* <p className="team-email">nabil.aouf@city.ac.uk</p> */}
            </div>
            <div className="team-member">
              <img src={stephanImage} alt="Prof. Stephan Weiss" className="team-img" />
              <p className="team-name">Prof. Stephan Weiss</p>
              <p className="team-role">University of Klagenfurt</p>
              <p className="team-country">Austria</p>
              {/* <p className="team-email">stephan.weiss@aau.at</p> */}
            </div>
            <div className="team-member">
              <img src={bryanImage} alt="Dr. Bryan Mesmer" className="team-img" />
              <p className="team-name">Dr. Bryan Mesmer</p>
              <p className="team-role">The University of Alabama in Huntsville</p>
              <p className="team-country">United States</p>
              {/* <p className="team-email">Bryan.Mesmer@uah.edu</p> */}
            </div>
            <div className="team-member">
              <img src={ewoudImage} alt="Dr.Ir. Ewoud Smeur" className="team-img" />
              <p className="team-name">Dr.Ir. Ewoud Smeur</p>
              <p className="team-role">Delft University of Technology</p>
              <p className="team-country">Netherlands</p>
              {/* <p className="team-email">e.j.j.smeur@tudelft.nl</p> */}
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

      {/* Document Section */}
      <section className="document-section py-16 bg-gradient-to-r from-red-300 via-gray-200 to-red-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-red-500">Read and Download the Leaflet</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4 max-w-4xl mx-auto">
            <div className="w-full md:w-4/5">
              <a href="/IBP_Problemstatement.docx" download className="block text-red-500 text-xl font-bold mb-4">Download the Leaflet</a>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <img src={previewImage1} alt="Preview 1" className="w-full h-full object-cover rounded-lg shadow-lg mb-4" />
              <img src={previewImage2} alt="Preview 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
