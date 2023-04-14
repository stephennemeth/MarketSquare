import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function NavbarMenu({ authState, setAuthState }) {
    const navigate = useNavigate();

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
                color="inherit"
                variant="outlined"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => navigate('/item/create')}>
                Create Item
            </Button>),
            (<Button color="inherit" variant="outlined" onClick={logoutHandler}>Logout</Button>) 
        ]
    } else {
        buttons = [
            (<Button color="inherit" variant="outlined" onClick={() => navigate('/signup')}>Signup</Button>),
            (<Button color="inherit" variant="outlined" onClick={() => navigate("/login")}>Login</Button>),
            (<Button color="inherit" variant="outlined" onClick={bypassLogin}>Bypass Login</Button>)
        ]
    }

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {buttons}
        </Box>
    )
}