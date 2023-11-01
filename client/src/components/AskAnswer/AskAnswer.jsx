import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useMakeToast from "../../hooks/makeToast";
import { AskAnswerApi, AsksQue, getQuestion } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader/Loading";
import { useNavigate, useParams } from "react-router-dom";

var quill;
const modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  },
};

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

const AskAnswer = () => {
  const { id } = useParams();
  // console.log("🚀 ~ AskAnswer ~ id:", id);

  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width:1300px)");

  const authUser = useSelector((state) => state?.user?.user);
  // console.log("🚀 ~ file: AskQuestion.jsx:41 ~ authUser:", authUser);

  // console.log(`http://localhost:8000/${authUser?.user?.avatar}`);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [uId, setUID] = useState();
  const [qId, setQID] = useState();
  // console.log("🚀 ~ name:", uId);
  const navigate = useNavigate();
  useEffect(() => {
    setAvatar(`http://localhost:8000/${authUser?.user?.avatar}`);
    setName(authUser?.user?.firstName + " " + authUser?.user?.lastName);
    setUID(authUser?.user?._id);
    setQID(id);
  }, []);

  //----------------------------------------------------------------
  const [allData, setAllData] = useState([]);

  const { data } = useSelector((state) => state?.user?.getQuestion);
  // console.log("🚀 allData:", allData);
  const filteredData = data?.filter((item) => item._id === id);

  useEffect(() => {
    const getQ = async () => {
      const response = await getQuestion(setLoading, dispatch);
      // console.log("🚀 ~ file: Ans.jsx:206 ~ getQ ~ response:", response);
    };
    getQ();

    setAllData(data);
  }, []);
  //----------------------------------------------------------------
  const [loading, setLoading] = React.useState(false);
  const makeToast = useMakeToast();

  const theme = useTheme();
  const [value, setValue] = useState("");
  const [allow, setAllow] = useState(true);
  // const devRef = useRef(null);
  // const [Show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const postBlogs = async () => {
    if (!allow) return false;
    if (!value) {
      makeToast("Please write some data", "error", 3);
      return false;
    }
    if (!uId) {
      makeToast("User not login", "error", 3);
      navigate("/sign-in");
      return false;
    }

    setAllow(false);

    const data = { text: value, userId: uId, questionId: qId };

    const response = await AskAnswerApi(data, setLoading, dispatch);
    console.log("response?.data", response?.data);
    if (response?.data?.success === true) {
      // makeToast("Question add Successfully", "success", 4);
      await getQuestion(setLoading, dispatch);
      document.querySelector(".ql-editor").innerHTML = null;
      navigate("/");
      // setTimeout(() => {
      //   document.querySelector(".ql-editor").innerHTML = null;
      //   setValue(null);
      // }, 100);
      setTitle("");
      setAllow(true);
      setValue(null);
    }
  };

  return (
    <>
      <Loading isLoading={loading} />
      <Box sx={{ width: "100%", mt: 2 }}>
        <Divider sx={{ border: "1px solid #BABFC4", my: 1 }} />

        {filteredData?.map((item, i) => {
          return (
            <Box key={i} sx={{ m: 2 }}>
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

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              // display: 'flex',
              // justifyContent: 'space-between',
              //   bgcolor: `${theme.palette.background.light}`,
              alignItems: "center",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              boxShadow: "0 0 2px rgba(0,0,0,0.5)",
            }}
            p={1}
            mx={1.1}
            mt={1}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: `${theme.palette.text.primary}`,
              }}
            >
              Ask Answer
            </Typography>
          </Box>
          <Box px={1}>
            <ReactQuill
              ref={(el) => {
                quill = el;
              }}
              modules={modules}
              theme="snow"
              onChange={setValue}
              placeholder="type Your Question..."
              height="400px"
              width="100%"
              style={{
                color: `${theme.palette.background.primary}`,
              }}
            />
            <Box
              mx={0.1}
              px={1}
              sx={{
                bgcolor: `${theme.palette.background.light}`,
                height: "50px",
                borderBottomLeftRadius: "7px",
                borderBottomRightRadius: "7px",
                boxShadow: "0 0 2px rgba(0,0,0,0.5)",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#F49D1A",
                    padding: "7px 14px",
                    outline: "none",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                    letterSpacing: "1px",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "70px",
                  }}
                  onClick={() =>
                    (document.querySelector(".ql-editor").innerHTML = null)
                  }
                >
                  Clear
                </button>
                <button
                  style={{
                    backgroundColor: "#285430",
                    padding: "7px 14px",
                    outline: "none",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                    letterSpacing: "1px",
                    fontSize: "16px",
                    fontWeight: "500",
                    width: "70px",
                  }}
                  onClick={postBlogs}
                >
                  Add
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AskAnswer;
