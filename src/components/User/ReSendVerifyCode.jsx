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
import { useDispatch } from "react-redux";
import { resendVerificationCode } from "../../ReduxToolKit/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReSendVerifyCode = ({ reSendEmail, handleClose }) => {
  console.log("reSendEmail", reSendEmail);
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sendEmail, setSendEmail] = useState("");

  useEffect(() => {
    setSendEmail(reSendEmail);
  }, [reSendEmail]);

  const handleResendVerifyCode = async () => {
    setLoading(true);

    if (!sendEmail) {
      toast.error("Kindly type your email");
      setLoading(false);
      return;
    }

    const response = await dispatch(resendVerificationCode(sendEmail));
    setLoading(false);

    if (response.payload) {
      handleStartTimer();
      navigate("/verificationCode");
    }

    setTimeout(() => {
      handleClose();
    }, 60000);
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

  const handleStartTimer = () => {
    if (!timerRunning && resendButtonEnabled) {
      setTimerRunning(true);
      setResendButtonEnabled(false);
      setSeconds(60); // Reset the timer to 60 seconds
      setTimeout(() => {
        setResendButtonEnabled(true); // Enable the button after one minute
      }, 60000); // 60,000 milliseconds = 1 minute
    }
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
