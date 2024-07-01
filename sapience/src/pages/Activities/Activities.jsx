import React from 'react';
import img1 from '../../assets/activities/img1.png';
import img2 from '../../assets/activities/img2.png';
import img3 from '../../assets/activities/img3.png';
import img4 from '../../assets/activities/img4.png';
import img5 from '../../assets/activities/img5.png';
import img6 from '../../assets/activities/img6.png';
import mixed2 from '../../assets/activities/mixed2.jpg';
import mixed3 from '../../assets/activities/mixed3.jpg';
import indoor2 from '../../assets/activities/indoor2.jpg';
import indoor3 from '../../assets/activities/indoor3.jpg';
import outdoor2 from '../../assets/activities/outdoor2.jpg';
import outdoor3 from '../../assets/activities/outdoor3.jpg';
import competition1 from '../../assets/competition1-image.jpeg';
import competition2 from '../../assets/competition2-image.jpeg';
import competition3 from '../../assets/competition3-image.png';
import './Activities.css';

const Activities = () => {
  return (
    <div className="activities-page">
      <section id="activities" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h2>Activity Gallery</h2>
            <p className="activities-intro"></p>
          </header>

          <div className="container">
            <div className="activity-item">
              <img src={img1} alt="Mapping" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Mapping</h3>
                <p className="mb-4">
                  Drones will create high-quality digital maps of unknown environments by fusing data from various sensors. This allows robots and humans to gain prior knowledge of an area without exposing themselves to danger.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={img2} alt="Object Detection" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Object Detection</h3>
                <p className="mb-4">
                  Drones must identify, classify, and locate objects within their working areas. This capability is crucial for search and rescue missions, where faster detection of missing persons increases their chances of survival, and accurate identification of hazards enhances mission safety.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={img3} alt="Soft Landing" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Soft Landing</h3>
                <p className="mb-4">
                  Demonstrating safe and precise landings, drones will operate delicately in sensitive or hazardous environments. This feature ensures the safe delivery of aid and reduces the risk of damage to equipment and surroundings.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={img3} alt="Guidance and Navigation" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Guidance and Navigation</h3>
                <p className="mb-4">
                  Demonstrating safe and precise landings, drones will operate delicately in sensitive or hazardous environments. This feature ensures the safe delivery of aid and reduces the risk of damage to equipment and surroundings.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={img3} alt="Task Allocation" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Task Allocation</h3>
                <p className="mb-4">
                  Drones will coordinate to distribute tasks efficiently, showcasing advanced collaborative capabilities. This leads to better resource utilisation, quicker task completion, and effective operation in communication-denied environments.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Detailed Competition Activities</h2>

            <div className="competition-item">
              <h3 className="text-2xl font-bold mb-4">Competition 1: Indoor Environment</h3>
              <div className="activity-images">
                <img src={img4} alt="Indoor Competition Image 1" className="activity-image" />
                <img src={indoor2} alt="Indoor Competition Image 2" className="activity-image" />
                <img src={competition1} alt="Indoor Competition Image 3" className="activity-image" />
              </div>
              <div>
                <p className="mb-4">
                  This competition involves exploring and mapping an indoor environment. The primary tasks include creating a map, detecting objects, and delivering aid packages. The outcome focuses on accuracy and speed. Each team will perform independently, demonstrating their capability to handle disaster scenarios in indoor settings. The teams use RGBD cameras and IMU for precise mapping and object detection.
                </p>
              </div>
            </div>

            <div className="competition-item">
              <h3 className="text-2xl font-bold mb-4">Competition 2: Outdoor Environment</h3>
              <div className="activity-images">
                <img src={img5} alt="Outdoor Competition Image 1" className="activity-image" />
                <img src={outdoor2} alt="Outdoor Competition Image 2" className="activity-image" />
                <img src={competition2} alt="Outdoor Competition Image 3" className="activity-image" />
              </div>
              <div>
                <p className="mb-4">
                  This competition is set in an outdoor environment, focusing on locating injured persons and delivering supplies. It is divided into two phases: mapping the area and a collaborative aid delivery task. The outcome emphasizes the collaborative efforts of multiple teams, adapting to dynamic changes in the mission objectives. In Phase 2, the teams collaborate to perform aid delivery tasks, demonstrating their ability to work together under changing conditions.
                </p>
              </div>
            </div>

            <div className="competition-item">
              <h3 className="text-2xl font-bold mb-4">Competition 3: Mixed Environment</h3>
              <div className="activity-images">
                <img src={img6} alt="Mixed Competition Image 1" className="activity-image" />
                <img src={mixed2} alt="Mixed Competition Image 2" className="activity-image" />
                <img src={competition3} alt="Mixed Competition Image 3" className="activity-image" />
              </div>
              <div>
                <p className="mb-4">
                  This competition combines indoor and outdoor environments, requiring teams to switch between different sensor systems. Tasks include mapping, object recognition, and taking appropriate actions based on the identified objects. The outcome is aimed at testing the robustness and adaptability of the teams' solutions in varied environments. The teams use a combination of indoor and outdoor sensors to navigate and perform tasks effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
