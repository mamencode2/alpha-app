import React from "react"
import { QuizContextProvider } from "./contexts/QuizContextProvider"

export default function App(){
  return(
    <QuizContextProvider>
    <div>
      
      <h1>hello world</h1>
    </div>
    </QuizContextProvider>
  )
}
