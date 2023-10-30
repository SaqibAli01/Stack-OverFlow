import React from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import QuestionTabs from "./QuestionTabs";
import AnswersTabs from "./AnswersTabs";
import FollowedPosts from "./FollowedPosts";
import ActiveBounties from "./ActiveBounties";
import ArticlesTabs from "./ArticlesTabs";

const data1 = [{ name: "Tags" }, { name: "Reputation" }];
const Text = styled(Typography)({
  color: "#6a737c",
  //   fontSize: { md: "13px", sm: "12px", xs: "11px" },
  fontWeight: 400,
  "&:hover": {
    color: "orange",
  },
});

const Summary = () => {
  const matches = useMediaQuery("(max-width:1200px)");

  return (
    <Box>
      <Typography
        sx={{
          color: "#232629",
          fontSize: { md: "21px", sm: "18px", xs: "16px" },
          fontWeight: 400,
          pb: 2,
        }}
      >
        Summary
      </Typography>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4.5} sx={{ my: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                px: 1,
                py: { md: 2, sm: 1, xs: 1 },

                boxShadow:
                  " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <svg
                aria-hidden="true"
                className="svg-spot spotReputation"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M32 9a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h25a1 1 0 0 1 1 1Zm4.25 1.6a1 1 0 0 1 .92-.6H41a1 1 0 1 1 0 2h-3.18l-4.9 11.4a1 1 0 0 1-.92.6h-7.38l-2.73 5.45A1 1 0 0 1 21 30h-6.51l-4.07 9.4a1 1 0 0 1-1.84-.8l4.34-10a1 1 0 0 1 .91-.6h6.55l2.73-5.45A1 1 0 0 1 24 22h7.34l4.9-11.4ZM42 16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2Zm-24 5a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1Zm24 1a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2h4Zm1 11a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h25a1 1 0 0 1 1 1ZM8 28a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h2Z"
                  opacity=".2"
                ></path>
                <path d="M36.17 8a1 1 0 0 0-.92.6L30.35 20H23a1 1 0 0 0-.9.55L19.39 26h-6.55a1 1 0 0 0-.9.58L6.1 39.08a1 1 0 0 0 1.82.84L13.47 28H20a1 1 0 0 0 .9-.55L23.61 22H31a1 1 0 0 0 .92-.6l4.9-11.4H42a1 1 0 1 0 0-2h-5.83ZM27 16a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2h21Zm16 11a1 1 0 0 1-1 1H28a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm-1 13a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2h28Z"></path>
              </svg>
              <Typography
                sx={{
                  color: "#232629",
                  fontSize: { md: "15px", sm: "13px", xs: "12px" },
                  fontWeight: 400,
                  pt: 1,
                  px: { md: 2, sm: 1, xs: 1 },
                  textAlign: "center",
                }}
              >
                Reputation is how the community thanks you
              </Typography>

              <Typography
                sx={{
                  color: "#6a737c",
                  fontSize: { md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  px: { md: 5, sm: 3, xs: 1 },
                  textAlign: "center",
                  pt: 1,
                }}
              >
                When users upvote your helpful posts, you'll earn reputation and
                unlock new privileges.
              </Typography>

              <br />
              <Typography
                sx={{
                  color: "#232629",
                  fontSize: { md: "13px", sm: "12px", xs: "11px" },
                  fontWeight: 400,
                  px: { md: 2, sm: 1, xs: 1 },
                  textAlign: "center",
                }}
              >
                Learn more about{" "}
                <Link to="" sx={{ color: "#232629" }}>
                  reputation
                </Link>{" "}
                reputation and{" "}
                <Link to="" sx={{ color: "#232629" }}>
                  privileges
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={4} sx={{ my: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                borderRadius: "5px",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                px: 1,
                py: { md: 2, sm: 1, xs: 1 },
                boxShadow:
                  " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#5EBA7D",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  // p: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  aria-hidden="true"
                  className="svg-icon iconCheckmark"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                  fill="white"
                >
                  <path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5 10-10Z"></path>
                </svg>
              </Box>

              <Typography
                sx={{
                  color: "#3b4045",
                  fontSize: { md: "15px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                  pt: 1,
                }}
              >
                Congratulations!
              </Typography>

              <Typography
                sx={{
                  color: "#232629",
                  fontSize: { md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,

                  pt: 1,
                }}
              >
                You've earned
              </Typography>

              <br />
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "black",
                  color: "#ffffff ",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
              >
                Informed
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} sx={{ my: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                px: 1,
                py: { md: 2, sm: 1, xs: 1 },

                boxShadow:
                  " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <svg
                aria-hidden="true"
                className="svg-spot spotAstronaut"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path
                  d="M39.5 12a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-6.1c-.77 0-1.4.63-1.4 1.4v6.2c0 .77.63 1.4 1.4 1.4H38a1 1 0 0 1 1 1 1 1 0 0 0 1 1h3.6c.77 0 1.4-.63 1.4-1.4v-7.2c0-.77-.63-1.4-1.4-1.4h-4.1Z"
                  opacity=".2"
                ></path>
                <path d="M15.03 5.84c-2.17 0-3.66.42-4.44 1.59-.37.55-.5 1.17-.55 1.73-.05.44-.04.93-.04 1.39v1.8c0 .4.2.7.38.89.18.17.38.29.54.37.34.15.75.25 1.15.32.83.15 1.9.22 2.93.22 1.03 0 2.1-.07 2.93-.22.4-.07.81-.17 1.15-.32.16-.08.36-.2.54-.37.18-.19.38-.49.38-.9V10.5c0-.44 0-.9-.03-1.32a3.68 3.68 0 0 0-.52-1.73c-.76-1.18-2.25-1.6-4.42-1.6ZM12 10.5c0-.45 0-.82.03-1.15.04-.4.12-.65.22-.81.18-.26.7-.7 2.78-.7s2.58.44 2.74.69c.1.15.18.4.21.8.03.32.02.66.02 1.07v1.47l-.43.1c-.67.12-1.6.18-2.57.18a15.59 15.59 0 0 1-3-.28V10.5ZM11 21a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm4.03-19c-3.82 0-6.2 1.12-7.57 3-1.31 1.8-1.51 4.08-1.51 6v3.94A4.45 4.45 0 0 0 2 19.5v11C2 32.02 3.13 34 5.47 34c.58 0 1.09-.12 1.53-.33V44a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V32h2v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V23.3l2.87 2.74 1.97 1.86.16.14V44a1 1 0 1 0 2 0V28.79h.1c.8 0 1.65-.28 2.27-.9.62-.64.88-1.52.88-2.32 0-.79-.26-1.66-.87-2.3L30 20.78V19h6c0 1.1.9 2 2 2h3a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-3.09c-.2-.58-.76-1-1.41-1H30v-.17a3 3 0 1 0-2 0v10.83l-1.24-1.32h-.01l-.34-.36c-.48-.49-.93-.95-1.36-1.3-.3-.25-.64-.47-1.02-.63V11c0-1.9-.18-4.2-1.47-6-1.35-1.88-3.71-3-7.53-3Zm-7.08 9c0-1.86.21-3.57 1.13-4.83C9.94 5 11.6 4 15.03 4s5.06.99 5.9 2.17c.9 1.25 1.1 2.96 1.1 4.83v4.41c-.35.11-.9.22-1.64.32a46.7 46.7 0 0 1-5.4.28c-1.99 0-3.95-.1-5.4-.28a9.4 9.4 0 0 1-1.64-.32V11ZM12 39.34a3.4 3.4 0 0 0-3 0V36h3v3.34Zm-3 3.31c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43H9v-.35Zm9 .35v-.35c0-.98.71-1.65 1.5-1.65s1.5.67 1.5 1.65V43h-3Zm1.5-4a3.4 3.4 0 0 0-1.5.34V36h3v3.34a3.4 3.4 0 0 0-1.5-.34ZM9 34v-8h12v8h-3v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H9Zm-2-3.5c0 .69-.56 1.5-1.53 1.5C4.53 32 4 31.23 4 30.5V29h3v1.5ZM7 27H4v-7.5c0-.88.32-1.51.8-1.93a3 3 0 0 1 1.67-.69l.08.06c.24.17.52.29.78.37.53.17 1.23.3 2 .4 1.57.2 3.62.3 5.66.3 2.03 0 4.09-.1 5.65-.3.78-.1 1.48-.23 2.01-.4.25-.08.52-.19.75-.35l.4.27c.32.27.66.62 1.13 1.1v.01l.38.39L28 21.56v.92l-1.45 1.44-3.64-3.46c-.25-.24-.55-.46-.91-.46a1 1 0 0 0-1 1v3H9v-3a1 1 0 1 0-2 0v6Zm23-.22v-3.1l.93.98h.01c.17.18.31.51.31.91s-.14.73-.3.91a1.19 1.19 0 0 1-.95.3ZM29 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1 13v-7h6v7h-6Zm8 2v-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3Z"></path>
              </svg>
              <Typography
                sx={{
                  color: "#232629",
                  fontSize: { md: "15px", sm: "13px", xs: "12px" },
                  fontWeight: 400,
                  pt: 1,
                }}
              >
                Measure your impact
              </Typography>

              <Typography
                sx={{
                  color: "#6a737c",
                  fontSize: { md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,

                  textAlign: "center",
                  pt: 1,
                }}
              >
                Your posts and helpful actions here help hundreds or thousands
                of people searching for help.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <br />

      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} sx={{ mt: 3 }}>
            <Box>
              <AnswersTabs />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ mt: 3 }}>
            <Box>
              <QuestionTabs />
            </Box>
          </Grid>

          {data1.map(({ name }, i) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={i}>
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
                    {name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    pl: 1,
                    py: 3,
                    boxShadow:
                      " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  }}
                >
                  <Typography>
                    You have not participated in any <Link to="">tags</Link>
                  </Typography>
                </Box>
              </Grid>
            );
          })}

          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{
                fontSize: { md: "21px", sm: "16px", xs: "12px" },
                fontWeight: 400,
                color: "#232629",
              }}
            >
              Badges
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 3,
                flexWrap: {
                  md: matches ? "wrap" : "nowrap",
                  sm: "wrap",
                  xs: "wrap",
                },
              }}
            >
              {/* -------------- map function ------------------- */}
              {[1, 2, 3].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    backgroundColor: "#FFFFFF",
                    p: 2,
                    my: 2,
                    borderRadius: "5px",
                    boxShadow:
                      " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: 1,
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <svg
                      fill="#ffcc00"
                      aria-hidden="true"
                      className="fc-gold svg-spot spotAward"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <path d="M32.87 7a8.85 8.85 0 0 0-2.49-2.79 10.5 10.5 0 0 0-1.41-.92.98.98 0 0 0-.74-.1c-.46.14-.6.62-.71 1.04-.09.31-.2.75-.26 1.27-.12 1-.1 2.4.68 3.58v.01c.83 1.24 1.83 2 2.62 2.46.43.25.88.45 1.3.7a16.38 16.38 0 0 1 8.4 14.34c0 8-5.72 14.66-13.34 16.15a.85.85 0 0 0 .33 1.67c.99-.2 1.95-.47 2.88-.82.23.18.7.55 1.32.94a8.46 8.46 0 0 0 3.38 1.29 5.96 5.96 0 0 0 3.26-.61c.5-.24 1.22-.6 1.43-1.15a.86.86 0 0 0-.04-.72c-.29-.53-.92-1-1.38-1.37a6.88 6.88 0 0 0-2.76-1.39c.49-.4.95-.82 1.39-1.26.56.14 1.12.24 1.7.31 1.03.13 2.43.19 3.67-.2a5.68 5.68 0 0 0 3.32-2.78c.12-.24.22-.53.18-.8a.86.86 0 0 0-.47-.63 9.14 9.14 0 0 0-1.64-.62 6.5 6.5 0 0 0-3.36-.08 18 18 0 0 0 .85-2.04c.4 0 .81-.03 1.21-.1a5.89 5.89 0 0 0 3.14-1.46 7.74 7.74 0 0 0 1.85-3.06c.17-.47.27-.9.33-1.2.07-.32.13-.68-.05-.99-.25-.44-.77-.44-1.22-.42a9.1 9.1 0 0 0-1.24.12c-.9.16-2.06.5-3.04 1.27v-.05c0-.73-.04-1.45-.13-2.15.25-.12.6-.31 1-.59a6.15 6.15 0 0 0 2.11-2.52 8.3 8.3 0 0 0 .57-3.58 9.7 9.7 0 0 0-.14-1.28c-.06-.33-.13-.69-.4-.92a.86.86 0 0 0-.5-.2c-.3-.02-.6.15-.85.28a9.3 9.3 0 0 0-1.08.63 6.63 6.63 0 0 0-2.3 2.58 18 18 0 0 0-1.26-2.24 5.46 5.46 0 0 0 1.82-3.63 8.85 8.85 0 0 0-.65-3.65c-.19-.5-.38-.9-.53-1.2-.21-.4-.47-.85-1-.85a.98.98 0 0 0-.64.3c-.2.18-.65.6-1.11 1.19a6.34 6.34 0 0 0-1.4 3.91c-.72-.6-1.47-1.13-2.27-1.62A5.47 5.47 0 0 0 32.88 7h-.01Zm-3.86-1.7a7.29 7.29 0 0 1 2.35 2.46 4 4 0 0 1 .29 2.44 5.96 5.96 0 0 1-2.29-2.06c-.54-.83-.53-1.9-.35-2.84Zm12.55 25.44c.17-.96.56-1.94 1.28-2.63A5.1 5.1 0 0 1 45.68 27a6.1 6.1 0 0 1-1.53 2.7c-.7.66-1.65.97-2.6 1.06Zm-3.37 7.13a4.55 4.55 0 0 1 2.18-1.66 5 5 0 0 1 3.2.19 4.02 4.02 0 0 1-1.97 1.4 7.6 7.6 0 0 1-3.4.07ZM32 42.86a4.57 4.57 0 0 1 2.66-.67c.89.1 1.73.58 2.38 1.1l.4.34a4.54 4.54 0 0 1-2.42.5A6.93 6.93 0 0 1 32 42.86Zm6.41-33.3a7.2 7.2 0 0 1 .7 3.29 3.68 3.68 0 0 1-1.07 2.3 4.88 4.88 0 0 1-.87-2.93c.07-1 .6-1.91 1.24-2.67Zm5.38 7.92a6.57 6.57 0 0 1-.4 3.16 4.55 4.55 0 0 1-1.73 1.95 4.4 4.4 0 0 1 .06-2.91c.4-.95 1.2-1.67 2.07-2.2Zm-19.95.55L22 23.38a1 1 0 0 1-.94.67h-5.71v.02l4.6 3.48a1 1 0 0 1 .34 1.1l-1.66 5.2 4.7-3.25a1 1 0 0 1 1.13 0l4.6 3.17-1.65-5.2a1 1 0 0 1 .35-1.1l4.52-3.42h-5.64a1 1 0 0 1-.94-.67l-1.85-5.35Zm-.03-2.1a2 2 0 0 1 1.88 1.32l1.66 4.8h5.04c1.81 0 2.62 2.28 1.26 3.46l-.06.05-4.07 3.07 1.5 4.72v.01c.56 1.83-1.48 3.13-2.96 2.15l-.02-.01-4.15-2.86-4.25 2.94-.01.01c-1.49.99-3.53-.31-2.97-2.14v-.02l1.5-4.71-4.07-3.08a1.98 1.98 0 0 1-.67-2.18c.22-.71.87-1.41 1.87-1.41h5.05l1.65-4.78a1.88 1.88 0 0 1 1.82-1.33Zm-9.58 20.71a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-1.53-1.9a.83.83 0 1 1-1.64 0 .83.83 0 0 1 1.65 0Zm-1.2-2.11a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.65 0Zm-.83-2.36a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-.42-2.44a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm0-2.41a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm.41-2.44a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm.83-2.25a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm1.15-2.23a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm1.59-1.88a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0ZM16.02 15a.83.83 0 1 1-1.65.01.83.83 0 0 1 1.65 0Zm2.08-1.28a.83.83 0 1 1-1.64 0 .83.83 0 0 1 1.65 0Zm2.3-.94a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm2.38-.51a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm2.42-.11a.83.83 0 1 1-1.64 0 .83.83 0 0 1 1.65 0Zm2.48.29a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm2.33.71a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm2.22 1.14a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm1.92 1.41a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm1.75 1.75a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.65 0Zm1.37 2a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm1.03 2.26a.83.83 0 1 1-1.64 0 .83.83 0 0 1 1.65 0Zm.6 2.34a.83.83 0 1 1-1.66 0 .83.83 0 0 1 1.65 0Zm.22 2.48a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-.18 2.51a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-.62 2.35a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-1.04 2.2a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-1.35 2.09a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-1.73 1.78a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-1.98 1.43a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.19 1.09a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.28.75a.82.82 0 1 1-1.65 0 .82.82 0 0 1 1.65 0Zm-2.43.31a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.48-.12a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.43-.44a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.25-.99a.83.83 0 1 1-1.65 0 .83.83 0 0 1 1.65 0Zm-2.26-1.16a.83.83 0 1 1-1.64 0 .83.83 0 0 1 1.65 0ZM14.94 7a8.85 8.85 0 0 1 2.49-2.79 10.5 10.5 0 0 1 1.41-.92c.23-.12.5-.18.74-.1.46.14.6.62.71 1.04.1.31.2.75.26 1.27.12 1 .1 2.4-.68 3.58v.01a7.82 7.82 0 0 1-2.62 2.46c-.43.25-.88.45-1.3.7a16.38 16.38 0 0 0-8.4 14.34c0 8 5.73 14.66 13.34 16.15a.85.85 0 0 1-.33 1.67c-.99-.2-1.95-.47-2.88-.82-.23.18-.7.55-1.32.94a8.46 8.46 0 0 1-3.38 1.29 5.96 5.96 0 0 1-3.26-.61c-.5-.24-1.22-.6-1.43-1.15a.86.86 0 0 1 .04-.72c.29-.53.92-1 1.38-1.37a6.88 6.88 0 0 1 2.76-1.39c-.49-.4-.95-.82-1.39-1.26-.56.14-1.12.24-1.7.31a9.12 9.12 0 0 1-3.67-.2 5.68 5.68 0 0 1-3.32-2.78 1.35 1.35 0 0 1-.18-.8c.02-.1.1-.45.47-.63a9.13 9.13 0 0 1 1.64-.62 6.5 6.5 0 0 1 3.36-.08c-.32-.66-.6-1.34-.85-2.04-.4 0-.81-.03-1.21-.1a5.89 5.89 0 0 1-3.13-1.46 7.74 7.74 0 0 1-1.86-3.06 9.2 9.2 0 0 1-.33-1.2c-.07-.32-.13-.68.05-.99.25-.44.77-.44 1.22-.42.31 0 .75.04 1.24.12.9.16 2.06.5 3.04 1.27v-.05c0-.73.04-1.45.13-2.15-.25-.12-.6-.31-1-.59a6.15 6.15 0 0 1-2.11-2.52 8.22 8.22 0 0 1-.57-3.58c.03-.5.08-.95.14-1.28.06-.33.13-.69.4-.92a.86.86 0 0 1 .5-.2c.3-.02.6.15.85.28.28.14.67.35 1.08.63a6.63 6.63 0 0 1 2.3 2.58 18 18 0 0 1 1.26-2.24 5.46 5.46 0 0 1-1.82-3.63c-.1-1.34.28-2.69.65-3.65.19-.5.38-.9.53-1.2.21-.4.47-.85 1-.85.25 0 .45.13.64.3.2.18.65.6 1.11 1.19a6.34 6.34 0 0 1 1.4 3.91c.72-.6 1.47-1.13 2.27-1.62A5.47 5.47 0 0 1 14.93 7h.01Zm3.86-1.7a7.29 7.29 0 0 0-2.35 2.46 4.04 4.04 0 0 0-.29 2.44 5.96 5.96 0 0 0 2.29-2.06c.54-.83.53-1.9.35-2.84ZM6.25 30.75a4.77 4.77 0 0 0-1.28-2.63A5.1 5.1 0 0 0 2.13 27c.3.99.77 1.98 1.53 2.7.7.66 1.65.97 2.6 1.06Zm3.37 7.13a4.55 4.55 0 0 0-2.18-1.66 5 5 0 0 0-3.2.19 4.1 4.1 0 0 0 1.97 1.4c1.09.34 2.3.25 3.4.07Zm6.19 4.98a4.57 4.57 0 0 0-2.66-.67c-.89.1-1.73.58-2.38 1.1l-.4.34a4.54 4.54 0 0 0 2.42.5 6.93 6.93 0 0 0 3.02-1.27ZM9.4 9.56a7.26 7.26 0 0 0-.7 3.29 3.68 3.68 0 0 0 1.07 2.3c.55-.87.94-1.89.87-2.93A4.8 4.8 0 0 0 9.4 9.55Zm-5.38 7.92a6.57 6.57 0 0 0 .4 3.16 4.55 4.55 0 0 0 1.73 1.95c.26-.94.34-2-.06-2.91a4.99 4.99 0 0 0-2.07-2.2Z"></path>
                    </svg>

                    <Text
                      sx={{ fontSize: { md: "13px", sm: "11px", xs: "10px" } }}
                    >
                      You don’t have a gold badge yet. Write an answer that
                      scores 100 or more to earn your first.
                    </Text>

                    <Button
                      sx={{
                        textTransform: "none",
                        fontSize: { md: "13px", sm: "12px", xs: "11px" },
                        fontWeight: 400,
                        backgroundColor: "#E1ECF4",
                      }}
                    >
                      Browser Question
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <FollowedPosts />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <ActiveBounties />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <ArticlesTabs />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <Typography
              sx={{
                fontSize: { md: "21px", sm: "16px", xs: "12px" },
                fontWeight: 400,
                color: "#232629",
              }}
            >
              Votes cast
            </Typography>

            <Box
              sx={{
                width: "100%",
                pl: 1,
                py: 3,
                boxShadow:
                  " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
              }}
            >
              <Typography sx={{ textAlign: "center" }}>
                {" "}
                You have not cast any <Link to="">votes</Link>{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Summary;
