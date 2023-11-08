import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Reputation = () => {
  const myData = useSelector((state) => state?.user?.singUserAns);
  console.log("🚀 ~ file: Reputation.jsx:7 ~ Reputation ~ myData:", myData);
  return (
    <Box>
      <Typography>Reputation</Typography>
      <Box
        sx={{
          display: "flex",
          m: 1,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {myData
            ?.filter((item) => item.verifiedAnswers === true)
            .map((item, i) => {
              console.log("🚀  ~ item:", item);
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
                  }}
                >
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
                        Answer {i + 1}
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
                        view {item?.viewCountAnswer}
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
  );
};

export default Reputation;
