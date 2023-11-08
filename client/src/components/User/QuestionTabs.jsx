import { Avatar, Box, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUserQues } from "../../api/api";

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

const QuestionTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  // console.log("🚀 ~ file: AnswersTabs.jsx:90 ~ AnswersTabs ~ userId:", userId);

  const { user } = useSelector((state) => state?.user?.user);

  const myData = useSelector((state) => state?.user?.singUserQues);
  // console.log("🚀 ~ file:  userAns:", singUserAns);
  console.log("🚀  AnswersTabs ~ user:", myData);

  const getUserAns = async () => {
    if (user?._id !== undefined) {
      const data = {
        userId: user?._id,
      };
      const res = await getSingleUserQues(data, setLoading, dispatch);
      console.log("🚀 ~ file res----------:", res);
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    setUserId(user?._id);
    getUserAns();
  }, []);

  return (
    <>
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
            Questions
          </Typography>
        </Box>

        <Box
          sx={{
            // border: "1px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
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
            <Tab label="Newest" sx={{ ...tabStyles }} {...a11yProps(2)} />
            {/* <Tab
              label="Newest"
              sx={{ ...tabStyles, borderRadius: "0 10px 10px 0" }}
              {...a11yProps(3)}
            /> */}
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
            <Typography textAlign={"center"}>
              You have not <Link to="">asked</Link> any questions
            </Typography>

            <Box
              sx={{
                display: "flex",
                m: 1,
                width: "100%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                {myData?.map((item, i) => {
                  // console.log("🚀  ~ item:", item);
                  return (
                    <Box
                      key={i}
                      sx={{
                        width: "97%",
                        // border: "1px solid red",
                        display: "flex",
                        borderBottom: "2px solid #BABFC4",
                        // flexDirection: "column",
                        mb: 2,
                        // backgroundColor: "yellow",
                      }}
                    >
                      {/* <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            pr: 2,
                            // border: "1px solid black ",
                          }}
                        >
                          {item?.viewCountAnswer}

                          <ArrowDropUpIcon
                            sx={{
                              border: "1px solid #BABFC4",
                              cursor: "pointer",
                              fontSize: "36px",
                              p: 0.1,
                              borderRadius: "50%",
                              "&:hover": {
                                backgroundColor: "#FAECC6",
                              },
                            }}
                            // onClick={() => handleAnswerUp(item._id)}
                            // onClick={handleSortClick}
                          />

                          <Typography
                            sx={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              py: 1,
                            }}
                          >
                            1
                          </Typography>
                          <ArrowDropDownIcon
                            sx={{
                              border: "1px solid #BABFC4",
                              cursor: "pointer",
                              fontSize: "36px",
                              p: 0.1,
                              mb: 2,
                              borderRadius: "50%",
                              "&:hover": {
                                backgroundColor: "#FAECC6",
                              },
                            }}
                            // onClick={handleSortClick}
                          />
                          {item?.verifiedAnswers === true && (
                            <CheckIcon
                              sx={{
                                fontSize: "40px",
                                color: "#18864b",
                                mt: 1,
                                fontWeight: 400,
                              }}
                            />
                          )}
                        </Box> */}

                      <Box
                        sx={{
                          width: "100%",
                          // border: "1px solid red",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              // justifyContent: "center",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={`http://localhost:8000/${item?.user?.avatar}`}
                              alt="img"
                            />
                            <Typography fontWeight={700} color={"#0A95FF"}>
                              {item?.user?.firstName} {item?.user?.lastName}
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography sx={{ fontWeight: 500 }}>
                            Question {i + 1} :
                          </Typography>

                          <div
                            style={{ padding: "5px " }}
                            dangerouslySetInnerHTML={{ __html: item?.text }}
                          />
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                            }}
                          >
                            view {item?.viewCount}
                          </Typography>
                        </Box>
                        {/* --------------------- Commit add ----------------- */}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
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
            <Typography textAlign={"center"}>
              You have not <Link to="">asked</Link>
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
            <Typography textAlign={"center"}>You have not</Typography>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box
            sx={{
              width: "100%",
              pl: 1,
              py: 3,
              boxShadow:
                " rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Typography textAlign={"center"}>You have not</Typography>
          </Box>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default QuestionTabs;
