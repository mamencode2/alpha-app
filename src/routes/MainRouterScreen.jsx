import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  defer
} from "react-router-dom";
import AlphabetScreen from "../screens/AlphabetScreen";
import DictioneryScreen from "../screens/DictioneryScreen";
import LessonScreen from "../screens/LessonScreen";
import MainLayout from "../screens/MainLayout";
import QuestionScreen from "../screens/QuestionScreen";
import StudyScreen from "../screens/StudyScreen";
import TreasuresScreen from "../screens/TreasuresScreen";

function ErrorBoundElement() {
  return (
    <div>
      <h1>Error happend</h1>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />} errorElement={<ErrorBoundElement />}>
        <Route path="study" element={<StudyScreen />} />
        <Route path="dectionery" element={<DictioneryScreen />} />
        <Route path="treasure" element={<TreasuresScreen />} />
        <Route path="alphabet" element={<AlphabetScreen />} />
        <Route path="/" element={<LessonScreen />} />
      </Route>
      <Route path="qNa" element={<QuestionScreen />} />
    </>
  )
);
export default function MainRouterScreen() {
  return <RouterProvider router={router} />;
}
