import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Footer: React.FunctionComponent = () => {
  return (
    <BottomNavigation
      sx={{
        flex:'0 0 auto',
        height: 100,
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        maxWidth="xl"
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          2020 all rights reserved
        </Typography>
      </Container>
    </BottomNavigation>
  );
};

export default Footer;
