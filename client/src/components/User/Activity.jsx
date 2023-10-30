import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import Summary from "./Summary";
import Answers from "./Answers";
import Question from "./Question";
import Tags from "./Tags";
import Articles from "./Articles";
import Badges from "./Badges";
import Following from "./Following";
import Bounties from "./Bounties";
import Reputation from "./Reputation";
import AllAction from "./AllAction";
import Responsive from "./Responsive";

const data = [
  { name: "Summary", component: <Summary /> },
  { name: "Answers", component: <Answers /> },
  { name: "Question", component: <Question /> },
  { name: "Tags", component: <Tags /> },
  { name: "Articles", component: <Articles /> },
  { name: "Badges", component: <Badges /> },
  { name: "Following", component: <Following /> },
  { name: "Bounties", component: <Bounties /> },
  { name: "Reputation", component: <Reputation /> },
  { name: "All Action", component: <AllAction /> },
  { name: "Responsive", component: <Responsive /> },
];
const Activity = () => {
  const [activeComponent, setActiveComponent] = useState(0);
  return (
    <Box>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={5} md={2.5}>
          <Box>
            {data.map((item, index) => {
              const styledActiveLink = {
                textDecoration: "none",
                padding: "10px 10px",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
                margin: "5px 1px",
                borderRadius: "25px",
                color: "#232629",
                backgroundColor:
                  index === activeComponent ? "#6a737c" : "#F1F2F3",
                justifyContent: "center",
                height: "18px",
                fontWeight: 400,
              };

              return (
                <div
                  style={styledActiveLink}
                  onClick={() => setActiveComponent(index)} // Handle NavLink clicks
                  key={index}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "70%",
                      my: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                        fontWeight: 400,
                        fontSize: { md: "13px", sm: "12px", xs: "11px" },
                        borderRadius: "20px",
                        px: 3,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </div>
              );
            })}
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} md={9.5}>
          <Box sx={{ mb: 3 }}>{data[activeComponent].component}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Activity;
