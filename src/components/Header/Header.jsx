import { Box, Container, Hidden, useMediaQuery } from "@mui/material";
import React from "react";
import NavWeb from "./NavWeb";
import NavMob from "./NavMob";

const Header = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D9DC",
        }}
      >
        <Container maxWidth="xl">
          <Box>
            {matches ? (
              <Hidden smDown>
                <NavWeb />
              </Hidden>
            ) : (
              <Hidden lgUp>
                <NavMob />
              </Hidden>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
