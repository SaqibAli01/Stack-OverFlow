import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useMakeToast from "../../hooks/makeToast";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {
  AskAnswerApi,
  AsksQue,
  commentsAdd,
  getAnswerApi,
  getComments,
  getQuestion,
  verifyAnswer,
} from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader/Loading";
import { useNavigate, useParams } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { allComments } from "../../ReduxToolKit/userSlice";

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

  const { getAns } = useSelector((state) => state?.user);
  // console.log("🚀 ~getAns redux:", getAns);

  // console.log("🚀 ~ file: AskQuestion.jsx:41 ~ authUser:", authUser);

  // console.log(`http://localhost:8000/${authUser?.user?.avatar}`);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [uId, setUID] = useState();
  const [qId, setQID] = useState();
  // console.log("🚀 ~ name:", uId);
  const navigate = useNavigate();

  const getAnsr = async (state) => {
    const response = await getAnswerApi(id ? id : qId, setLoading, dispatch);
    // console.log("🚀 ~ file: AskAnswer.jsx:80 ~ response:", response?.data);
  };

  useEffect(() => {
    setAvatar(`http://localhost:8000/${authUser?.user?.avatar}`);
    setName(authUser?.user?.firstName + " " + authUser?.user?.lastName);
    setUID(authUser?.user?._id);
    setQID(id);
    getAnsr();
  }, []);

  //----------------------------------------------------------------
  const [allData, setAllData] = useState([]);

  // const filterUserQue = allData?.filter(
  //   (item) => item?.user?._id === authUser?.user?._id
  // );
  // const res = filterUserQue?.map((item) => item.user?._id);
  // console.log("res", res[0]);
  const { userComment } = useSelector((state) => state?.user);
  // console.log("AskAnswer ~ getComments:", userComment);

  const { data } = useSelector((state) => state?.user?.getQuestion);
  // console.log("🚀 allData:", allData);
  const filteredData = data?.filter((item) => item._id === id);

  const getComm = async () => {
    const response = await getComments(setLoading, dispatch);
    // console.log("🚀 ~ All Comments:-----------------:", response);
  };
  useEffect(() => {
    const getQ = async () => {
      const response = await getQuestion(setLoading, dispatch);
      setAllData(response?.data?.data);
    };
    getQ();

    getComm();

    // setAllData(data);
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

    const data = {
      text: value,
      userId: uId,
      questionId: qId,
    };

    const response = await AskAnswerApi(data, setLoading, dispatch);
    // console.log("response?.data", response?.data);
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

  //-----------commit add-----------
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [showCommentField, setShowCommentField] = useState(false);

  const addCommentHandler = (postId) => {
    setActivePost(postId);
    // alert(postId);
    setShowCommentField(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // const handleAddComment = (id) => {
  //   alert(id);
  //   if (comment.trim() !== "") {
  //     setComments([...comments, comment]);
  //     setComment("");
  //   }
  // };

  const handleAddComment = async (item) => {
    // alert(JSON.stringify(item));
    // const data = JSON.stringify(item);
    // const userId = item?.user?._id;
    const commits = comment;
    const userIds = authUser?.user?._id ? authUser?.user?._id : uId;
    const answerIds = item?._id;
    const questionIds = item?.questionId;

    const data = {
      text: commits,
      userId: userIds,
      questionId: questionIds,
      answerId: answerIds,
    };

    if (comment.trim() !== "") {
      // console.log("data", data);
      const response = await commentsAdd(data, setLoading);
      // console.log("🚀 ~ response:", response);

      const newComment = { id: answerIds, text: comment };
      // allComments([...comments, newComment]);
      setComments([...comments, newComment]);
      setComment("");
      getComm();
    }
  };

  //------------Corrrect answer --------------------

  const correctAnswer = async (id) => {
    alert(id);
    const data = {
      answerId: id,
    };
    const response = await verifyAnswer(data, setLoading);
    console.log("🚀 ~  correctAnswer ~ response:", response);
  };

  //------------ Answer up arrow --------------------
  const handleAnswerUp = (id) => {
    alert(id);
  };

  const [sortOrder, setSortOrder] = useState("desc"); // 'desc' for descending, 'asc' for ascending

  // Toggle sort order when the button is clicked
  const handleSortClick = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };
  // const handleSortClick = () => {
  //   setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  // };

  return (
    <>
      <Loading isLoading={loading} />
      <Container>
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
                      <Box></Box>
                      {item?.answerCount === 0 ? (
                        <Text>{item?.answerCount} answers</Text>
                      ) : (
                        <Text>{item?.answerCount + 1} answers</Text>
                      )}
                      {/* {item?.viewCount === 0 ? (
                        <Text>{item?.viewCount} views</Text>
                      ) : (
                        <Text>{item?.viewCount + 1} views</Text>
                      )} */}
                      <Text>{item?.viewCount} views</Text>
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
            display: "flex",
            m: 1,
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {
              // getAns?
              getAns
                ?.slice()
                .sort((a, b) => {
                  if (sortOrder === "asc") {
                    return a.viewCountAnswer - b.viewCountAnswer;
                  } else {
                    return b.viewCountAnswer - a.viewCountAnswer;
                  }
                })
                .map((item, i) => {
                  console.log("🚀  ~ item:", item);
                  return (
                    <Box
                      key={i}
                      sx={{
                        width: "100%",
                        // border: "1px solid red",
                        display: "flex",
                        borderBottom: "2px solid #BABFC4",
                        // flexDirection: "column",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          pr: 2,
                          // border: "1px solid black ",
                        }}
                      >
                        {item?.viewCount}

                        <ArrowDropUpIcon
                          sx={{
                            border: "1px solid #BABFC4",
                            cursor: "pointer",
                            fontSize: "36px",
                            p: 0.1,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#FAECC6",
                            },
                          }}
                          // onClick={() => handleAnswerUp(item._id)}
                          onClick={handleSortClick}
                        />

                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            py: 1,
                          }}
                        >
                          3
                        </Typography>
                        <ArrowDropDownIcon
                          sx={{
                            border: "1px solid #BABFC4",
                            cursor: "pointer",
                            fontSize: "36px",
                            p: 0.1,
                            mb: 2,
                            borderRadius: "50%",
                            "&:hover": {
                              backgroundColor: "#FAECC6",
                            },
                          }}
                          onClick={handleSortClick}
                        />
                        {item?.verifiedAnswers === true && (
                          <CheckIcon
                            sx={{
                              fontSize: "40px",
                              color: "#18864b",
                              mt: 1,
                              fontWeight: 400,
                            }}
                          />
                        )}
                      </Box>

                      <Box
                        sx={{
                          width: "100%",
                          // border: "1px solid red",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography sx={{ fontWeight: 500 }}>
                            Answer {i + 1}
                          </Typography>

                          <div
                            style={{ padding: "5px " }}
                            dangerouslySetInnerHTML={{ __html: item?.text }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={`http://localhost:8000/${item?.user?.avatar}`}
                              alt="img"
                            />
                            <Typography fontWeight={700} color={"#0A95FF"}>
                              {item?.user?.firstName} {item?.user?.lastName}
                            </Typography>
                          </Box>

                          {/* {authUser?.user?._id && item?.user?._id && ( */}

                          {authUser?.user?._id === item?.QuestionAuthor && (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {item?.verifiedAnswers === false && (
                                <div>
                                  <Button
                                    sx={{ color: "red", textTransform: "none" }}
                                  >
                                    <ClearIcon sx={{ fontSize: "20px" }} />{" "}
                                    Wrong
                                  </Button>
                                  <Button
                                    sx={{
                                      color: "green",
                                      textTransform: "none",
                                    }}
                                    onClick={() => correctAnswer(item?._id)}
                                  >
                                    <CheckIcon sx={{ fontSize: "20px" }} />{" "}
                                    Correct
                                  </Button>
                                </div>
                              )}
                            </Box>
                          )}
                        </Box>
                        {/* --------------------- Commit add ----------------- */}

                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Box
                            sx={{
                              width: "100%",
                              my: 1,
                            }}
                          >
                            <Button
                              onClick={(e) => addCommentHandler(item?._id)}
                              sx={{
                                textTransform: "none",
                              }}
                            >
                              Comments
                            </Button>

                            {/* /////////////////////////////////////////////////////////////////  */}

                            {showCommentField && activePost === item._id && (
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: 3,
                                  px: 2,
                                }}
                              >
                                <InputBase
                                  placeholder={`What on your Mind, `}
                                  // value={text}
                                  // onChange={(e) => setTextValue(e.target.value)}
                                  value={comment}
                                  onChange={handleCommentChange}
                                  sx={{
                                    background: theme.palette.background.grayBg,
                                    px: 5,
                                    borderRadius: "20px",
                                    width: "100%",
                                    py: 0.7,
                                  }}
                                />
                                <Button
                                  variant="contained"
                                  onClick={(e) => handleAddComment(item)}
                                  // onClick={() => handleAddComment(i)}

                                  sx={{
                                    px: 2,
                                  }}
                                >
                                  Comment
                                </Button>
                              </Box>
                            )}

                            {userComment?.map((ite, i) => (
                              <Box
                                key={i}
                                sx={{
                                  my: 1,
                                  // backgroundColor: "#F6F6F6",
                                  width: "100%",
                                }}
                              >
                                {item?._id === ite?.answerId && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      width: "100%",
                                      backgroundColor: "#F6F6F6",

                                      // border: "1px solid red",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        minWidth: "14%",
                                        p: 0.5,
                                      }}
                                    >
                                      <Avatar
                                        src={`http://localhost:8000/${ite?.userId?.avatar}`}
                                        alt="User Avatar"
                                      />

                                      <Typography
                                        sx={{
                                          width: "100%",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {ite?.userId?.firstName}{" "}
                                        {ite?.userId?.lastName}
                                      </Typography>
                                    </Box>

                                    <Typography
                                      sx={{
                                        width: "100%",
                                      }}
                                    >
                                      {ite?.text}
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })
            }
          </Box>
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
      </Container>
    </>
  );
};

export default AskAnswer;
