import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  InputBase,
  useTheme,
  Typography,
  Paper,
} from "@mui/material";
import Loading from "../Loader/Loading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ResendEmailVerifyCode } from "../../api/api";
import useMakeToast from "../../hooks/makeToast";

const ReSendVerifyCode = ({ handleClose }) => {
  const { email } = useSelector((state) => state?.user?.userRegister);
  const makeToast = useMakeToast();

  // console.log("reSendEmail", email);
  const theme = useTheme();
  const navigate = useNavigate();

  const [sendEmail, setSendEmail] = useState("");

  useEffect(() => {
    setSendEmail(email);
  }, [email]);

  const handleResendVerifyCode = async () => {
    setLoading(true);

    if (!sendEmail) {
      toast.error("Kindly type your email");
      setLoading(false);
      return;
    }
    // console.log("sendEmail", sendEmail);
    const data = {
      email: sendEmail,
    };
    const response = await ResendEmailVerifyCode(data, setLoading);
    if (response?.data?.success === true) {
      navigate("/verificationCode");
      makeToast(response?.data.message, "success", 3);
      handleClose();
    } else {
      makeToast(response?.data.message, "warn", 3);
    }
    setLoading(false);
  };

  // _______________Loading State________________
  const [loading, setLoading] = useState(false);

  //----------------------------Timer------------------------------------
  const [seconds, setSeconds] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [resendButtonEnabled, setResendButtonEnabled] = useState(true);

  useEffect(() => {
    let timer;

    if (timerRunning && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setTimerRunning(false);
    }

    return () => clearInterval(timer);
  }, [seconds, timerRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <Loading isLoading={loading} />

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
            mt: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mt: 2.5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                py: 2,
              }}
            >
              Resend Verify Code
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <InputBase
                placeholder="Enter Your Email"
                value={sendEmail}
                onChange={(e) => setSendEmail(e.target.value)}
                required
                sx={{
                  background: theme.palette.background.grayBg,
                  border: `1px solid ${theme.palette.background.borderLight}`,
                  borderRadius: "10px",
                  py: 0.7,
                  px: 0.5,
                  textAlign: "center",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleResendVerifyCode}
                  disabled={timerRunning || !resendButtonEnabled}
                  sx={{
                    width: "100%",
                  }}
                >
                  {timerRunning ? "Sending..." : "Resend Code"}
                </Button>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <p>{formatTime(seconds)}</p>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ReSendVerifyCode;
