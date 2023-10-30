import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";

import React from "react";
import myPic from "../../assets/mypic.JPEG";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import RestoreIcon from "@mui/icons-material/Restore";
import MyEditor from "./MyEditor";

const Text = styled(Typography)({
  color: "#232629",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: { md: "19px", sm: "16px", xs: "13px" },
  backgroundColor: "transparent",
  padding: "5px 15px",
  cursor: "pointer",
  "&:hover": {
    color: "orange",
  },
});

const data = [
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
];

const typoStyle = {
  color: "#6a737c",
  fontSize: { md: "13px", sm: "11px", xs: "11px" },
  fontWeight: 400,
  "& span": {
    color: "#232629",
    fontSize: { md: "13px", sm: "11px", xs: "11px" },
    fontWeight: 400,
  },
};

const QueAns = () => {
  const matches = useMediaQuery("(max-width:1300px)");
  //   const matches1 = useMediaQuery("(max-width:1050px)");

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Typography
          sx={{
            color: "#3b4045",
            fontSize: { md: "27px", sm: "22px", xs: "16px" },
            fontWeight: 400,
          }}
        >
          RequestAnimationFrame calculation speed does not catch up with scroll
          speed
        </Typography>

        <Stack direction={"row"} spacing={2}>
          <Box sx={{ ...typoStyle }}>
            Asked <span>today</span>
          </Box>
          <Box sx={{ ...typoStyle }}>
            Modified <span>today</span> today
          </Box>
          <Box sx={{ ...typoStyle }}>
            Viewed <span>2 times</span>
          </Box>
        </Stack>
      </Box>

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
                <Grid item xs={12} sm={12} md={1}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "column", sm: "row", xs: "row" },
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <ArrowDropUpIcon
                        sx={{
                          border: "1px solid #BABFC4",
                          borderRadius: "50%",
                          fontSize: { md: "36px", sm: "30px", xs: "24px" },
                        }}
                      />
                    </Box>
                    <Text>{answers} </Text>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <ArrowDropDownIcon
                        sx={{
                          border: "1px solid #BABFC4",
                          borderRadius: "50%",
                          fontSize: { md: "36px", sm: "30px", xs: "24px" },
                        }}
                      />

                      <BookmarkBorderIcon
                        sx={{
                          color: "#BABFC4",
                          mt: 1,
                          borderRadius: "50%",
                          fontSize: { md: "30px", sm: "25px", xs: "20px" },
                        }}
                      />

                      <RestoreIcon
                        sx={{
                          color: "#BABFC4",
                          mt: 1,
                          borderRadius: "50%",
                          fontSize: { md: "30px", sm: "25px", xs: "20px" },
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={11}>
                  <Box>
                    <Typography
                      sx={{
                        color: "#232629",
                        fontWeight: 400,
                        fontSize: { md: "15px", sm: "13px", xs: "11px" },
                      }}
                    >
                      I have an OMRON NB5Q-TW01B HMI that seems to work fine
                      with my control system design. However, there are 9 system
                      default windows that cannot be deleted on NB-Designer.
                    </Typography>
                    <br />
                    <Typography
                      sx={{
                        color: "#232629",
                        fontWeight: 400,
                        fontSize: { md: "15px", sm: "13px", xs: "11px" },
                      }}
                    >
                      I have an OMRON NB5Q-TW01B HMI that seems to work fine
                      with my control system design. However, there are 9 system
                      default windows that cannot be deleted on NB-Designer.
                    </Typography>
                    <br />
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
                          p: 1,
                          backgroundColor: "#D9EAF7",
                          borderRadius: "10px",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <Typography sx={{ p: 1, color: "#6A737C" }}>
                            {sec}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Avatar
                              variant="square"
                              src={authImg}
                              sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "10px",
                                pl: 1,
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexDirection: "column",
                              pl: 1,
                            }}
                          >
                            <Typography
                              sx={{ color: "#0074CC", lineHeight: 1 }}
                            >
                              {authName}
                            </Typography>
                            <Typography
                              sx={{ color: "#525960", fontWeight: 700 }}
                            >
                              {asked}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Box>
                <Typography>Add a comment</Typography>

                <Box sx={{ fontSize: { md: "17px", sm: "13px", xs: "11px" } }}>
                  Know someone who can answer? Share a link to this{" "}
                  <Link href="#" underline="none" color="#0a95ff">
                    Question
                  </Link>{" "}
                  via{" "}
                  <Link href="#" underline="none" color="#0a95ff">
                    email
                  </Link>
                  ,{" "}
                  <Link href="#" underline="none" color="#0a95ff">
                    Twitter
                  </Link>
                  , or{" "}
                  <Link href="#" underline="none" color="#0a95ff">
                    Facebook
                  </Link>
                  . Your Answer
                </Box>

                <MyEditor />

                <br />
                <Button
                  variant="contained"
                  sx={{
                    color: "##ffffff",
                    backgroundColor: "#0A95FF",
                    fontWeight: 400,
                    fontSize: { md: "13px", sm: "12px", xx: "11px" },
                  }}
                >
                  Post Your Answer
                </Button>
                <Button variant="outlined" sx={{ border: "none", ml: 1 }}>
                  Discard
                </Button>
              </Box>
              <br />
              <br />
              <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />
            </Box>
          );
        }
      )}
    </Box>
  );
};

export default QueAns;
