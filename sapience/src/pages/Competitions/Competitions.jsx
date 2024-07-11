import React from 'react';
import './Competitions.css';

const Competitions = () => {
  return (
    <div className="competitions-page">
      <div className="container">
        <section className="competitions-header text-center">
          <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black">Competitons</h2>
          </div>
        </section>

        {/* Competition 1 Section */}
        <section className="competition-section py-16 bg-customdDarkBlue text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Competition 1: Indoor Mapping and Object Detection</h2>
            <p className="text-xl mb-4">Location: City, University of London Autonomous Systems Arena</p>
            <p className="text-xl mb-4">Dates: 29th - 30th August 2024</p>
            <div className="competition-details">
              <h3 className="text-2xl font-semibold mb-4">Rounds</h3>
              <p className="text-lg mb-4">
                Round 1: Mapping the Environment - Construct a map using two drones, navigating various hazards.
              </p>
              <p className="text-lg mb-4">
                Round 2: Object Detection - Detect and note positions of objects like hazardous containers and injured mannequins.
              </p>
              <p className="text-lg mb-4">
                Round 3: Aid Delivery - Deliver aid packages to mannequins at specific locations.
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
        <section className="competition-section py-16 bg-customDarkBlue text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Competition 2: Outdoor Mapping and Rapid Tasks</h2>
            <p className="text-xl mb-4">Location: Huntsville, Alabama, USA</p>
            <p className="text-xl mb-4">Dates: Spring 2025</p>
            <div className="competition-details">
              <h3 className="text-2xl font-semibold mb-4">Scenarios</h3>
              <p className="text-lg mb-4">
                Scenario 1: Mapping and Identification - Explore and map a portion of the outdoor environment, detecting injured persons.
              </p>
              <p className="text-lg mb-4">
                Scenario 2: Rapid-fire Tasks - Perform a series of tasks in a given time, such as delivering packages and monitoring targets.
              </p>
              <p className="text-lg mb-4">
                Scenario 3: Demonstration - Cooperatively respond to a simulated emergency event.
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
        <section className="competition-section py-16 bg-customDarkBlue text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Competition 3: Combined Indoor and Outdoor Search and Rescue</h2>
            <p className="text-xl mb-4">Location: Delft, Netherlands</p>
            <p className="text-xl mb-4">Dates: Spring 2026</p>
            <div className="competition-details">
              <h3 className="text-2xl font-semibold mb-4">Tasks</h3>
              <p className="text-lg mb-4">
                Task 1: Mapping and Building Identification - Create a map and identify coordinates of marked buildings.
              </p>
              <p className="text-lg mb-4">
                Task 2: Entering Marked Buildings - Find and enter marked buildings to locate persons in need.
              </p>
              <p className="text-lg mb-4">
                Task 3: Identify Spoken Needs - Record and identify spoken needs of found persons.
              </p>
              <p className="text-lg mb-4">
                Task 4: Deliver Aid Goods - Deliver packages to persons as requested.
              </p>
              <p className="text-lg mb-4">
                Task 5: Contingency Planning - Handle sensor failures during missions.
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
      </div>
    </div>
  );
};

export default Competitions;
