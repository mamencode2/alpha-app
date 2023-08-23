import React from "react";
import { Avatar, Grid, CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";



function LessonItem({ item }) {
  let navigate = useNavigate();
  function handleGoToQ(itm) {
    console.log(itm);
    navigate("/qNa");
  }
  
  return (
    <Grid
      item
      xs={12}
      sx={{
        border: "2px solid gray",
        borderRadius: "10px",
        marginBottom: "12px"
      }}
    >
      <Box
        role="button"
        disabled={!item.isLessonActive}
        onClick={() => {
          if (item.isLessonActive) {
            handleGoToQ(item);
          }
        }}
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Avatar
          src={item.imgLink}
          alt={item.lessonName}
          sx={{
            width: "50px",
            height: "50px"
          }}
        />
        <div
          className=""
          style={{
            fontWeight: item.isLessonActive ? "700" : ""
          }}
        >
          {item.lessonName}
        </div>
        <div />
      </Box>
    </Grid>
  );
}

export default LessonItem;
