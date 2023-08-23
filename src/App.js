import React from "react"

import {QuizContextProvider}from './contexts/QuizContextProvider'
import MainRouterScreen from "./routes/MainRouterScreen"

export default function App(){
  return(
    <QuizContextProvider>
    

      <MainRouterScreen/>
    
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
