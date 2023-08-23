import React, { useState } from "react";

export default function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);


  
  const handleQuestionChange = (e) => {
    const answer = e.target.value;
    setAnswers([...answers, answer]);
  };

  const handleSubmit = () => {
    const correctAnswers = questions[currentQuestionIndex].correctAnswers;
    const userAnswers = answers.slice(currentQuestionIndex);

    if (userAnswers.every((answer) => correctAnswers.includes(answer))) {
      setScore(score + 10);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    answers = [];
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((question, questionIndex) => (
        <Question
          key={questionIndex}
          questionText={question.questionText}
          answerChoices={question.answerChoices}
          correctAnswer={question.correctAnswers}
        />
      ))}
      <p>Current question: {currentQuestionIndex + 1}</p>
      <p>Score: {score}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function Question({ questionText, answerChoices, correctAnswer }) {
  return (
    <div>
      <h2>{questionText}</h2>
      <ul>
        {answerChoices.map((answerChoice, index) => (
          <li key={index}>
            <input type="radio" name="answer" value={answerChoice} />
            {answerChoice}
          </li>
        ))}
      </ul>
    </div>
  );
}
