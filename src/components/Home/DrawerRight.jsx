import { Box, Typography } from "@mui/material";
import React from "react";

import CreateIcon from "@mui/icons-material/Create";
import { ChatBubbleOutline } from "@mui/icons-material/";

const data = [
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
  {
    icon: <ChatBubbleOutline />,
    text: " If more users could vote, would they engage more? Testing 1 reputation voting...",
  },
];

const DrawerRight = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FBF3D5",
          border: "1px solid #F1E5BC",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              p: 1,
              fontSize: { md: "18px", sm: "16px", xs: "14px" },
              color: "#525960",
              backgroundColor: "#FBF3D5",
              fontWeight: 700,
              border: "1px solid #F1E5BC",
            }}
          >
            The Overflow Blog
          </Typography>
          <Box sx={{ border: "1px solid #F1E5BC" }}>
            <Box
              sx={{
                backgroundColor: "#FDF7E2",
                display: "flex",
                // justifyContent: "center",
                gap: 1,
                p: 1,
              }}
            >
              <CreateIcon sx={{ fontSize: "18px" }} />
              <Typography>
                Forget AGI. Let’s built ADI: Augmented Developer Intelligence
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FDF7E2",
                display: "flex",
                // justifyContent: "center",
                gap: 1,
                p: 1,
              }}
            >
              <CreateIcon sx={{ fontSize: "18px" }} />
              <Typography>
                Do you need a specialized vector database to implement vector
                search well?
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#525960",
                fontStyle: "italic",
                px: 2,
                py: 1,
                backgroundColor: "#FDF7E2",
              }}
            >
              sponsored post
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                p: 1,
                fontSize: { md: "18px", sm: "16px", xs: "14px" },
                color: "#525960",
                backgroundColor: "#FBF3D5",
                fontWeight: 700,
                border: "1px solid #F1E5BC",
              }}
            >
              Featured on Meta
            </Typography>
            <Box sx={{ border: "1px solid #F1E5BC" }}>
              {data.map(({ icon, text }, i) => {
                return (
                  <Box key={i}>
                    <Box
                      sx={{
                        backgroundColor: "#FDF7E2",
                        display: "flex",
                        // justifyContent: "center",
                        gap: 1,
                        p: 1,
                      }}
                    >
                      <Box>{icon}</Box>
                      <Typography>{text}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <Box
        sx={{
          border: "1px solid #D6D9DC",
        }}
      >
        <Typography
          sx={{
            p: 1,
            fontSize: { md: "18px", sm: "16px", xs: "14px" },
            color: "#525960",
            backgroundColor: "#F8F9F9",
            fontWeight: 700,
            borderBottom: "1px solid #D6D9DC",
          }}
        >
          Custom Filters
        </Typography>

        <Typography
          sx={{
            px: 1,
            py: 1.5,
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
            color: "#0074CC",

            fontWeight: 400,
          }}
        >
          Create a custom filter
        </Typography>
      </Box>

      <br />
      <Box
        sx={{
          border: "1px solid #D6D9DC",
        }}
      >
        <Typography
          sx={{
            p: 1,
            fontSize: { md: "18px", sm: "16px", xs: "14px" },
            color: "#525960",
            backgroundColor: "#F8F9F9",
            fontWeight: 700,
            borderBottom: "1px solid #D6D9DC",
          }}
        >
          Watched Tags
        </Typography>

        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignContent: "center",
            mt: 2,
          }}
        >
          <svg
            aria-hidden="true"
            style={{ fill: "#379FEF" }}
            className="fc-blue-400 d:fc-blue-700 svg-spot spotSearch"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <path
              d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
              opacity=".2"
            ></path>
            <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z"></path>
          </svg>
        </Box>

        <Typography
          sx={{
            py: 1.5,
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
            color: "#0074CC",
            px: { md: 7, sm: 5, xs: 3 },
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Watch tags to curate your list of questions.
        </Typography>
      </Box>
    </>
  );
};

export default DrawerRight;
