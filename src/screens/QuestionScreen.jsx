import React, { useState } from "react";
import Sticky from "react-stickynode";
import { ArrowBackIosOutlined, DiamondOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box, Grid, IconButton } from "@mui/material";
import { questions } from "../api/qNa";
import { QuizContextProvider } from "../contexts/QuizContextProvider";
import QtnConsumers from "./QtnConsumers";
function QuestionScreen() {
  const [currentQtnIndex, setCurrQIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <QtnConsumers />
    </>
  );
}

export default QuestionScreen;
