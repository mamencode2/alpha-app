import React, { useEffect, useState } from "react";
import { useQuiz } from "../../contexts/QuizContextProvider";
import { Box, Grid, IconButton } from "@mui/material";
import useSound from "use-sound";
import corrSound from "../../api/sounds/sucss.mp3";
import completed from "../../api/sounds/completed.mp3";

function QtnOneThree() {
  const { currQtn, checkAnswer, nextQtnh, isLastQtn } = useQuiz();
  //const [qtn, setQtn] = useState();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selAns, setSelAns] = useState();
  let isLast = isLastQtn === currQtn.qId;
  let sdEffect = isLast ? completed : corrSound;
  const [play] = useSound(sdEffect);

  function handleSubmitAnswer(selIndex) {
    let resAns = checkAnswer(selIndex);
    //console.log(resAns);
    setIsAnswerCorrect(resAns);
    if (resAns) {
      play();
    }
    setSelAns(
      currQtn.questionsAnswerChoices.find((el, i) => i === selIndex.answerIndex)
    );
  }

  function handleGotoNext(seks) {
    nextQtnh(seks);
    setIsAnswerCorrect(null);
    setSelAns(undefined);
  }
  //console.log(isLast);

  return (
    <div
      style={{
        padding: "0 13px",
        background: "#ffff",
        paddingTop: "13px",
        textAlign: "center"
      }}
    >
      {isLast && isAnswerCorrect !== null ? (
        <div className="">done</div>
      ) : (
        <>
          <div
            className=""
            style={{
              padding: "20px 5px"
            }}
          >
            <h3>{currQtn.questionText}</h3>
          </div>

          <div
            className=""
            style={{
              maxWidth: "70vw",
              alignItems: "center",
              margin: "0 auto"
            }}
          >
            <img
              src={currQtn.questionSign}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "300px"
              }}
            />
          </div>
          <Grid
            container
            spacing={1}
            sx={{
              paddingTop: "10px"
            }}
          >
            {currQtn.questionsAnswerChoices.map((ans, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  role="button"
                  sx={{
                    border:
                      isAnswerCorrect === null
                        ? "2px solid gray"
                        : isAnswerCorrect && index === currQtn.correctAnswer
                        ? "2px solid green"
                        : !isAnswerCorrect && index === currQtn.correctAnswer
                        ? "2px solid #40F8FF"
                        : "2px solid grey",
                    display: "flex",
                    borderRadius: "5px",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "120px"
                  }}
                  onClick={() => {
                    if (isAnswerCorrect === null) {
                      let selAnswer = {
                        answerIndex: index,

                        qId: currQtn.qId
                      };
                      handleSubmitAnswer(selAnswer);
                    } else {
                      return;
                    }
                  }}
                >
                  <div
                    className=""
                    style={{
                      padding: "5px"
                    }}
                  >
                    <img
                      src={ans.qtnImg}
                      alt=""
                      style={{
                        width: "90%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <div className="">
                    <span
                      style={{
                        fontSize: "12px"
                      }}
                    >
                      {ans.qtnText}
                    </span>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
          {isAnswerCorrect !== null && (
            <div className="">
              <Box
                role="button"
                sx={{
                  bgcolor: isAnswerCorrect ? "#28ac64" : "#de4f41",
                  lineHeight: "50px",
                  fontWeight: "700",
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center",
                  alignContent: "center",
                  borderRadius: "10px",
                  position: "absolute",
                  bottom: 10,
                  width: "90%"
                }}
                onClick={() => {
                  let stsObj = {
                    qId: currQtn.qId,
                    isCorrect: isAnswerCorrect,
                    selAns
                  };
                  handleGotoNext(stsObj);
                }}
              >
                <span>{isAnswerCorrect ? "ትክክለኛ መልስ" : "ጥሩ ሙከራ continue"}</span>
              </Box>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QtnOneThree;
