import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Google, GitHub, Facebook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { login } from "../../api/api";
import useMakeToast from "../../hooks/makeToast";
import { useDispatch } from "react-redux";
import Loading from "../Loader/Loading";

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
    <Box
      // variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="" color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Box>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const makeToast = useMakeToast();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const myData = new FormData(event.currentTarget);
      // console.log({
      //   email: myData.get("email"),
      //   password: myData.get("password"),
      // });

      const data = {
        email: myData.get("email"),
        password: myData.get("password"),
      };
      const response = await login(data, setLoading, dispatch);
      if (response?.data?.success === true) {
        navigate("/");
        makeToast(response?.data.message, "success", 3);
      } else {
        makeToast(response?.data.error, "warn", 3);
      }
    } catch (err) {
      console.log("error", err);
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
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Box sx={{ mb: 2 }}>
              <svg
                aria-hidden="true"
                className="native svg-icon iconLogoGlyphMd"
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
            </Box>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
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

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Button
                    sx={{
                      textTransform: "none",
                    }}
                    variant="text"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    Forgot password?
                  </Button>
                  {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      textTransform: "none",
                    }}
                    variant="text"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}
