import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './leaderboard.css';
import Navbar from './nav';

const Leaderboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const name = state?.name || "Anonymous";
  const score = state?.score ?? 0;
  const category = state?.category || "Anonymous";
   const difficulty = state?.difficulty || "Anonymous";

  return (
    <>
      <Navbar />
      <div className="leaderboard-container">
        <h1>🏆 Leaderboard</h1>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Category</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{name}</td>
              <td>{score}</td>
              <td>{category}</td>
              <td>{difficulty}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
