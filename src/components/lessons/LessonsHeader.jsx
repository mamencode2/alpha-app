import React, { useState, useEffect } from "react";
import Sticky from "react-stickynode";
import { motion } from "framer-motion";
import { DiamondOutlined } from "@mui/icons-material";
import {
  Link,
  useNavigate,
  useLoaderData,
  useSearchParams
} from "react-router-dom";



function LessonsHeader({ likes, gems }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        padding: "20px 0"
      }}
    >
      <div style={{ backgroundColor: "#fff" }}>
        <Sticky
          innerZ={999}
          style={{
            backgroundColor: "#fff"
          }}
        >
          <div
            className=""
            style={{
              backgroundColor: "#ffffff",
              padding: "0 12px"
            }}
          >
            <LessonStats likes={likes} gems={gems} />
            <h2>Your lessons</h2>
          </div>
        </Sticky>
      </div>
    </div>
  );
}

function LessonStats({ likes, gems }) {
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* <div>\u270C</div> */}
      <div
        style={{
          fontSize: "25px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <span>✌️</span>
        <span
          style={{
            fontSize: "14px",
            color: "#767676"
          }}
        >
          {likes}
        </span>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <DiamondOutlined
          sx={{
            color: "green",
            fontSize: "30px"
          }}
        />
        <span
          style={{
            fontSize: "14px",
            color: "#767676"
          }}
        >
          {gems}
        </span>
      </div>
    </div>
  );
}

export default LessonsHeader;
