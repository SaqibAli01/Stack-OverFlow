import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppBar from "./pages/AppBar";
import Homes from "./pages/Homes";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/User/SignUp";
import VerificationCode from "./components/User/VerificationCode";
import ReSendVerifyCode from "./components/User/ReSendVerifyCode";
import SignIn from "./components/User/SignIn";
import Profile from "./components/User/Profile";
import ForgotPassword from "./components/User/ForgotPassword";
import PasswordForm from "./components/User/ResetPassword";
import EmailMsg from "./components/Email/EmailMsg";
import { useEffect, useState } from "react";
import axios from "axios";
import LogoutUser from "./components/logout/Logout";
import { useDispatch } from "react-redux";
import { auth } from "./ReduxToolKit/userSlice";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import AskAnswer from "./components/AskAnswer/AskAnswer";

function App() {
  const [data, setData] = useState({});
  // console.log("🚀  App ~ data:", data);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8000/protected-route", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(auth(response?.data));
        setData(response?.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/logout" element={<LogoutUser />} />

        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/AskAnswer/:id" element={<AskAnswer />} />
        <Route path="/reset-password/:token" element={<PasswordForm />} />
        <Route path="/email-msg" element={data ? <EmailMsg /> : <Homes />} />
        <Route path="/verificationCode" element={<VerificationCode />} />
        <Route path="/ReSendVerifyCode" element={<ReSendVerifyCode />} />
        <Route path="/accounts" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
