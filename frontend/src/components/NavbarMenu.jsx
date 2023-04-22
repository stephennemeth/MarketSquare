import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';

import { useContext } from 'react'
import { AppContext } from '../App'

import { CreateItemModal } from "./CreateItemModal";

export function NavbarMenu() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { authState, setAuthState } = useContext(AppContext);

    // TODO Steven: Implement real logout behavior
    const logoutHandler = () => {
        if (!authState) return
        setAuthState(false)
        navigate('/')
    }

    const bypassLogin = () => {
        setAuthState(true)
        navigate("/")
    }

    let buttons;

    if (authState) {
        buttons = [
            (<Button
                key="create"
                color="inherit"
                variant="outlined"
                startIcon={<AddShoppingCartIcon />}
                onClick={handleOpen}>
                Create Item
            </Button>),
            (<CreateItemModal key="create-modal" open = {open} handleClose={handleClose}/>),
            (<Button key="logout" color="inherit" variant="outlined" onClick={logoutHandler}>Logout</Button>)
        ]
    } else {
        buttons = [
            (<Button key="signup" color="inherit" variant="outlined" onClick={() => navigate('/signup')}>Signup</Button>),
            (<Button key="login" color="inherit" variant="outlined" onClick={() => navigate("/login")}>Login</Button>),
            (<Button key="bypass" color="inherit" variant="outlined" onClick={bypassLogin}>Bypass Login</Button>)
        ]
    }

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {buttons}
        </Box>
    )
}