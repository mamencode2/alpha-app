import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect
} from "react";
import { dicData, extrDic, amharicRep } from "../api/dicData";
import { questions } from "../api/qNa";
//import {question} from '../api/'
const QuizContext = createContext();


export function useQuiz() {
  return useContext(QuizContext);
}
export function QuizContextProvider({ children }) {
  const [currentQIndex, setQtnIndex] = useState(0);
  const [score, setScore] = useState(210);
  const [quizStat, setQuizStat] = useState([]);
  const [currQtn, setCurrQtn] = useState(questions[currentQIndex]);
  const [isLastQtn, setIsLastQtn] = useState(
    questions[questions.length - 1].qId
  );

  console.log("data", amharicRep);
  //let currQtn = questions[currentQIndex];
  //console.log(questions.findLastIndex((el) => el.qId));
  function handleCheckAnswer(subAnswer) {
    let { answerIndex, qId } = subAnswer;

    //setIsLastQtn(questions.findLastIndex((el) => el.qId) === qId);
    let corrAnser =
      questions.find((qtn) => qtn.qId === qId).correctAnswer === answerIndex;
    if (corrAnser) {
      setScore(score + 10);
    }
    return corrAnser;
  }

  function handleNextQuestion(currQtnStat) {
    if (quizStat.findIndex((el) => el.qId === currQtnStat.qId) === -1) {
      let newsts = [...quizStat, currQtnStat];
      setQuizStat(newsts);
      setQtnIndex(currentQIndex + 1);
    } else {
    }
  }

  useEffect(() => {
    setCurrQtn(questions[currentQIndex]);
  }, [currentQIndex]);

  let values = {
    currentQIndex,
    score,
    currQtn,
    isLastQtn,
    checkAnswer: handleCheckAnswer,
    nextQtnh: handleNextQuestion
  };
  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
}

//export default QuizContextProvider
