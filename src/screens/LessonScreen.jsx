import React from "react";
import LessonSections from "../components/lessons/LessonSections";
import LessonsHeader from "../components/lessons/LessonsHeader";

function LessonScreen() {
  return (
    <div>
      <LessonsHeader likes={6} gems={210} />
      <div className="">
        <LessonSections />
      </div>
    </div>
  );
}


export default LessonScreen;
