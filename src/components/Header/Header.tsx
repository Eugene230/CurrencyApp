import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Grid } from "@mui/material";

const Header: React.FunctionComponent = () => {
  return (
    <AppBar
      sx={{
        height: 100,
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container direction="column">
            <Grid item lg={12}>
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                }}
              >
                Currency transfer
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <CurrencyExchangeIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
