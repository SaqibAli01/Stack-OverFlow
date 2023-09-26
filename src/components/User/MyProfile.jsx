import {
  //   Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import myImg from "../../assets/saqib.jpg";
import {
  Cake,
  AccessTime,
  CalendarMonth,
  Create,
  Chat,
} from "@mui/icons-material";
import ProfileState from "./ProfileState";
import Activity from "./Activity";

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
  color: "#525960",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  with: "auto",
  backgroundColor: "transparent",
  minHeight: "35px",
  padding: "10px 1px",
  minWidth: "80px",
  borderRadius: "20px",

  "&.Mui-selected": {
    color: "#ffffff",
    fontWeight: 500,
    background: "#F48225",
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
  //   "& .MuiButtonBase-root.MuiTab-root": {
  //     padding: "1px",
  //     border: "1px solid blue",
  //     height: "20px !important",
  //   },
};

const data = [
  {
    icon: <Cake sx={{ width: "20px", color: "#9199a1" }} />,
    name: "Member for 6 days",
  },
  {
    icon: <AccessTime sx={{ width: "20px", color: "#9199a1" }} />,
    name: " Last seen this week",
  },
  {
    icon: <CalendarMonth sx={{ width: "20px", color: "#9199a1" }} />,
    name: "Visited 5 days, 2 consecutive",
  },
];

const MyProfile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          <Box
            sx={{
              m: 2,
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: { md: "150px", sm: "120px", xs: "100px" },
                height: { md: "150px", sm: "120px", xs: "100px" },
              }}
            >
              <img
                src={myImg}
                alt="img"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "#232629",
                  fontSize: { md: "34px", sm: "30px", xs: "24px" },
                }}
              >
                Saqib Ali
              </Typography>

              <Stack
                direction={{ md: "row", sm: "column", xs: "column" }}
                spacing={2}
                justifyContent={"flex-start"}
              >
                {data.map(({ icon, name }, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 0.5,
                      //   border: "1px solid red",
                    }}
                  >
                    {icon}
                    <Typography
                      sx={{
                        color: "#6a737c",
                        fontSize: { md: "13px", sm: "10px", xs: "10px" },
                        fontWeight: 400,
                      }}
                    >
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={7} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                color: "#3b4045",
                fontSize: { md: "12px", sm: "11px", xs: "10px" },
                fontWeight: 400,
              }}
              startIcon={<Create />}
            >
              Edit Profile
            </Button>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                color: "#3b4045",
                fontSize: { md: "12px", sm: "11px", xs: "10px" },
                fontWeight: 400,
              }}
              startIcon={<Chat />}
            >
              Network Profile
            </Button>
          </Box>
        </Grid>
      </Grid>

      <br />

      <Box>
        <Box
          sx={{
            width: "100%",
            mt: 4,
          }}
        >
          <Box>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  ...tabsLineNone,
                  //   border: "1px solid red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tab label="Profile" sx={{ ...tabStyles }} {...a11yProps(0)} />
                <Tab label="Activity" sx={{ ...tabStyles }} {...a11yProps(1)} />
                <Tab label="Saves" sx={{ ...tabStyles }} {...a11yProps(2)} />
                <Tab label="Settings" sx={{ ...tabStyles }} {...a11yProps(3)} />
              </Tabs>
            </Box>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <ProfileState />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Activity />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            13
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Four------
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfile;
