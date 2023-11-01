import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  InputBase,
  Typography,
  styled,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../ReduxToolKit/userSlice";
import { useState } from "react";
import { useEffect } from "react";

import Badge from "@mui/material/Badge";

import Stack from "@mui/material/Stack";

const btnStyles = {
  textTransform: "none",
  color: "#fff",
  backgroundColor: "#0A95FF",
  fontSize: { md: "13px", sm: "12px", xs: "11px" },
  fontWeight: "400",
  width: "70px",
  minHeight: "35px",
  padding: "10px 1px",
  textAlign: "center",
  py: 0.5,
  px: 0.5,
  "&:hover": {
    color: "White",
    backgroundColor: "orange",
  },
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const NavWeb = () => {
  const navigate = useNavigate();

  const authUser = useSelector((state) => state?.user);
  console.log("🚀 ~ file: NavWeb.jsx:80  authUser:", authUser?.user?.user);
  // console.log(`http://localhost:8000/${authUser?.user?.user?.avatar}`);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    setAvatar(`http://localhost:8000/${authUser?.user?.user?.avatar}`);
    setName(authUser?.user?.firstName);
  }, []);

  const array = [
    { name: "About", link: "/" },
    { name: "Product", link: "/accounts" },
    { name: "Teams", link: "/invest" },
  ];

  const signUpHandler = (e) => {
    e.preventDefault();
    navigate("/sign-up");
  };

  const logInHandler = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    // alert("logout");
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          p: 1,
          // mt: 2,
          width: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "inherit",
            width: "100%",
            py: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: "300px",
            }}
          >
            <Avatar
              variant="square"
              alt="logo"
              src={`${logo}`}
              sx={{ width: "20px", height: "100%" }}
            />

            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { md: "20px", sm: "16px", xs: "12px" },
                fontStyle: "normal",
                fontWeight: 400,

                "& span": {
                  fontWeight: 700,
                },
              }}
            >
              stack <span>overflow</span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              gap: "5px",
              width: "100%",
            }}
          >
            {array.map((item, index) => {
              const styledActiveLink = ({ isActive }) => {
                return {
                  FontFamily: "Inter",
                  textDecoration: "none",
                  padding: "10px 14px",
                  fontSize: isActive ? "13px" : "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "25px",
                  color: isActive ? "#fff" : "#232629",
                  backgroundColor: isActive ? "#F48225" : "#fff",
                  justifyContent: "center",
                  height: "18px",
                  fontWeight: 400,
                };
              };
              return (
                <NavLink to={item.link} style={styledActiveLink} key={index}>
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        textAlign: "center",
                        fontSize: { md: "13px", sm: "12px", xs: "11px" },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </NavLink>
              );
            })}
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                borderRadius: "10px",
                width: "100%",
                // border: "1px solid red",
              }}
            >
              <InputBase
                placeholder="Search ..."
                sx={{
                  ml: 2,
                  border: "1px solid #838C95",
                  width: "100%",
                  borderRadius: "10px",
                  height: "30px",

                  px: 2,
                  py: 0.1,
                  mr: 1,
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Search
                      sx={{
                        width: "100%",
                        color: "#838C95",
                        fontSize: "1.6rem",

                        ":hover": {
                          cursor: "pointer",
                        },
                      }}
                    />
                  </InputAdornment>
                }
              />
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                }}
              >
                {authUser?.user?.success === true ? (
                  <>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        alt={`${authUser?.user?.firstName}`}
                        src={`http://localhost:8000/${authUser?.user?.user?.avatar}`}
                      />
                    </StyledBadge>
                    {/* <Typography>{authUser?.user?.firstName}</Typography> */}
                    <Button
                      size="small"
                      sx={{
                        ...btnStyles,
                      }}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      // variant="contained"
                      size="small"
                      sx={{
                        ...btnStyles,
                        color: "#2c5877",
                        backgroundColor: "#E1ECF4",
                      }}
                      onClick={logInHandler}
                    >
                      Log in
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        ...btnStyles,
                      }}
                      onClick={signUpHandler}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavWeb;
