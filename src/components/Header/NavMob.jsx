import React from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Avatar, Paper, Typography } from "@mui/material";

import logo from "../../assets/logo.png";

import DrawerLeft from "../Home/DrawerLeft";
// import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#F5F1F1",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "",
    },
  },
});

const NavMob = ({ children }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        // border: "1px solid red",
        height: "100vh",
        width: "100%",
        // backgroundColor: "#080604",
      }}
      key={anchor}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
      <br />

      <DrawerLeft />
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "0px",
              height: "60px",
            }}
          >
            <Hidden lgUp>
              {["left"].map((anchor, index) => (
                <React.Fragment key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Avatar
                        variant="square"
                        src={logo}
                        alt="img"
                        sx={{ width: "20px", height: "20px" }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: { md: "20px", sm: "16px", xs: "14px" },
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
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",

                          color: "black",
                        }}
                      />
                    </Button>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavMob;
