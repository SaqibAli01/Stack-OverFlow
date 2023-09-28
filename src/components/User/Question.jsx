import { Box, Link } from "@mui/material";
import React from "react";
import QuestionTabs from "./QuestionTabs";

const Question = () => {
  return (
    <Box>
      <QuestionTabs />

      <Box
        sx={{
          width: "100%",
          pl: 1,
          py: 1,
          boxShadow:
            " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <Link to="" sx={{ textDecoration: "none", cursor: "pointer" }}>
          Deleted answers
        </Link>
      </Box>
    </Box>
  );
};

export default Question;
