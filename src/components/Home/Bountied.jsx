import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import myPic from "../../assets/mypic.JPEG";
const Text = styled(Typography)({
  color: "#838C95",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: { md: "15px", sm: "14px", xs: "13px" },
  backgroundColor: "transparent",
  padding: "5px 15px",
  cursor: "pointer",
  "&:hover": {
    color: "orange",
  },
});

const data = [
  {
    votes: 2,
    answers: 1,
    views: 118,
    questions:
      "How to set MQOO_INPUT_EXCLUSIVE option for IBM MQ Connection Factory in Camel Consumer with Spring boot?",
    languages: "Java",
    languages1: "spring-boot",
    authImg: myPic,
    authName: "Nine",
    asked: 190,
    sec: "modified yesterday",
  },
  {
    votes: 3,
    answers: 2,
    views: 100,
    questions:
      "how to add Positioned stack inside SliverList and make it scrollable , like when we scroll the top image part will hide and only see appBar&scroll",
    languages: "Flutter",
    languages1: "Stack",
    authImg: myPic,
    authName: "AbhiShak",
    asked: 43,
    sec: "answered Sep 19 at 8:33",
  },
  {
    votes: 1,
    answers: 0,
    views: 76,
    questions: "Brotli compression didn't work as expected",
    languages: "DJango",

    authImg: myPic,
    authName: "Ahad",
    asked: 1,
    sec: "modified Sep 16 at 14:23",
  },
  {
    votes: 2,
    answers: 17,
    views: 19,
    questions: "Image not showing in ToastNotification",
    languages: ".c",
    languages1: ".Net",
    authImg: myPic,
    authName: "Admin",
    asked: 200,
    sec: "modified Sep 19 at 7:27",
  },
  {
    votes: 0,
    answers: 0,
    views: 3,
    questions:
      "Looping through a select object causes TypeError despite an example in documentation",
    languages: "Pyhton",
    languages1: "PostgreSQL",
    authImg: myPic,
    authName: "Ani",
    asked: 120,
    sec: "asked 2 min ago",
  },
  {
    votes: 0,
    answers: 1,
    views: 1,
    questions:
      "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
    languages: "JavaScript",
    languages1: "Java",
    authImg: myPic,
    authName: "Saqib",
    asked: 1200,
    sec: "asked 1 min ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 2,
    questions:
      "requestAnimationFrame calculation speed does not catch up with scroll speed",
    languages: "JavaScript",
    languages1: "react.js",
    authImg: myPic,
    authName: "Saqib",
    asked: 190,
    sec: "asked 54 secs ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 3,
    questions:
      "rHow to work out what is calling onPlay in my MediaSessionCompat.Callback",
    languages: "andriod",
    languages1: "Java",
    authImg: myPic,
    authName: "Saqib",
    asked: 1200,
    sec: "asked 1 min ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 3,
    questions: "Django - Site requested, but not rendered",
    languages: "DJango",

    authImg: myPic,
    authName: "Miquest",
    asked: 1,
    sec: "modified 1 min ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 1,
    questions:
      "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
    languages: "JavaScript",
    languages1: "Java",
    authImg: myPic,
    authName: "Saqib",
    asked: 1200,
    sec: "asked 1 min ago",
  },
  {
    votes: 0,
    answers: 0,
    views: 3,
    questions:
      "Looping through a select object causes TypeError despite an example in documentation",
    languages: "Pyhton",
    languages1: "PostgreSQL",
    authImg: myPic,
    authName: "Ani",
    asked: 120,
    sec: "asked 2 min ago",
  },
  {
    votes: 0,
    answers: 1,
    views: 1,
    questions:
      "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
    languages: "JavaScript",
    languages1: "Java",
    authImg: myPic,
    authName: "Saqib",
    asked: 1200,
    sec: "asked 1 min ago",
  },
];

const Bountied = () => {
  const matches = useMediaQuery("(max-width:1300px)");

  return (
    <Box sx={{ width: "100%" }}>
      <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />

      {data.map(
        (
          {
            votes,
            answers,
            views,
            questions,
            languages,
            languages1,
            authImg,
            authName,
            asked,
            sec,
          },
          i
        ) => {
          return (
            <Box key={i}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={2.5}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "column", sm: "row", xs: "row" },
                    }}
                  >
                    <Text>{votes} votes</Text>
                    <Text>{answers} answers</Text>
                    <Text>{views} views</Text>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={9.5}>
                  <Box>
                    <Typography sx={{ color: "#0074CC", fontWeight: 500 }}>
                      {questions}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          md: "space-between",
                          sm: "flex-start",
                          xs: "flex-start",
                        },

                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: matches ? "column" : "row",
                        },
                        alignItems: {
                          md: matches ? "flex-start" : "center",
                          sm: "flex-start",
                          xs: "flex-start",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          width: "auto",
                          mt: 1,
                          gap: 0.5,
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography
                          sx={{
                            backgroundColor: "#E1ECF4",
                            color: "#39739D",
                            width: "fitContent",
                            borderRadius: "10px",
                            p: 1,
                          }}
                        >
                          {languages}
                        </Typography>
                        {languages1 && (
                          <Typography
                            sx={{
                              backgroundColor: "#E1ECF4",
                              color: "#39739D",
                              width: "fitContent",
                              borderRadius: "10px",
                              p: 1,
                            }}
                          >
                            {languages1}
                          </Typography>
                        )}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignContent: "center",
                          gap: 0.5,
                          flexWrap: "wrap",
                          my: 1,
                        }}
                      >
                        <Avatar
                          variant="square"
                          src={authImg}
                          sx={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "10px",
                          }}
                        />

                        <Typography sx={{ p: 1, color: "#0074CC" }}>
                          {authName}
                        </Typography>
                        <Typography
                          sx={{ p: 1, color: "#525960", fontWeight: 700 }}
                        >
                          {asked}
                        </Typography>
                        <Typography sx={{ p: 1, color: "#6A737C" }}>
                          {sec}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />
            </Box>
          );
        }
      )}
    </Box>
  );
};

export default Bountied;
