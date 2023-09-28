import { Box, Link, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

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
        <Box>
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
  color: "#3b4045",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: { md: "11px", sm: "13px", xs: "12px" },
  fontStyle: "normal",
  fontWeight: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  with: "100%",
  border: "1px solid #BABFC4",
  padding: "8px 5px",
  textTransform: "none",
  background: "#FFFFFF",
  minHeight: "10px !important",
  minWidth: "10px",
  backgroundColor: "transparent",
  // backgroundColor: "yellow",

  "&.Mui-selected": {
    color: "#3B4045",
    fontWeight: 500,
    border: "1px solid #BABFC4",
    background: "#E3E6E8",

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

const AnswersTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: { md: "nowrap", sm: "wrap", sx: "wrap" },
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "21px", sm: "18px", xs: "16px" },
              color: "#232629",
              fontWeight: 400,
            }}
          >
            Answers
          </Typography>
        </Box>

        <Box
          sx={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              label="Score"
              sx={{
                ...tabStyles,
                borderRadius: "10px 0 0 10px",
              }}
              {...a11yProps(0)}
            />
            <Tab label="Activity" sx={{ ...tabStyles }} {...a11yProps(1)} />
            <Tab
              label="Newest"
              sx={{ ...tabStyles, borderRadius: "0 10px 10px 0" }}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <CustomTabPanel value={value} index={0} sx={{ p: 1 }}>
          <Box
            sx={{
              width: "100%",
              pl: 1,
              py: 3,
              boxShadow:
                " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              You have not <Link to="">answered</Link> any questions
            </Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box
            sx={{
              width: "100%",
              pl: 1,
              py: 3,
              boxShadow:
                " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>
              You have not <Link to="">answered</Link>
            </Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box
            sx={{
              width: "100%",
              pl: 1,
              py: 3,
              boxShadow:
                " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Typography sx={{ textAlign: "center" }}>You have not</Typography>
          </Box>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default AnswersTabs;
