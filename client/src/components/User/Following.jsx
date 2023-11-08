import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

const Following = () => {
  return (
    <Box>
      <Typography>Following</Typography>
      <Box
        sx={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            border: "1px solid red",
            width: "100%",
          }}
        >
          <Typography>Following</Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid red",
            width: "100%",
            p: 1,
          }}
        >
          <Typography>Followers</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              border: "1px solid red",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar src="" alt="" />
              <Typography>Saqib</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  p: 1,
                }}
              >
                Follow
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Following;
