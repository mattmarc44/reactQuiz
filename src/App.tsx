import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
//components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 3;

function App() {
  //these are using our props from QuestionCard.tsx passed above via {useState}
  //this is so when questioncard in our return statement is called it knows them
  const [loading, setLoadiing] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  }


  //e is for event my man.
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        start
      </button>
      <p className="score">Score = </p>
      <p>Loading Questions...</p>
      
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
