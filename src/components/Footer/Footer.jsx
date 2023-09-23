import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";

const stackOverflow = [{ text: "Questions" }, { text: "help" }];

const PRODUCTS = [
  { text: "Teams" },
  { text: "Advertising" },
  { text: "Collectives" },
  { text: "Talent" },
];

const COMPANY = [
  { text: "Press" },
  { text: "Work Here" },
  { text: "Legal" },
  { text: "Privacy Policy" },
  { text: "Terms of Service" },
  { text: "Contact Us" },
  { text: "Cookie Settings" },
  { text: "Cookie Policy" },
];

const Technology = [
  { text: "Technology" },
  { text: "Culture & recreation" },
  { text: "Life & arts" },
  { text: "Science" },
  { text: "Professional" },
  { text: "Business" },
  { text: "API" },
  { text: "Data" },
];

const blog = [
  { text: "Blog" },
  { text: "Facebook" },
  { text: "Twitter" },
  { text: "LinkedIn" },
  { text: "Instagram" },
];

const Text = styled(Typography)({
  fontFamily: "Inter",
  color: "#BABFC4",
  fontSize: "16px",
  fontWeight: 700,
  paddingTop: "5px",
  "&:hover": {
    color: "orange",
  },
});

const SubText = styled(Typography)({
  fontFamily: "Inter",
  color: "#BABFC4",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingRight: "10px",
  fontSize: "13px",
  fontWeight: 400,
  width: "auto",

  "&:hover": {
    color: "orange",
  },
});

const Footer = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const BoxStyle = {
    display: "flex",
    flexDirection: matches && "column",
    gap: 2,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#232629",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={matches ? 12 : 3}>
            <Box sx={{ ...BoxStyle }}>
              <Avatar variant="square" src={logo} />
              <Box>
                <Text>STACK OVERFLOW</Text>
                <Stack direction={matches ? "row" : "column"}>
                  {stackOverflow.map(({ text }, i) => {
                    return (
                      <Box key={i}>
                        <SubText>{text}</SubText>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={matches ? 12 : 1.5}>
            <Text>PRODUCTS</Text>
            <Stack direction={matches ? "row" : "column"}>
              {PRODUCTS.map(({ text }, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexWrap: "wrap",
                      width: "auto",
                    }}
                  >
                    <SubText>{text}</SubText>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={matches ? 12 : 1.5}>
            <Text>COMPANY</Text>
            <Stack direction={matches ? "row" : "column"} flexWrap={"wrap"}>
              {COMPANY.map(({ text }, i) => {
                return (
                  <Box key={i}>
                    <SubText>{text}</SubText>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={matches ? 12 : 2.5}>
            <Text>STACK EXCHANGE NETWORK</Text>
            <Stack direction={matches ? "row" : "column"} flexWrap={"wrap"}>
              {Technology.map(({ text }, i) => {
                return (
                  <Box key={i}>
                    <SubText>{text}</SubText>
                  </Box>
                );
              })}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={matches ? 12 : 3.5}>
            <Stack direction="row" flexWrap={"wrap"}>
              {blog.map(({ text }, i) => {
                return (
                  <Box key={i}>
                    <SubText>{text}</SubText>
                  </Box>
                );
              })}
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: { md: matches ? 1 : 20, sm: 1, xs: 1 } }}
            >
              <Box>
                <SubText>
                  Site design / logo © 2023 Stack Exchange Inc; user
                  contributions licensed under CC BY-SA. rev 2023.9.22.43641
                </SubText>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
