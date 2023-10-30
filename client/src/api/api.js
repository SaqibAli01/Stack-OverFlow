import useMakeToast from "../hooks/makeToast";

import axios from "axios";
import Cookies from "js-cookie";
import { signIn, signUp } from "../ReduxToolKit/userSlice";

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
    console.log("🚀 egisterUserVerify ~ response:", response);
    return response;
  } catch (error) {
    console.log("error:", error);
    return error.response;
  } finally {
    setLoading(false);
  }
};

export const ResendEmailVerifyCode = async (data, setLoading) => {
  console.log("🚀 ~ file: api.js:61 ~ ResendEmailVerifyCode ~ data:", data);
  try {
    setLoading(true);
    const response = await axios.post(`${url}/resend-verification`, data);
    console.log("🚀 ~ f ~ response:", response);
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
    console.log("🚀  login ~ response:", response);
    return response;
  } catch (err) {
    console.log(" ~ err:", err);
    return err?.response;
  } finally {
    setLoading(false);
  }
};

// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

// export const getAdminData = async (id, setLoading, dispatch) => {
//   try {
//     setLoading(true);
//     const response = await axios.get(`${URL}/api/user/userData/${id}`);
//     if (response) {
//       dispatch(adminData(response.data));
//       return response;
//     }
//   } catch (error) {
//     return error.response;
//   } finally {
//     setLoading(false);
//   }
// };

// export const updateProfile = async (data, setLoading, dispatch) => {
//   // console.log("🚀 ~ file: api updateProfile ~ data:", data);
//   try {
//     setLoading(true);
//     const response = await axios.put(`${URL}/api/user/updateProfile`, data);
//     // console.log("Api updateProfile ~ response:", response?.data);
//     if (response) {
//       dispatch(adminData(response.data));
//       return response;
//     }
//   } catch (error) {
//     // console.log("error: ", error);
//     return error.response;
//   } finally {
//     setLoading(false);
//   }
// };

// export const allUsers =
//   ({ limit, page } = {}) =>
//   async (dispatch) => {
//     // console.log('limit', limit)
//     try {
//       const response = await axios.get(
//         `${URL}/api/user/allUser?page=${page}&limit=${limit}`
//       );
//       // console.log( "all User",response.data);
//       dispatch(addAllUser(response.data));
//     } catch (err) {
//       return err?.response;
//     }
//   };
