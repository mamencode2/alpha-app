import React from "react"

import {QuizContextProvider}from './contexts/QuizContextProvider'
import MainRouterScreen from "./routes/MainRouterScreen"

export default function App(){
  return(
    <QuizContextProvider>
    <div>

      <MainRouterScreen/>
    </div>
    </QuizContextProvider>
  )
}


function Qheader() {
  return(
    <div>
      qheadet ghfduit
    </div>
  )
}
