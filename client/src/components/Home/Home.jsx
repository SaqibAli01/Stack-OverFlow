import { Box, Grid, Hidden, useMediaQuery } from "@mui/material";
import React from "react";
import DrawerLeft from "./DrawerLeft";
import Questions from "./Questions";
import DrawerRight from "./DrawerRight";

const Home = () => {
  const matches = useMediaQuery("(min-width:1200px)");
  const matches1 = useMediaQuery("(max-width:1200px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 3,
      }}
    >
      <Grid container spacing={2} sx={{ border: "px solid red" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.5}
          sx={{
            borderRight: "1px solid #D6D9DC",
            position: "relative",
          }}
        >
          <Box
            sx={{
              // position: "fixed",
              top: 60,
              bottom: 0,
              padding: "16px",
            }}
          >
            {matches && (
              <Hidden smDown>
                <DrawerLeft />
              </Hidden>
            )}
          </Box>
        </Grid>
        <Grid item md={matches1 ? 12 : 6.5} sm={12} xs={12}>
          <Box sx={{ mt: 7 }}>
            <Questions />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={matches1 ? 12 : 3}>
          <Box
            sx={{
              mt: 7,
            }}
          >
            <DrawerRight />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
