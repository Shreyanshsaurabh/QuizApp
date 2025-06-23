
import React,{useState,useRef,useEffect} from 'react'
import './nav.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Quiz from './quiz';
import Start from './start';
import About from './about';
import App from '../../App';
function Navbar(){
  return (
    
    <div>
      <nav className="navbar">
    <img className="logo" alt="logo" src='/logo.png'></img>
    <ul className="nav-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/start">Start Quiz</Link></li>
      <li><a href="/leaderboard">Leaderboard</a></li>
     <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
    
    </div>
    
  );
};
export default Navbar;