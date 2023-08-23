import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QtnHeader from "./QtnHeader";
import { Box, Grid, IconButton } from "@mui/material";
import useSound from "use-sound";
import corrSound from "../../api/sounds/sucss.mp3";
import completed from "../../api/sounds/completed.mp3";
import { useQuiz } from "../../contexts/QuizContextProvider";

function QtnSortOrder() {
  const { currQtn, checkAnswer, nextQtnh, isLastQtn } = useQuiz();

  let navigate = useNavigate();
  const [sortedOrder, setSortedOrder] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [selAns, setSelAns] = useState();
  let isLast = isLastQtn === currQtn.qId;
  let sdEffect = isLast ? completed : corrSound;
  const [play] = useSound(sdEffect);


  
  let currQtnn = {
    questionText: "ይህ ምልክት የ ምንድን ነው?",
    questionSign: "https://i.imgur.com/eJJKjg8.gif",
    questionsAnswerChoices: ["መኪና", "ቤት", "ቆንጆ", "መጥፎ", "አቮካዶ"],
    correctAnswer: "ቆንጆ ቤት"
  };

  function handleSortingItem(item) {
    if (sortedOrder.findIndex((el) => el === item) === -1) {
      let newArr = [...sortedOrder, item];
      setSortedOrder(newArr);
    } else {
      let filterdArr = sortedOrder.filter((el) => el !== item);

      setSortedOrder(filterdArr);
    }
  }

  function handleSubmit() {
    let strCont = `${sortedOrder.map((el) => el)}`;

    let answerR = strCont.split(",").join(" ");
    if (answerR === currQtn.correctAnswer) {
      setIsAnswerCorrect(true);
      play();
    } else {
      setIsAnswerCorrect(false);
    }
  }
  return (
    <div
      style={{
        padding: "0 13px",
        background: "#ffff",
        paddingTop: "5px",
        textAlign: "center"
      }}
    >
      {/* <QtnHeader onClick={() => {}} /> */}
      {isLast && isAnswerCorrect !== null ? (
        <div className="">done</div>
      ) : (
        <>
          <>
            <div
              className=""
              style={{
                padding: "10px 5px"
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
            <Box
              sx={{
                marginTop: "10px",
                border: "2px solid #40F8FF",
                height: "25px",
                borderRadius: "5px"
              }}
            >
              <p>
                {sortedOrder.map((item, i) => (
                  <span key={i} style={{ marginRight: "5px", padding: "5px" }}>
                    {item}
                  </span>
                ))}
              </p>
            </Box>

            <Grid
              container
              className=""
              sx={{
                marginTop: "10px",
                background: "#fff"
              }}
            >
              {currQtn.questionsAnswerChoices.map((item, i) => (
                <OptionItem
                  key={i}
                  item={item}
                  index={i}
                  onClick={() => {
                    if (isAnswerCorrect === null) {
                      handleSortingItem(item);
                    }
                  }}
                  isExisted={sortedOrder.findIndex((el) => el === item) !== -1}
                />
              ))}
            </Grid>
          </>
          <div className="">
            {isAnswerCorrect === null ? (
              <>
                {sortedOrder.length > 0 && (
                  <Box
                    role="button"
                    sx={{
                      bgcolor: "#40F8FF",
                      lineHeight: "50px",
                      fontWeight: "700",
                      color: "white",
                      fontSize: "20px",
                      textAlign: "center",
                      alignContent: "center",
                      borderRadius: "10px",

                      width: "90%"
                    }}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Box>
                )}
              </>
            ) : (
              <>
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
                    width: "90%"
                  }}
                  onClick={() => {}}
                >
                  <span>
                    {isAnswerCorrect ? "ትክክለኛ መልስ" : "ጥሩ ሙከራ continue"}
                  </span>
                </Box>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function OptionItem({ item, index, isExisted, onClick }) {
  function handkeClicking(item) {
    //console.log(item);
    onClick(item);
  }
  return (
    <Grid item xs={3} sx={{}}>
      <Box
        role="button"
        onClick={() => {
          handkeClicking(item);
        }}
        sx={{
          p: 0.5,
          m: 1,
          border: isExisted ? "2px solid green" : "1px solid gray",
          borderRadius: "5px"
        }}
      >
        {item}
      </Box>
    </Grid>
  );
}

export default QtnSortOrder;
