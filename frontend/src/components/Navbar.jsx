import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "./Switch";
import { NavbarMenu } from "./NavbarMenu";

import '../css/navbar.css'
import { useState } from "react";
export const Navbar = ({ myItems, setPush, setDarkMode, authState, setAuthState }) => {

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
          <Box
            component="img"
            sx={{
              height: 80,
              maxHeight: { xs: 60, md: 80 },
              cursor: "pointer"
            }}
            alt="Marketsquare"
            src="logo-long.png"
            onClick={() => navigate("/")}
          />
          {authState &&
              <Typography className="greetings">
                Hello, User
              </Typography>
          }
          
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

            <NavbarMenu myItems = {myItems} setPush = {setPush} authState={authState} setAuthState={setAuthState}/>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
