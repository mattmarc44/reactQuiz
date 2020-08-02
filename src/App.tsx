import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
//components
import QuestionCard from './components/QuestionCard';
//types
import { QuestionState, Difficulty } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 3;

function App() {
  //these are using our props from QuestionCard.tsx passed above via {useState}
  //this is so when questioncard in our return statement is called it knows them
  const [loading, setLoadiing] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia = async () => {
    setLoadiing(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoadiing(false);
  }


  //e is for event my man.
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>

      { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          start
        </button>
      ): null }
      
      { !gameOver ? <p className="score">Score = </p>: null }
      
      { loading && <p>Loading Questions...</p> }
    
      { !loading && !gameOver && (
        <QuestionCard 
        //is set to number + 1 because we don't want our users to see zero as the first question as its from an array.
        questionNr={number + 1}
        //easier to change it if we want to modify
        totalQuestions={TOTAL_QUESTIONS}
        //this is how we are accessing each prop needed.
        question={questions[number].question}
        answers={questions[number].answers}
        //if userAnswers get it, otherwise leave it undefined.
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}/>)
        //we've now passed all our props.
      }

      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
