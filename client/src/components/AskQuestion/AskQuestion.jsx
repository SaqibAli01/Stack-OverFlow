import React, { useEffect } from "react";
import { Box, InputBase, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useMakeToast from "../../hooks/makeToast";
import { AsksQue, getQuestion } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader/Loading";
import { useNavigate } from "react-router-dom";
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
    handlers: {
      image: imageHandler,
    },
  },
};

function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt("please copy paste the image url here.");
  if (value) {
    this.quill.insertEmbed(range.index, "image", value);
  }
}

const AskQuestion = () => {
  const authUser = useSelector((state) => state?.user?.user);
  console.log("🚀 ~ file: AskQuestion.jsx:41 ~ authUser:", authUser);
  console.log(`http://localhost:8000/${authUser?.user?.avatar}`);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [uId, setUID] = useState();
  console.log("🚀 ~ name:", uId);
  const navigate = useNavigate();
  useEffect(() => {
    setAvatar(`http://localhost:8000/${authUser?.user?.avatar}`);
    setName(authUser?.user?.firstName + " " + authUser?.user?.lastName);
    setUID(authUser?.user?._id);
  }, []);

  const [loading, setLoading] = React.useState(false);
  const makeToast = useMakeToast();

  const theme = useTheme();
  const [value, setValue] = useState("");
  const [allow, setAllow] = useState(true);
  // const devRef = useRef(null);
  // const [Show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
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
    const data = { text: value, id: uId };
    // console.log("🚀 ~ file: AskQuestion.jsx:55 ~ postBlogs ~ data:", data);

    // const response = await createPrivacyPolicy({ privacyPolicy: value });
    const response = await AsksQue(data, setLoading, dispatch);
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
  return (
    <>
      <Loading isLoading={loading} />

      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
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
              Ask Question
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

export default AskQuestion;
