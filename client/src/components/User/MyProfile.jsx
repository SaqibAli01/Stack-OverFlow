import {
  //   Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Input,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import myImg from "../../assets/saqib.jpg";
import uploadImg from "../../assets/upload.png";

import EditIcon from "@mui/icons-material/Edit";

import {
  Cake,
  AccessTime,
  CalendarMonth,
  Create,
  Chat,
} from "@mui/icons-material";
import ProfileState from "./ProfileState";
import Activity from "./Activity";
import Saves from "./Saves";
import Settings from "./Settings";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../api/api";
import Loading from "../Loader/Loading";
import makeToast from "../../hooks/showToast";

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
  minWidth: "75px",
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
  const [loading, setLoading] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user } = useSelector((state) => state?.user?.user);
  // console.log("🚀 ~ MyProfile ~ user:", user);

  //dialog------------------------------------------------
  const dispatch = useDispatch();

  const [uId, setUId] = useState();
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const [firstFieldValue, setFirstFieldValue] = useState("");
  const [secondFieldValue, setSecondFieldValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileRef = useRef(null);
  const [hover, setHover] = useState(false);

  const imgUrl = "http://localhost:8000/";

  useEffect(() => {
    setUId(user?._id);
    setFirstFieldValue(user?.firstName);
    setSecondFieldValue(user?.lastName);
  }, []);

  // const handleOpen = async () => {
  //   setOpen(true);

  //   const response = await updateProfile(
  //     { userId: user?._id, avatar: image },
  //     setLoading
  //   );
  //   console.log("🚀  Response:", response);
  // };

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (firstFieldValue && secondFieldValue && image) {
      // console.log("First Field Value:", firstFieldValue);
      // console.log("Second Field Value:", secondFieldValue);

      const data = new FormData();
      data.append("avatar", image);
      data.append("firstName", user?.firstName);
      data.append("lastName", user?.lastName);
      // data.append("userId", user?._id);

      const response = await updateProfile(data, setLoading, dispatch);
      setSelectedImage("");
      // console.log("🚀  Response:", response);
      setOpen(false);
    } else {
      makeToast("Please Select Only Image", "warn", 3);
      fileRef.current.value = null;
      return false;
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //----end dialoag--------------------------------------------------------
  return (
    <>
      <Loading isLoading={loading} />
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
                  // src={myImg}
                  src={
                    user?.avatar
                      ? `http://localhost:8000/${user?.avatar}`
                      : myImg
                  }
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    border: "1px solid gray",
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
                  {user?.firstName} {user?.lastName}
                  {/* Saqib Ali */}
                </Typography>

                <Stack
                  direction={{ md: "row", sm: "column", xs: "column" }}
                  spacing={2}
                  justifyContent={"flex-start"}
                >
                  {data?.map((item, i) => (
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
                      {item.icon}
                      <Typography
                        sx={{
                          color: "#6a737c",
                          fontSize: { md: "13px", sm: "10px", xs: "10px" },
                          fontWeight: 400,
                        }}
                      >
                        {item.name}
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
                  "&:hover": {
                    color: "#FFFFFF",
                  },
                }}
                startIcon={<Create />}
                // onClick={editProfileHandler}
                onClick={handleOpen}
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
                  "&:hover": {
                    color: "#FFFFFF",
                  },
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
              px: 1,
              // border: "1px solid red",
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
                  <Tab
                    label="Profile"
                    sx={{ ...tabStyles }}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Activity"
                    sx={{ ...tabStyles }}
                    {...a11yProps(1)}
                  />
                  <Tab label="Saves" sx={{ ...tabStyles }} {...a11yProps(2)} />
                  <Tab
                    label="Settings"
                    sx={{ ...tabStyles }}
                    {...a11yProps(3)}
                  />
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
              <Saves />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Settings />
            </CustomTabPanel>
          </Box>
        </Box>

        <Box>
          {/* <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Image</DialogTitle>
            <DialogContent>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100%" }}
                />
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog> */}

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Edit Profile
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent>
              {/* <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100%" }}
                />
              )} */}

              {/* image  */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    maxWidth: "300px",
                    maxHeight: "250px",
                    backgroundColor: "#EDF1D6",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    my: 1,
                    // py: 2,
                  }}
                  onClick={() => fileRef.current.click()}
                >
                  {selectedImage ? (
                    <>
                      <Box
                        position="relative"
                        width="100px"
                        height="100px"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <img
                          src={selectedImage}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="img"
                        />
                        {hover && (
                          <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="rgba(0, 0, 0, 0.5)"
                          >
                            <IconButton aria-label="edit">
                              <EditIcon style={{ color: "#fff" }} />
                            </IconButton>
                          </Box>
                        )}
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        position="relative"
                        width="100px"
                        height="100px"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <img
                          // src={user?.profilePic ? user?.profilePic : uploadImg}
                          src={
                            user?.avatar
                              ? `http://localhost:8000/${user?.avatar}`
                              : uploadImg
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt="img"
                        />
                        {hover && (
                          <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgcolor="rgba(0, 0, 0, 0.5)"
                          >
                            <IconButton aria-label="edit">
                              <EditIcon style={{ color: "#fff" }} />
                            </IconButton>
                          </Box>
                        )}
                      </Box>
                    </>
                  )}

                  <input
                    hidden
                    ref={fileRef}
                    type="file"
                    accept="image/png, image/gif, image/jpeg, video/mp4"
                    onChange={handleImageChange}
                  />
                </Box>
              </Box>

              {/* image end  */}
              {/* First Text Field */}
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={firstFieldValue}
                onChange={(e) => setFirstFieldValue(e.target.value)}
              />

              {/* Second Text Field */}
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={secondFieldValue}
                onChange={(e) => setSecondFieldValue(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default MyProfile;
