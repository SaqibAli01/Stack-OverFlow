import { Box, Grid, Hidden, useMediaQuery } from "@mui/material";
import React from "react";
import DrawerLeft from "../Home/DrawerLeft";
import MyProfile from "./MyProfile";

const Profile = () => {
  const matches = useMediaQuery("(max-width:1100px)");
  const matches1 = useMediaQuery("(min-width:1100px)");

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={2.5}>
          <Box>
            {matches1 && (
              <Hidden smDown>
                <DrawerLeft />
              </Hidden>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={matches ? 12 : 8} md={matches ? 12 : 9.5}>
          <Box
            sx={{
              p: 1,
              border: "1px solid red",
            }}
          >
            <MyProfile />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
