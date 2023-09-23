import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LaunchIcon from "@mui/icons-material/Launch";

import { styled } from "@mui/system";

const DrawerLeft = () => {
  const [activeItem, setActiveItem] = useState(null);

  const Text = styled(Typography)(({ isActive }) => ({
    color: isActive ? "orange" : "#838C95",
    // borderRight: isActive ? "3px solid orange" : "",
    fontFamily: "Inter",
    fontWeight: isActive ? 700 : 400,
    fontSize: { md: "15px", sm: "14px", xs: "13px" },
    backgroundColor: isActive ? "#F1F2F3" : "transparent",
    padding: "12px 15px",
    cursor: "pointer",
    // "&:hover": {
    //   color: "orange",
    //   fontWeight: 700,
    // },
  }));

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <Box>
      <Box>
        <Text
          sx={{
            borderRight: activeItem === null ? "3px solid orange" : "",
            backgroundColor: activeItem === null ? "#F1F2F3" : "transparent",
          }}
          isActive={activeItem === null}
          onClick={() => handleItemClick(null)}
        >
          Home
        </Text>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            px: 1,
            py: 0.1,
            borderRight: activeItem === 1 ? "3px solid orange" : "",
            backgroundColor: activeItem === 1 ? "#F1F2F3" : "transparent",
          }}
        >
          <PublicIcon
            sx={{
              fontSize: { md: "16px", sm: "15px", xs: "14px" },
              color: activeItem === 1 ? "orange" : "#838C95",
            }}
            onClick={() => handleItemClick(1)}
          />
          <Text isActive={activeItem === 1} onClick={() => handleItemClick(1)}>
            Questions
          </Text>
        </Box>

        <Box
          sx={{
            pl: 3,
            backgroundColor: activeItem === 2 ? "#F1F2F3" : "transparent",
          }}
        >
          <Text
            sx={{
              p: 1.5,
              borderRight: activeItem === 2 ? "3px solid orange" : "",
            }}
            isActive={activeItem === 2}
            onClick={() => handleItemClick(2)}
          >
            Tags
          </Text>
        </Box>

        <Box
          sx={{
            pl: 3,

            backgroundColor: activeItem === 3 ? "#F1F2F3" : "transparent",
          }}
        >
          <Text
            sx={{
              p: 1.5,
              borderRight: activeItem === 3 ? "3px solid orange" : "",
            }}
            isActive={activeItem === 3}
            onClick={() => handleItemClick(3)}
          >
            Users
          </Text>
        </Box>
        <Box
          sx={{
            pl: 3,
            backgroundColor: activeItem === 4 ? "#F1F2F3" : "transparent",
          }}
        >
          <Text
            sx={{
              p: 1.5,
              borderRight: activeItem === 4 ? "3px solid orange" : "",
            }}
            isActive={activeItem === 4}
            onClick={() => handleItemClick(4)}
          >
            Companies
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            py: 0.1,
            backgroundColor: activeItem === 5 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 5 ? "3px solid orange" : "",
          }}
        >
          <Text isActive={activeItem === 5} onClick={() => handleItemClick(5)}>
            COLLECTIVES
          </Text>
          <Text>
            <InfoIcon sx={{ color: "#838C95" }} />
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1,
            py: 0.5,
            backgroundColor: activeItem === 6 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 6 ? "3px solid orange" : "",
          }}
        >
          <svg
            style={{ fill: "orange" }}
            aria-hidden="true"
            class="mt-auto fc-orange-400 svg-icon iconStarVerified"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M9.86.89a1.14 1.14 0 0 0-1.72 0l-.5.58c-.3.35-.79.48-1.23.33l-.72-.25a1.14 1.14 0 0 0-1.49.85l-.14.76c-.1.45-.45.8-.9.9l-.76.14c-.67.14-1.08.83-.85 1.49l.25.72c.15.44.02.92-.33 1.23l-.58.5a1.14 1.14 0 0 0 0 1.72l.58.5c.35.3.48.79.33 1.23l-.25.72c-.23.66.18 1.35.85 1.49l.76.14c.45.1.8.45.9.9l.14.76c.14.67.83 1.08 1.49.85l.72-.25c.44-.15.92-.02 1.23.33l.5.58c.46.52 1.26.52 1.72 0l.5-.58c.3-.35.79-.48 1.23-.33l.72.25c.66.23 1.35-.18 1.49-.85l.14-.76c.1-.45.45-.8.9-.9l.76-.14c.67-.14 1.08-.83.85-1.49l-.25-.72c-.15-.44-.02-.92.33-1.23l.58-.5c.52-.46.52-1.26 0-1.72l-.58-.5c-.35-.3-.48-.79-.33-1.23l.25-.72a1.14 1.14 0 0 0-.85-1.49l-.76-.14c-.45-.1-.8-.45-.9-.9l-.14-.76a1.14 1.14 0 0 0-1.49-.85l-.72.25c-.44.15-.92.02-1.23-.33l-.5-.58Zm-.49 2.67L10.6 6.6c.05.15.19.24.34.25l3.26.22c.36.03.5.48.23.71l-2.5 2.1a.4.4 0 0 0-.14.4l.8 3.16a.4.4 0 0 1-.6.44L9.2 12.13a.4.4 0 0 0-.42 0l-2.77 1.74a.4.4 0 0 1-.6-.44l.8-3.16a.4.4 0 0 0-.13-.4l-2.5-2.1a.4.4 0 0 1 .22-.7l3.26-.23a.4.4 0 0 0 .34-.25l1.22-3.03a.4.4 0 0 1 .74 0Z"></path>
          </svg>

          <Text isActive={activeItem === 6} onClick={() => handleItemClick(6)}>
            Explore Collectives
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            py: 0.1,
            backgroundColor: activeItem === 7 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 7 ? "3px solid orange" : "",
          }}
        >
          <Text isActive={activeItem === 7} onClick={() => handleItemClick(7)}>
            LABS
          </Text>
          <Text>
            <InfoIcon sx={{ color: "#838C95" }} />
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            px: 1.3,
            py: 0.4,
            backgroundColor: activeItem === 8 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 8 ? "3px solid orange" : "",
          }}
        >
          <ChatBubbleIcon
            sx={{
              color: activeItem === 8 ? "orange" : "#838C95",
              fontSize: "18px",
            }}
          />
          <Text isActive={activeItem === 8} onClick={() => handleItemClick(8)}>
            Explore Collectives
          </Text>
          <LaunchIcon
            sx={{
              color: activeItem === 8 ? "orange" : "#838C95",
              fontSize: "18px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 1,
            py: 0.1,
            backgroundColor: activeItem === 9 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 9 ? "3px solid orange" : "",
          }}
        >
          <Text isActive={activeItem === 9} onClick={() => handleItemClick(9)}>
            TEAMS
          </Text>
          <Text>
            <InfoIcon sx={{ color: "#838C95" }} />
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: activeItem === 10 ? "#F1F2F3" : "transparent",
            borderRight: activeItem === 10 ? "3px solid orange" : "",
            px: 1,
            py: 0.4,
            mb: 1,
          }}
        >
          <svg
            style={{ fill: "orange" }}
            aria-hidden="true"
            class="svg-icon iconBriefcaseSm"
            width="18"
            height="18"
            viewBox="0 0 14 14"
          >
            <path d="M4 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 2 10.5v-5C2 4.67 2.67 4 3.5 4H4V3Zm5 1V3H5v1h4Z"></path>
          </svg>

          <Text
            isActive={activeItem === 10}
            onClick={() => handleItemClick(10)}
          >
            Create Free Team
          </Text>
        </Box>

        <Text
          sx={{
            px: 2,
            py: 1.5,
            backgroundColor: activeItem === 11 ? "#F1F2F3" : "#F0F8FF",
            borderRight: activeItem === 11 ? "3px solid orange" : "",
            color: activeItem === 11 ? "orange" : "#62A0D9",
          }}
          isActive={activeItem === 11}
          onClick={() => handleItemClick(11)}
        >
          Looking for your terms
        </Text>
      </Box>
    </Box>
  );
};

export default DrawerLeft;
