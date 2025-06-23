import React from 'react';
import './about.css';
import Navbar from './nav'; 
const About = () => {
  return (
    <><Navbar/>
    <div className="about-container">
      <h1>About This Quiz App</h1>
      <p>
        This Quiz App is an interactive platform designed to help users test their knowledge across various subjects like Physics, Chemistry, and Maths. Users can choose their preferred category and difficulty level before starting the quiz. Each question offers immediate feedback, tracks your score, and allows you to navigate through the quiz at your own pace.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React:</strong> Frontend library for building dynamic UI</li>
        <li><strong>React Router:</strong> For routing and navigating between pages</li>
        <li><strong>CSS:</strong> Custom styling for the layout and visual feedback</li>
      </ul>

      <h2>What I Learned</h2>
      <ul>
        <li>How to manage component state effectively using useState and useRef</li>
        <li>Using seLocation and useParams to pass data between routes</li>
        <li>Creating modular code by separating datasets and UI logic</li>
        <li>Handling user input and visual feedback with conditional styling</li>
        <li>Basic debugging and avoiding common pitfalls with React state (like not mutating state directly)</li>
      </ul>

      <p>
        This project was a great opportunity to reinforce my understanding of React hooks and state-driven UI. I also improved my ability to handle conditional rendering and dynamic component updates based on user interactions.
      </p>
    </div></>
  );
};

export default About;
