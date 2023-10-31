import useMakeToast from "../hooks/makeToast";

import axios from "axios";
import Cookies from "js-cookie";
import { AskQuestions, auth, signIn, signUp } from "../ReduxToolKit/userSlice";
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

axios.interceptors.request.use(
  (config) => {
    config.timeout = 40000;
    const AUTH_TOKEN = `${Cookies.get("access-token-ref")}` || "";
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `${AUTH_TOKEN}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

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

export const login = async (data, setLoading, dispatch) => {
  try {
    setLoading(true);
    const response = await axios.post(`${url}/user-login`, data);
    await dispatch(signIn(response?.data));
    await dispatch(auth(response?.data));
    // console.log("🚀  login ~ response:", response);
    return response;
  } catch (err) {
    console.log(" ~ err:", err);
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
  console.log("🚀 ~ file: api.js:127 ~ AsksQue ~ data:", data);
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
