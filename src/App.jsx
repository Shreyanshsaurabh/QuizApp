import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Quiz from './Component/Quiz/quiz';
import './App.css'
import About from './Component/Quiz/about';
import Start from './Component/Quiz/start';
import Navbar from './Component/Quiz/nav';
import Leaderboard from './Component/Quiz/leaderboard';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div className="intro" id="main">
  {/* Left Side */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    }}
  >
    <div className="explore">Quiz</div>
    <div className="exploredown">Test Your Mighty Brain.</div>
    <button  onClick={() => navigate('/start')} className="trendbutton">Start Quiz</button>
  </div>
  {/* Right Side */}
  <div className="quiz-container">
    <svg viewBox="0 0 300 200" width="100%" height="100%">
      {/* Card background */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx={0}
            dy={4}
            stdDeviation={5}
            floodColor="#000"
            floodOpacity="0.2"
          />
        </filter>
      </defs>
      {/* Card */}
      <rect
        x={20}
        y={20}
        width={260}
        height={160}
        rx={20}
        fill="#fff"
        filter="url(#shadow)"
      />
      {/* Header */}
      <text
        x={150}
        y={55}
        textAnchor="middle"
        fill="#4f46e5"
        fontSize={24}
        fontWeight="bold"
      >
        Quiz Time!
      </text>
      {/* Question */}
      <text x={150} y={85} textAnchor="middle" fill="#333" fontSize={16}>
        What is 2 + 2?
      </text>
      {/* Choices */}
      <g className="choice">
        <circle cx={80} cy={120} r={18} fill="#e0e7ff" />
        <text x={80} y={125} textAnchor="middle" fontSize={16} fill="#4f46e5">
          3
        </text>
      </g>
      <g className="choice">
        <circle cx={150} cy={120} r={18} fill="#d1fae5" />
        <text x={150} y={125} textAnchor="middle" fontSize={16} fill="#059669">
          4
        </text>
      </g>
      <g className="choice">
        <circle cx={220} cy={120} r={18} fill="#fee2e2" />
        <text x={220} y={125} textAnchor="middle" fontSize={16} fill="#dc2626">
          5
        </text>
      </g>
      {/* Bottom glow bar */}
      <rect x={90} y={150} width={120} height={8} rx={4} fill="#a78bfa">
        <animate
          attributeName="width"
          values="120;140;120"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
};

export default App;
