import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";

import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

//theme

const NavWeb = () => {
  const array = [
    { name: "About", link: "/" },
    { name: "Product", link: "/accounts" },
    { name: "Teams", link: "/invest" },
  ];

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
              height: "40px",
              gap: "5px",
              width: "100%",
              // border: "1px solid red",
            }}
          >
            {array.map((item, index) => {
              const styledActiveLink = ({ isActive }) => {
                return {
                  FontFamily: "Inter",
                  textDecoration: "none",
                  padding: "10px 14px",
                  fontSize: isActive ? "24px" : "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  borderRadius: "25px",
                  color: isActive ? "#fff" : "#525960",
                  backgroundColor: isActive ? "#F48225" : "#fff",
                  justifyContent: "center",
                  height: "18px",
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
                        fontSize: "14px",
                        fontWeight: 700,
                        // height: "12px",
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
                width: "90%",
              }}
            >
              <InputBase
                placeholder="Search ..."
                sx={{
                  ml: 2,
                  border: "1px solid #838C95",
                  width: "100%",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.1,
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
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#39739D",
                  backgroundColor: "#E1ECF4",
                  width: "83px",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: "700",
                  "&:hover": {
                    color: "White",
                  },
                }}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  backgroundColor: "#0A95FF",
                  width: "93px",
                  height: "40px",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavWeb;
