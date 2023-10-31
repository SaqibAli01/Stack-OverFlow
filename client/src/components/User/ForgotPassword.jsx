import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api/api";
import Loading from "../Loader/Loading";
import useMakeToast from "../../hooks/makeToast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = React.useState(false);
  const makeToast = useMakeToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    // console.log("Email submitted:", email);
    const response = await forgotPassword(email, setLoading);
    // console.log("🚀 ~ file: ForgotPassword ~ response:", response);
    if (response?.data?.success === true) {
      navigate("/email-msg");
      makeToast(response?.data.message, "success", 3);
    } else {
      makeToast(response?.data.message, "warn", 3);
    }
  };

  return (
    <>
      <Loading isLoading={loading} />

      <Box
        sx={{
          width: "100%",
          minHeight: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: 400, sm: 400, xs: "90%" },
            border: "1px solid #000000",
            p: { md: 4, sm: 3, xs: 2 },
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
            Forgot Password
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            required
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />

          <Button
            sx={{
              mt: 2,
              textAlign: "center",
            }}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
