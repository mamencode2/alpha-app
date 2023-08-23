import { ArrowBackIosOutlined, DiamondOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Sticky from "react-stickynode";
import { useQuiz } from "../../contexts/QuizContextProvider";

export default function QtnHeader({ onClick }) {
  const { score } = useQuiz();
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
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                lineHeight: "30px"
              }}
            >
              <IconButton onClick={onClick}>
                <ArrowBackIosOutlined />
              </IconButton>
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
                  {score}
                </span>
              </div>
            </div>
            {/* <LessonStats likes={likes} gems={gems} /> */}
            {/* <h2>Your lessons</h2> */}
          </div>
        </Sticky>
      </div>
    </div>
  );
}
