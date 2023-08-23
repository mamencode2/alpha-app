import React from "react";
import Avatar from "@mui/material/Avatar";
import { Stack, Grid } from "@mui/material";
import { combinedLessons } from "../../api/lessonsData";
import LessonItem from "./LessonItem";

function LessonSections() {
  console.log(combinedLessons);
  return (
    <div
      style={{
        padding: "0 15px"
      }}
    >
      <Grid container spacing={1}>
        {combinedLessons.map((item) => {
          let lessonObj = {
            lessonName: item.lesson,
            isLessonActive: item.isLessonActive,
            imgLink: item.refIndex ? item.refIndex.imgLink : ""
          };
          return <LessonItem key={item.lesson} item={lessonObj} />;
        })}
      </Grid>
    </div>
  );
}

export default LessonSections;
