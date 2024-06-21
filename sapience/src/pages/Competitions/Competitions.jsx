import React from 'react';
import './Competitions.css';

const Competitions = () => {
  return (
    <div className="competitions-page">
      <section className="competitions-header text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Competitions</h1>
        </div>
      </section>

      {/* Competition 1 Section */}
      <section className="competition-section py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Competition 1: Indoor Mapping and Object Detection</h2>
          <p className="text-xl mb-4">Location: City University of London Autonomous Systems Arena</p>
          <p className="text-xl mb-4">Dates: 26th - 30th August</p>
          <div className="competition-details">
            <h3 className="text-2xl font-semibold mb-4">Rounds</h3>
            <p className="text-lg mb-4">
              <strong>Round 1:</strong> Mapping the Environment - Construct a map using two drones, navigating various hazards.
            </p>
            <p className="text-lg mb-4">
              <strong>Round 2:</strong> Object Detection - Detect and note positions of objects like toxic containers and injured mannequins.
            </p>
            <p className="text-lg mb-4">
              <strong>Round 3:</strong> Aid Delivery - Deliver aid packages to mannequins at specific locations.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Technical Challenges</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Obstacle avoidance in a GNSS-denied environment</li>
              <li>Mapping under different lighting conditions</li>
              <li>Object recognition and localization</li>
              <li>Soft landing and UAS teaming/cooperation</li>
            </ul>
            {/* <h3 className="text-2xl font-semibold mb-4">Rules</h3>
            <ul className="list-disc list-inside mb-4">
              <li>A maximum of two drones can be flown at one time.</li>
              <li>Everyone must be outside of the safety netting while UAVs are armed.</li>
              <li>All UAVs must have an accessible kill switch that shuts off the rotors immediately.</li>
              <li>UAVs must fly below a flight ceiling of 2.5m at all times.</li>
            </ul> */}
          </div>
        </div>
      </section>

      {/* Competition 2 Section */}
      <section className="competition-section py-16 bg-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Competition 2: Outdoor Mapping and Rapid Tasks</h2>
          <p className="text-xl mb-4">Location: Huntsville, Alabama, USA</p>
          <p className="text-xl mb-4">Dates: Late Spring 2025</p>
          <div className="competition-details">
            <h3 className="text-2xl font-semibold mb-4">Scenarios</h3>
            <p className="text-lg mb-4">
              <strong>Scenario 1:</strong> Mapping and Identification - Explore and map a portion of the outdoor environment, detecting injured persons.
            </p>
            <p className="text-lg mb-4">
              <strong>Scenario 2:</strong> Rapid-fire Tasks - Perform a series of tasks in a given time, such as delivering packages and monitoring targets.
            </p>
            <p className="text-lg mb-4">
              <strong>Scenario 3:</strong> Demonstration - Cooperatively respond to a simulated emergency event.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Technical Challenges</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Sense and avoid</li>
              <li>Cooperative operations</li>
              <li>Mission planning and execution</li>
              <li>Obstacle avoidance in a high-traffic environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competition 3 Section */}
      <section className="competition-section py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Competition 3: Combined Indoor and Outdoor Search and Rescue</h2>
          <p className="text-xl mb-4">Location: Military Terrain Harskamp, Netherlands</p>
          <p className="text-xl mb-4">TBD</p>
          <div className="competition-details">
            <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
            <p className="text-lg mb-4">
              <strong>Task 1:</strong> Mapping and Building Identification - Create a map and identify coordinates of marked buildings.
            </p>
            <p className="text-lg mb-4">
              <strong>Task 2:</strong> Entering Marked Buildings - Find and enter marked buildings to locate persons in need.
            </p>
            <p className="text-lg mb-4">
              <strong>Task 3:</strong> Identify Spoken Needs - Record and identify spoken needs of found persons.
            </p>
            <p className="text-lg mb-4">
              <strong>Task 4:</strong> Deliver Help Goods - Deliver packages to persons as requested.
            </p>
            <p className="text-lg mb-4">
              <strong>Task 5:</strong> Contingency Planning - Handle sensor failures during missions.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Technical Challenges</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Data fusion from various sensors</li>
              <li>GNSS-denied environment navigation</li>
              <li>Obstacle avoidance</li>
              <li>Cooperative drone operations</li>
              <li>System operation under failure conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Criteria for Success */}
      {/* <section className="criteria-section py-16 bg-gray-300 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Criteria for Success</h2>
          <table className="success-table mx-auto">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Relative Weight</th>
                <th>Complete</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Competition details defined</td>
                <td>20%</td>
                <td>90%</td>
                <td>These criteria of success have been established on the plan that goes up to the end of competition 1.</td>
              </tr>
              <tr>
                <td>Purchase of equipment agreed and started</td>
                <td>20%</td>
                <td>70%</td>
                <td></td>
              </tr>
              <tr>
                <td>Design and building of the Rescue House</td>
                <td>20%</td>
                <td>50%</td>
                <td></td>
              </tr>
              <tr>
                <td>Teams Developing their solution towards competition 1</td>
                <td>30%</td>
                <td>20%</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section> */}
    </div>
  );
};

export default Competitions;
