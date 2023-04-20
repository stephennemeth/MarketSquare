import {
  AppBar,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "./Switch";
import { NavbarMenu } from "./NavbarMenu";
import {useContext} from 'react'
import {AppContext} from '../App'


import '../css/navbar.css'
export const Navbar = (myItems, setPush) => {

  const {authState, setAuthState, darkMode, setDarkMode, user, setUser} = useContext(AppContext)
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
                Hello, {user.name}
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
