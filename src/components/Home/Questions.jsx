import { Box, Button, Typography } from "@mui/material";
import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Ans from "./Ans";
import Bountied from "./Bountied";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabStyles = {
  color: "#3B406F",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: { md: "14px", sm: "13px", xs: "12px" },
  fontStyle: "normal",
  fontWeight: 400,
  px: { md: 2, sm: 1, xs: 1 },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  with: { md: "100%", sm: "100%", xs: "100%" },
  border: "1px solid #BABFC4",

  //   borderRadius: "10px",
  //   border: "1px solid var(--STROKE, #EEBE62)",
  background: "#FFFFFF",

  // backgroundColor: "transparent",

  "&.Mui-selected": {
    color: "#3B4045",
    fontWeight: 700,
    // borderRadius: "10px",
    border: "1px solid #BABFC4",
    background: "#E3E6E8",
    // backgroundColor: "transparent",
    indicator: false,
  },

  flexDirection: "row",
  "& .MuiSvgIcon-root": {
    marginRight: { md: 1, xs: 0.5 },
  },
};

const tabsLineNone = {
  "& .MuiTabs-indicator": {
    display: "none",
  },
};

const Questions = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "36px", sm: "30px", xs: "24px" },
          }}
        >
          Top Questions
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            backgroundColor: "#0A95FF",
          }}
        >
          Ask Question
        </Button>
      </Box>

      <Box>
        <Box
          sx={{
            width: "100%",
            mt: 4,
          }}
        >
          <Box
            sx={{
              //   border: "1px solid #BABFC4",
              borderColor: "divider",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                border: "1px solid #BABFC4",
                borderRadius: "10px",
                width: { xs: "100%", sm: "auto", md: "auto" },
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ ...tabsLineNone }}
              >
                <Tab
                  label="Interesting"
                  sx={{ ...tabStyles, borderRadius: "10px 0 0 10px" }}
                  {...a11yProps(0)}
                />
                <Tab label="Bountied" sx={{ ...tabStyles }} {...a11yProps(1)} />
                <Tab label="Hot" sx={{ ...tabStyles }} {...a11yProps(2)} />
                <Tab label="Week" sx={{ ...tabStyles }} {...a11yProps(3)} />
                <Tab
                  label="Month"
                  sx={{ ...tabStyles, borderRadius: "0 10px 10px 0" }}
                  {...a11yProps(4)}
                />
              </Tabs>
            </Box>
          </Box>
          {/* <Divider sx={{ border: "1px solid #BABFC4", my: 3 }} /> */}

          <CustomTabPanel value={value} index={0}>
            <Ans />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Bountied />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Four
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            five
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
