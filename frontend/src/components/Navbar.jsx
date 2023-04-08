import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Toolbar,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "./Switch";

export const Navbar = ({setDarkMode, authState}) => {
  const navigate = useNavigate();
  const toogleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: 1.2,
          }}
        >
         
          <Typography  // TODO next here: Wrap Title in Box + place the logo
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
            variant="h6"
            color="inherit"
            component="div"
            fontWeight={"bold"}
          >
            MarketSquare
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    onChange={toogleDarkMode}
                  />
                }
              />
            </FormGroup>

            <Typography
              onClick={toogleDarkMode}
              sx={{ display: { xs: "block", md: "none" }, cursor: "pointer" }}
              fontSize={15}
              variant="h6"
              color="inherit"
              component="a"
            >
              DarkMode
            </Typography>
            <Typography
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer" }}
              fontSize={15}
              variant="h6"
              color="inherit"
              component="a"
            >
              Home
            </Typography>

            <IconButton
              id="demo-positioned-menu"
              onClick={() => navigate("/login")}
              size="small"
              aria-controls={"demo-positioned-menu"}
              aria-haspopup="true"
              aria-expanded={"true"}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
