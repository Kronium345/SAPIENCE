import React from 'react';
import img1 from '../../assets/activities/img1.png';
import img2 from '../../assets/activities/img2.png';
import img3 from '../../assets/activities/img3.png';
import img4 from '../../assets/activities/img4.png';
import img5 from '../../assets/activities/img5.png';
import img6 from '../../assets/activities/img6.png';

// import bannerImage from '../../assets/sapience/bannerImage.png';
import './Activities.css';

const Activities = () => {
  return (
    <div className="activities-page">
      {/* <section
        className="hero text-center"
        style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
      >
        <div className="container mx-auto">
          <h1 className="hero-title">SAPIENCE Activities</h1>
        </div>
      </section> */}

      <section className="activity-gallery py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Activity Gallery</h2>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Search and Rescue Missions</h3>
            <img src={img1} alt="Search and Rescue Missions" className="mx-auto mb-4" />
            <p className="mb-4">
              The Search and Rescue missions involve collaborative or cooperative multiple drones investigating different indoor and outdoor settings in a disaster area. The objective is to navigate, map, and locate targets in a GPS-denied environment.
            </p>
          </div>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Increasing Perception Autonomy</h3>
            <img src={img2} alt="Increasing Perception Autonomy" className="mx-auto mb-4" />
            <p className="mb-4">
              The focus here is on enhancing the level of perception autonomy through artificial intelligence deployed onboard the fleet of multiple air vehicles capable of navigating, mapping, and locating targets.
            </p>
          </div>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Guidance Autonomy</h3>
            <img src={img3} alt="Guidance Autonomy" className="mx-auto mb-4" />
            <p className="mb-4">
              This involves improving the guidance autonomy through artificial intelligence deployed onboard the fleet of multiple air vehicles, capable of sensing and avoiding obstacles, planning, and replanning tasks, showing resilience to faults and adversarial attacks.
            </p>
          </div>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Indoor Mapping and Object Detection</h3>
            <img src={img4} alt="Competition 1" className="mx-auto mb-4" />
            <p className="mb-4">
              The first competition focuses on mapping the environment using drones in a GNSS-denied environment, detecting objects, and delivering aid packages. The tasks are judged based on map quality, object detection accuracy, and precision in aid delivery.
            </p>
          </div>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Outdoor Mapping and Rapid Tasks</h3>
            <img src={img5} alt="Competition 2" className="mx-auto mb-4" />
            <p className="mb-4">
              The second competition involves outdoor mapping, identifying injured persons, performing rapid tasks like delivering packages, and demonstrating cooperative responses to simulated emergency events.
            </p>
          </div>

          <div className="activity-item">
            <h3 className="text-2xl font-bold mb-4">Combined Indoor and Outdoor Search and Rescue</h3>
            <img src={img6} alt="Competition 3" className="mx-auto mb-4" />
            <p className="mb-4">
              The final competition combines indoor and outdoor flight tasks, requiring drones to map, identify buildings, enter marked buildings, identify spoken needs, and deliver help goods while managing potential sensor failures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
