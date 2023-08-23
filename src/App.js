//import './App.css';
import { QuizContextProvider } from "./contexts/QuizContextProvider";
import MainRouterScreen from "./routes/MainRouterScreen";


function App() {
  return (
    
    <QuizContextProvider>
      <MainRouterScreen />
    </QuizContextProvider>
  );
}

export default App;
