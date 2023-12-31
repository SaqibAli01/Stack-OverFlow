import useMakeToast from "../hooks/makeToast";

import axios from "axios";
import Cookies from "js-cookie";
import {
  AskAnswers,
  AskQuestions,
  allComments,
  auth,
  deleteAnswerRedux,
  deleteCommentRedux,
  getAnswers,
  getQuestions,
  getSingleUserAnswers,
  getSingleUserQe,
  signIn,
  signUp,
} from "../ReduxToolKit/userSlice";
import makeToast from "../hooks/showToast";

const url = "http://localhost:8000/api/v1";

// import { setRegister } from "../ReduxToolKit/userSlice";

// import { allPostDetails } from "../redux/slices/allPostList";
// import {
//   addAllUser,
//   adminData,
//   allUserReport,
//   postReport,
// } from "../redux/slices/userSlice";
// export const URL = "railway.app";

// axios.interceptors.request.use(
//   (config) => {
//     config.timeout = 40000;
//     const AUTH_TOKEN = `${Cookies.get("access-token-ref")}` || "";
//     if (!config.headers["Authorization"]) {
//       config.headers["Authorization"] = `${AUTH_TOKEN}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export const registerUser = async (userData, setLoading, dispatch) => {
  try {
    setLoading(true);
    const response = await axios.post(`${url}/registerUser`, userData);
    await dispatch(signUp(response?.data));
    return response;
  } catch (error) {
    // console.log("error", error);
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const registerUserVerify = async (data, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.post(`${url}/verify`, data);
    // console.log("🚀 egisterUserVerify ~ response:", response);
    return response;
  } catch (error) {
    console.log("error:", error);
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const ResendEmailVerifyCode = async (data, setLoading) => {
  // console.log("🚀 ~ file: api.js:61 ~ ResendEmailVerifyCode ~ data:", data);
  try {
    setLoading(true);
    const response = await axios.post(`${url}/resend-verification`, data);
    // console.log("🚀 ~ f ~ response:", response);
    return response;
  } catch (error) {
    console.log("error:", error);
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const login = async (data, setLoading, dispatch, makeToast) => {
  try {
    setLoading(true);
    const response = await axios.post(`${url}/user-login`, data);
    await dispatch(signIn(response?.data));
    // await dispatch(auth(response?.data));
    console.log("🚀  login ~ response:", response);
    // if (response?.data?.success === true) {
    //   makeToast("Question submitted successfully", "success");
    // }
    return response;
  } catch (err) {
    // console.log(" ~ err:", err);
    return err?.response;
  } finally {
    setLoading(false);
  }
};

export const forgotPassword = async (data, setLoading) => {
  try {
    const email = { email: data };
    setLoading(true);
    const response = await axios.post(`${url}/forgot-Password`, email);
    // console.log("🚀 ~ f ~ response:", response);
    return response;
  } catch (error) {
    console.log("error:", error);
    // throw error;
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const resetPassword = async (data, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.post(
      `http://localhost:8000/reset-password/:token`,
      data
    );
    // console.log("🚀 ~ f ~ response:", response);
    return response;
  } catch (error) {
    console.log("error:", error);
    // throw error;
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const AsksQue = async (data, setLoading, dispatch) => {
  // console.log("🚀 ~ file: api.js:127 ~ AsksQue ~ data:", data);
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `http://localhost:8000/ask-question`,
      data,
      config
    );

    console.log("🚀 ~ file: api", response);
    await dispatch(AskQuestions(response?.data));
    makeToast("Question submitted successfully", "success");

    return response;
  } catch (error) {
    console.log("error:", error?.response);

    makeToast(`${error?.response?.data}`, "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const getQuestion = async (setLoading, dispatch) => {
  try {
    setLoading(true);

    const response = await axios.get(`http://localhost:8000/get-question`);
    // console.log("🚀 ~ file: api", response);
    await dispatch(getQuestions(response?.data));
    // makeToast("Question submitted successfully", "success");
    return response;
  } catch (error) {
    console.log("error:", error?.response);

    // makeToast(`${error?.response?.data}`, "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const AskAnswerApi = async (data, setLoading, dispatch) => {
  // console.log("🚀 ~ file: api.js:127 ~ AsksQue ~ data:", data);
  try {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);

    const response = await axios.post(
      `http://localhost:8000/ask-answer`,
      data,
      config
    );

    console.log("🚀 ~ file: api", response);
    await dispatch(AskAnswers(response?.data));

    makeToast("Answer submitted successfully", "success");

    return response;
  } catch (error) {
    console.log("error:", error?.response);

    makeToast(`${error?.response?.data}`, "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const getAnswerApi = async (qId, setLoading, dispatch) => {
  try {
    setLoading(true);
    const data = { questionId: qId };
    // console.log("Api Data Question Id -----", data);
    const response = await axios.post(`http://localhost:8000/get-answer`, data);
    // console.log("🚀 ~ file: api >>>>>>>>", response?.data);
    await dispatch(getAnswers(response?.data.data));
    // makeToast("Answers retrieved successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const commentsAdd = async (data, setLoading, dispatch) => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(
      `http://localhost:8000/add-comment`,
      data,
      config
    );
    console.log("🚀 ~add comments >>>>>>>>", response?.data);

    makeToast("Add Comment retrieved successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const getComments = async (setLoading, dispatch) => {
  try {
    setLoading(true);
    // console.log("Api Data Question Id -----", data);
    const response = await axios.get(`http://localhost:8000/get-comment`);
    // console.log("🚀 Get Comment Api", response?.data);

    await dispatch(allComments(response?.data.data));
    // makeToast("Get Comment successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const verifyAnswer = async (data, setLoading) => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:8000/verify-ans`,
      data,
      config
    );
    makeToast(" Verify  successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

//update profile

export const updateProfile = async (data, setLoading, dispatch) => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `http://localhost:8000/updateProfile`,
      data,
      config
    );
    await dispatch(signIn(response?.data));
    console.log("🚀 ~ file: api.js:332 ~ updateProfile ~ response:", response);

    makeToast(
      response?.data?.message
        ? response?.data?.message
        : " Update Profile successfully",
      "success"
    );

    return response;
  } catch (error) {
    console.error("Error:", error);

    // You should define the makeToast function
    makeToast(error?.response?.data || "An error occurred", "error");

    return error.response;
  } finally {
    setLoading(false);
  }
};

//get Answer single user profile
export const getSingleUserAns = async (data, setLoading, dispatch) => {
  try {
    setLoading(true);
    console.log("Get All Answers Id -----", data);
    const response = await axios.post(
      `http://localhost:8000/get-single-user-ans`,
      data
    );
    console.log("🚀 Get All Ans Api", response?.data);

    await dispatch(getSingleUserAnswers(response?.data.data));
    makeToast("Get Comment successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

//get Answer single user profile
export const getSingleUserQues = async (data, setLoading, dispatch) => {
  try {
    setLoading(true);
    console.log("Get All Answers Id -----", data);
    const response = await axios.post(
      `http://localhost:8000/get-single-user-que`,
      data
    );
    console.log("🚀 Get All Que  Api", response?.data);

    await dispatch(getSingleUserQe(response?.data.data));
    makeToast("Get Question  successfully", "success");
    return response;
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

// delete comments handler

export const deleteComment = async (commentId, dispatch, setLoading) => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `http://localhost:8000/delete-comment/${commentId}`,
      config
    );

    // console.log("🚀 ~delete comment >>>>>>>>", response?.data?.data);
    if (response?.data?.success === true) {
      // await deleteComment(commentId);
      dispatch(deleteCommentRedux(commentId));
      // getComments();
      makeToast("Comment deleted successfully", "success");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

// delete Answer

export const deleteAnswer = async (answerId, setLoading, dispatch) => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `http://localhost:8000/delete-answer/${answerId}`,
      config
    );
    console.log("🚀 ~deleteAnswer ~ response:", response);

    if (response?.data?.success === true) {
      dispatch(deleteAnswerRedux(answerId));
      makeToast("Answer deleted successfully", "success");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};

//delete questions

export const deleteQuestions = async (QuestionId, setLoading, dispatch) => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `http://localhost:8000/delete-question/${QuestionId}`,
      config
    );

    console.log("🚀 ~deleteAnswer ~ response:", response);

    if (response?.data?.success === true) {
      dispatch(deleteAnswerRedux(QuestionId));
      makeToast("Question Deleted Successfully", "success");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    makeToast(error?.response?.data || "An error occurred", "error");
    return error.response;
  } finally {
    setLoading(false);
  }
};
