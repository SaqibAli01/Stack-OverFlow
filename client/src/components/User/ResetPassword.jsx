import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { resetPassword } from "../../api/api";
import Loading from "../Loader/Loading";
import useMakeToast from "../../hooks/makeToast";
import { useNavigate, useParams } from "react-router-dom";

function PasswordForm() {
  const { token } = useParams();
  //   console.log("🚀 ~ token:", token);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = React.useState(false);
  const makeToast = useMakeToast();
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async () => {
    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm Password is required");
    } else {
      setConfirmPasswordError("");
    }

    if (password === confirmPassword) {
      // console.log("Password:", password);
      // console.log("Confirm Password:", confirmPassword);
      const data = {
        password: password,
        confirmPassword: confirmPassword,
        token: token,
      };
      const response = await resetPassword(data, setLoading, token);
      console.log(
        "🚀 ~ file: ResetPassword.jsx:53 ~ handleSubmit ~ response:",
        response
      );
      if (response?.data?.success === true) {
        navigate("/sign-in");
        makeToast(response?.data.message, "success", 3);
      } else {
        makeToast(response?.data?.message, "warn", 3);
      }
    } else {
      setConfirmPasswordError("Passwords do not match");
    }
  };

  return (
    <>
      <Loading isLoading={loading} />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: 400, sm: 400, xs: "90%" },
            border: "1px solid #000000",
            p: 2,
            m: 2,
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "30px", sm: "26px", xs: "22px" },
              textAlign: "center",
              fontWeight: "bold",
              pb: 2,
            }}
          >
            Reset Password
          </Typography>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={passwordError !== ""}
            helperText={passwordError}
          />
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={confirmPasswordError !== ""}
            helperText={confirmPasswordError}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default PasswordForm;
