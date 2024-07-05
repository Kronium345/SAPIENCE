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
import softLanding from '../../assets/activities/soft-landing.jpg'
import comp2 from '../../assets/activities/Comp2.jpg';
import mapping from '../../assets/activities/mapping.jpg';
import objectDetection from '../../assets/activities/ObjectDetection.jpg';
import guidanceNavigation from '../../assets/activities/guidance-example-1.jpg';
import taskAllocation from '../../assets/activities/task-allocation-example6.jpg';
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
              <img src={mapping} alt="Mapping" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Mapping</h3>
                <p className="mb-4">
                Drones will create high-quality digital maps of unknown spaces by fusing data from various sensors. This capability provides valuable situational awareness to robots and humans, allowing them to gain prior knowledge of an area without exposing themselves to danger. The detailed maps produced can aid in planning, navigation, and decision-making processes, especially in challenging or hazardous environments.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={objectDetection} alt="Object Detection" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Object Detection</h3>
                <p className="mb-4">
                Drones must identify, classify, and locate objects within their working areas. This capability is crucial for search and rescue missions, where faster detection of missing persons increases their chances of survival, and accurate identification of hazards enhances mission safety. By improving object detection capabilities, drones can effectively support emergency responders and ensure safer operations in a variety of scenarios.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={softLanding} alt="Soft Landing" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Soft Landing</h3>
                <p className="mb-4">
                Demonstrating safe and precise landings, drones will operate delicately in sensitive or hazardous environments. This feature ensures the safe delivery of aid and reduces the risk of damage to equipment and surroundings. By perfecting soft landing techniques, drones can be relied upon to perform critical tasks in areas where human intervention may be dangerous or impractical.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={guidanceNavigation} alt="Guidance and Navigation" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Guidance and Navigation</h3>
                <p className="mb-4">
                Drones will navigate complex environments independently, without human intervention. This autonomy removes the need for a controller, lowering operational costs and increasing efficiency. Enhanced guidance and navigation systems enable drones to adapt to dynamic situations, avoid obstacles, and execute missions with high precision and reliability.
                </p>
              </div>
            </div>

            <div className="activity-item">
              <img src={taskAllocation} alt="Task Allocation" className="activity-image" />
              <div className="activity-content">
                <h3 className="text-2xl font-bold mb-4">Task Allocation</h3>
                <p className="mb-4">
                Drones will coordinate to distribute tasks efficiently, showcasing advanced collaborative capabilities. This leads to better resource utilisation, quicker task completion, and effective operation in communication-denied environments. By demonstrating autonomous task allocation, drones can handle complex missions effectively, reducing the need for constant human oversight and improving overall mission success rates.
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
                The first competition challenges drones to navigate a GPS-denied environment, simulating a disaster-stricken building. Drones must rely on onboard sensors and advanced navigation algorithms to manoeuvre through confined spaces and create detailed maps of the area. Additionally, drones must identify people in need, detect hazards and obstacles, and deliver aid to those requiring assistance. This competition tests the drones' ability to operate effectively in close quarters and under challenging conditions.
                </p>
              </div>
            </div>

            <div className="competition-item">
              <h3 className="text-2xl font-bold mb-4">Competition 2: Outdoor Environment</h3>
              <div className="activity-images">
                <img src={img5} alt="Outdoor Competition Image 1" className="activity-image" />
                <img src={comp2} alt="Outdoor Competition Image 2" className="activity-image" />
                <img src={competition2} alt="Outdoor Competition Image 3" className="activity-image" />
              </div>
              <div>
                <p className="mb-4">
                Set in an outdoor environment, this competition focuses on locating injured persons and delivering supplies. It consists of two phases: the first phase involves mapping the area, and the second phase features a collaborative aid delivery task. Teams must adapt to dynamic changes in mission objectives, emphasising their ability to work together. The outcome highlights the importance of collaboration, with teams demonstrating their capability to perform aid delivery tasks under evolving conditions.
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
                This competition combines both indoor and outdoor environments, requiring teams to switch between different sensor systems. Tasks include mapping, object recognition, and taking appropriate actions based on the identified objects. The aim is to test the robustness and adaptability of the teams' solutions in varied settings. Teams will use a combination of sensors to navigate and perform tasks effectively, showcasing their ability to handle diverse and complex scenarios.
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
