import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import Loading from "../Loader/Loading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../ReduxToolKit/userSlice";

import { Google, GitHub, Facebook } from "@mui/icons-material";

const buttonStyles = {
  my: 1,
  py: 0.8,
  fontWeight: 400,
  fontSize: { md: "13px", sm: "12px", xs: "11px" },
  textTransform: "none",
};

const googleIconStyles = {
  fontSize: { md: "17px", sm: "12px", xs: "11px" },
  mr: 1,
  p: 0.2,
  backgroundColor: "#ffffff",
  borderRadius: "50%  ",
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function PasswordFieldWithToggle(props) {
  const { showPassword, togglePassword } = props;
  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePassword} edge="end">
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // _______________Loading State________________

  const [loading, setLoading] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  //img
  const [userImage, setImage] = React.useState();
  const [showImage, setShowImage] = React.useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    //img show
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setShowImage(reader.result);
  };

  const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (data) => {
    // email,firstName,lastName,password, avatar

    console.log(data, userImage);

    const formData = new FormData();
    formData.append("avatar", userImage);
    for (const key in data) {
      formData.append(key, data[key]);
    }
    setLoading(true);

    // dispatch(signup(formData));
    const response = await dispatch(signup(formData));
    setLoading(false);

    const email = response?.payload?.email;
    console.log("response.payload", email);

    if (response.payload) {
      // navigate("/verificationCode", { state: { email } });
      navigate("/verificationCode");
    }
  };

  return (
    <>
      <Loading isLoading={loading} />

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "#ffffff ",
                width: "100px",
                height: "100px",
              }}
            >
              {showImage ? (
                <Avatar
                  src={showImage}
                  sx={{ width: "100%", height: "100%", my: 2, m: "auto" }}
                />
              ) : (
                // <LockOutlinedIcon />
                <svg
                  aria-hidden="true"
                  class="native svg-icon iconLogoGlyphMd"
                  width="32"
                  height="37"
                  viewBox="0 0 32 37"
                >
                  <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                  <path
                    d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                    fill="#F48024"
                  ></path>
                </svg>
              )}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    color: "#232629",

                    backgroundColor: "#ffffff",
                  }}
                >
                  <Google
                    sx={{
                      ...googleIconStyles,
                      color: "orange",
                    }}
                  />
                  Log in with Google
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#2F3337",
                    color: "#ffffff",
                  }}
                >
                  <GitHub
                    sx={{
                      ...googleIconStyles,
                      color: "#2F3337",
                    }}
                  />
                  Log in with GitHub
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#385499",
                    Color: "#ffffff",
                  }}
                >
                  <Facebook
                    sx={{
                      ...googleIconStyles,
                      color: "#385499",
                    }}
                  />
                  Log in with Facebook
                </Button>
              </Box>
              <br />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "First Name is required" }}
                    render={({ field }) => (
                      <TextField
                        autoComplete="given-name"
                        fullWidth
                        label="First Name"
                        autoFocus
                        {...field}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Last Name is required" }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Last Name"
                        {...field}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Email Address"
                        {...field}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    }}
                    render={({ field }) => (
                      <PasswordFieldWithToggle
                        fullWidth
                        label="Password"
                        {...field}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        showPassword={showPassword}
                        togglePassword={togglePassword}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    name="avatar"
                    accept=".jpg, .jpeg, .png, .gif"
                    required
                    onChange={handleFileChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
