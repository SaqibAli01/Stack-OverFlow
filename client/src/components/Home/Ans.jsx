import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import myPic from "../../assets/mypic.JPEG";
import useMakeToast from "../../hooks/makeToast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader/Loading";
import { getQuestion } from "../../api/api";
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

// const data = [
//   {
//     votes: 0,
//     answers: 0,
//     views: 2,
//     questions:
//       "requestAnimationFrame calculation speed does not catch up with scroll speed",
//     languages: "JavaScript",
//     languages1: "react.js",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 190,
//     sec: "asked 54 secs ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions:
//       "rHow to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "andriod",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions: "Django - Site requested, but not rendered",
//     languages: "DJango",

//     authImg: myPic,
//     authName: "Miquest",
//     asked: 1,
//     sec: "modified 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 1,
//     questions:
//       "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "JavaScript",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions:
//       "Looping through a select object causes TypeError despite an example in documentation",
//     languages: "Pyhton",
//     languages1: "PostgreSQL",
//     authImg: myPic,
//     authName: "Ani",
//     asked: 120,
//     sec: "asked 2 min ago",
//   },
//   {
//     votes: 0,
//     answers: 1,
//     views: 1,
//     questions:
//       "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "JavaScript",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 2,
//     questions:
//       "requestAnimationFrame calculation speed does not catch up with scroll speed",
//     languages: "JavaScript",
//     languages1: "react.js",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 190,
//     sec: "asked 54 secs ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions:
//       "rHow to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "andriod",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions: "Django - Site requested, but not rendered",
//     languages: "DJango",

//     authImg: myPic,
//     authName: "Miquest",
//     asked: 1,
//     sec: "modified 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 1,
//     questions:
//       "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "JavaScript",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
//   {
//     votes: 0,
//     answers: 0,
//     views: 3,
//     questions:
//       "Looping through a select object causes TypeError despite an example in documentation",
//     languages: "Pyhton",
//     languages1: "PostgreSQL",
//     authImg: myPic,
//     authName: "Ani",
//     asked: 120,
//     sec: "asked 2 min ago",
//   },
//   {
//     votes: 0,
//     answers: 1,
//     views: 1,
//     questions:
//       "How to work out what is calling onPlay in my MediaSessionCompat.Callback",
//     languages: "JavaScript",
//     languages1: "Java",
//     authImg: myPic,
//     authName: "Saqib",
//     asked: 1200,
//     sec: "asked 1 min ago",
//   },
// ];

const Ans = () => {
  const matches = useMediaQuery("(max-width:1300px)");
  //   const matches1 = useMediaQuery("(max-width:1050px)");

  const [loading, setLoading] = React.useState(false);
  const makeToast = useMakeToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [allData, setAllData] = useState([]);

  const { data } = useSelector((state) => state?.user?.getQuestion);
  console.log("🚀 allData:", allData);

  useEffect(() => {
    const getQ = async () => {
      const response = await getQuestion(setLoading, dispatch);
      setAllData(response?.data?.data);
    };
    getQ();
  }, []);

  return (
    <>
      <Loading isLoading={loading} />

      <Box sx={{ width: "100%" }}>
        <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />

        {allData
          ?.slice()
          .reverse()
          .map((item, i) => {
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
                      <Text>{0} votes</Text>
                      <Text>{2} answers</Text>
                      <Text>{1} views</Text>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={9.5}>
                    <Box>
                      {/* <Typography sx={{ color: "#0074CC", fontWeight: 500 }}>
                        {item?.text}
                      </Typography> */}
                      <Box
                        sx={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(`/AskAnswer/${item?._id}`);
                        }}
                      >
                        <div
                          style={{ color: "#0074CC", fontWeight: 500 }}
                          dangerouslySetInnerHTML={{ __html: item?.text }}
                        />
                      </Box>
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
                            {/* {languages} */}
                            JavaScript,
                          </Typography>

                          <Typography
                            sx={{
                              backgroundColor: "#E1ECF4",
                              color: "#39739D",
                              width: "fitContent",
                              borderRadius: "10px",
                              p: 1,
                            }}
                          >
                            {"TypeScript"}
                          </Typography>
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
                            src={`http://localhost:8000/${item?.user?.avatar}`}
                            sx={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "10px",
                            }}
                          />

                          <Typography sx={{ p: 1, color: "#0074CC" }}>
                            {item?.user?.firstName + " " + item?.user?.lastName}
                          </Typography>
                          <Typography
                            sx={{ p: 1, color: "#525960", fontWeight: 700 }}
                          >
                            {190}
                          </Typography>
                          <Typography sx={{ p: 1, color: "#6A737C" }}>
                            {"asked 54 secs ago"}
                          </Typography>

                          {/* i want to show date */}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />
              </Box>
            );
          })}
      </Box>
    </>
  );
};

export default Ans;
