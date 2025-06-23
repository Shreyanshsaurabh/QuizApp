import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { physics } from '../../assets/physics';
import { chemistry } from '../../assets/chemistry';
import { maths } from '../../assets/maths';
import Leaderboard from './leaderboard';
import './quiz.css';
import Navbar from './nav';

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, category, difficulty } = location.state || {};


  let questions;
  if (category === "Physics") questions = physics;
  else if (category === "Chemistry") questions = chemistry;
  else if (category === "Maths") questions = maths;
  else questions = [];

  const [index, setIndex] = useState(0);
  const [i, seti] = useState(0);
  const [question, setQuestion] = useState(questions[null]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);

useEffect(() => {
  switch (difficulty) {
    case "Easy":
      setIndex(0);
      break;
    case "Medium":
      setIndex(5);
      break;
    case "Hard":
      setIndex(10);
      break;
    default:
      setIndex(0);
  }
}, [difficulty]);

useEffect(() => {
  if (questions.length > 0) {
    setQuestion(questions[index]);
  }
}, [index, questions]);


  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  const option_array = [option1, option2, option3, option4];


  useEffect(() => {
    if (lock) return;

    const countdown = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(countdown);
          setLock(true);
          option_array[question.ans - 1].current.classList.add("Correct");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [index, lock]);

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("Correct");
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("Wrong");
        option_array[question.ans - 1].current.classList.add("Correct");
      }
      setLock(true);
    }
  };

  if(i>4){navigate("/leaderboard", { state: { name,score,category,difficulty } });}

  const next = () => {
  if (!lock) return;

  const newIndex = index + 1;
  seti(prev => prev + 1);
  setIndex(newIndex);
  setQuestion(questions[newIndex]);
  setLock(false);
  setTimer(15);
  option_array.forEach(option => {
    option.current.classList.remove("Wrong");
    option.current.classList.remove("Correct");
  });
};


  if (!question) return <div>No questions available.</div>;

  return (
    <>
     <Navbar />
    <div className='container'>
     
      <h1>Quiz App</h1>
      <hr />
      <h2>{i + 1}. {question.question}</h2>
      <ul>
        <li ref={option1} onClick={(e) => checkAns(e, 1)}>{question.option1}</li>
        <li ref={option2} onClick={(e) => checkAns(e, 2)}>{question.option2}</li>
        <li ref={option3} onClick={(e) => checkAns(e, 3)}>{question.option3}</li>
        <li ref={option4} onClick={(e) => checkAns(e, 4)}>{question.option4}</li>
      </ul>
      <h1 className='timer'>Time Left: {timer}s</h1>
      <h2>Score : {score}</h2>
      <button onClick={next}>Next</button>
      <div className='index'>{i + 1} of 5 Questions</div>
    </div>
    </>
  );
};

export default Quiz;
