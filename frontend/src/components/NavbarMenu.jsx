import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';
import { useContext } from 'react'
import { AppContext } from '../App'
import { ItemsContext } from "../context/ItemsContextProvider";
import { CreateItemModal } from "./CreateItemModal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function NavbarMenu() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { authState, setAuthState } = useContext(AppContext);

    // TODO Implement real logout behavior
    const logoutHandler = () => {
        if (!authState) return
        setAuthState(false)
        navigate('/login')
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
            (<CreateItemModal open = {open} handleClose={handleClose}/>),
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