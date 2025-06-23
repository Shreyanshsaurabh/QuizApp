import React, { useState } from 'react';
import './start.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './nav';
import Quiz from './quiz';

const Start = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [category, setCategory] = useState('Physics');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    navigate("/quiz", {state: {name,difficulty,category}});
  };

  return (
    <>
      <Navbar />
      <div className='whole'>
        <form className='container' onSubmit={handleSubmit}>
          <label>
            Enter Your Name:
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Choose Difficulty:
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label>
            Choose Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Maths">Maths</option>
            </select>
          </label>
          <button type='submit' >Submit</button>
        </form>
      </div>
    </>
  );
};

export default Start;
