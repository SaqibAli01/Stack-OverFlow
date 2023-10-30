import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Tags = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "21px", sm: "18px", xs: "16px" },
            color: "#232629",
            fontWeight: 400,
            pb: 2,
          }}
        >
          0 Tags
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          pl: 1,
          py: { md: 6, sm: 4, xs: 2 },
          boxShadow:
            " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <Typography textAlign={"center"}>
          You have not participated in any <Link to="">tags</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Tags;
