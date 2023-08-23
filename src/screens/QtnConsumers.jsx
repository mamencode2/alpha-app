import { ArrowBackIosOutlined, DiamondOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import corrSound from "../api/sounds/sucss.mp3";
import completed from "../api/sounds/completed.mp3";



import Sticky from "react-stickynode";
import QtnOneThree from "../components/qtnLayout/QtnOneThree";
import { useQuiz } from "../contexts/QuizContextProvider";
import QtnHeader from "../components/qtnLayout/QtnHeader";
import QtnSortOrder from "../components/qtnLayout/QtnSortOrder";

function QtnConsumers() {
  const { score, currQtn } = useQuiz();
  //console.log(currQtn.qtnType);
  let navigate = useNavigate();
  return (
    <div>
      <QtnHeader onClick={() => navigate("/")} />

      {currQtn.qtnType === "oneThreeChoice" && <QtnOneThree />}
      {currQtn.qtnType === "twoChoice" && <QtnContent />}
      {currQtn.qtnType === "sortOrderT" && <QtnSortOrder />}
    </div>
  );
}

function QtnContent() {
  const { currQtn, checkAnswer, nextQtnh, isLastQtn } = useQuiz();
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selAns, setSelAns] = useState();

  let isLast = isLastQtn === currQtn.qId;
  let sdEffect = isLast ? completed : corrSound;
  const [play] = useSound(sdEffect);

  //const [play] = useSound(corrSound);
  //console.log(isLast);
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

  function handleGotoNext(sts) {
    nextQtnh(sts);
    setIsAnswerCorrect(null);
    setSelAns(undefined);
  }
  // console.log(currQtn);

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

          {isAnswerCorrect === null ? (
            <>
              <div className="">
                <Grid container spacing={2}>
                  {currQtn.questionsAnswerChoices.map((answer, index) => (
                    <Grid
                      item
                      xs={6}
                      key={index}
                      sx={{
                        p: 1
                      }}
                    >
                      <Box
                        role="button"
                        onClick={() => {
                          let selAnswer = {
                            answerIndex: index,

                            qId: currQtn.qId
                          };
                          handleSubmitAnswer(selAnswer);
                        }}
                        className=""
                        sx={{
                          border: "2px solid gray",
                          borderRadius: "10px"
                        }}
                      >
                        <div
                          className=""
                          style={{
                            padding: "20px 10px"
                          }}
                        >
                          <span
                            style={{
                              fontSize: "40px",
                              marginBottom: "15px"
                            }}
                          >
                            <img
                              src={answer.qtnImg}
                              alt=""
                              style={{
                                width: "50px",
                                height: "auto"
                              }}
                            />

                            {/* {answer.qtnImg} */}
                          </span>
                        </div>
                        <div
                          className=""
                          style={{
                            padding: "20px 10px"
                          }}
                        >
                          <img
                            src={answer.qtnSign}
                            alt=""
                            style={{
                              width: "100%",
                              height: "210px"
                            }}
                          />
                        </div>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </>
          ) : (
            <>
              <div
                className=""
                style={{
                  maxWidth: "70vw",
                  alignItems: "center",
                  margin: "0 auto"
                }}
              >
                <Box
                  sx={{
                    border: isAnswerCorrect
                      ? "3px solid #28ac64"
                      : "3px solid #40F8FF",
                    borderRadius: "10px",
                    width: "100%"
                  }}
                >
                  <div
                    className=""
                    style={{
                      padding: "20px 10px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "40px",
                        marginBottom: "15px"
                      }}
                    >
                      <img
                        src={selAns.qtnImg}
                        alt=""
                        style={{
                          width: "80px",
                          height: "auto"
                        }}
                      />

                      {/* {answer.qtnImg} */}
                    </span>
                  </div>
                  <div
                    className=""
                    style={{
                      padding: "10px"
                    }}
                  >
                    <img
                      src={selAns.qtnSign}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "300px"
                      }}
                    />
                  </div>
                </Box>
              </div>
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
                  <span>
                    {isAnswerCorrect ? "ትክክለኛ መልስ" : "ጥሩ ሙከራ continue"}
                  </span>
                </Box>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default QtnConsumers;
