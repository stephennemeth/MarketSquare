import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function NavbarMenu({ authState }) {
    const navigate = useNavigate();

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
            (<Button color="inherit" variant="outlined" onClick={() => navigate('/login')}>Logout</Button>)
        ]
    } else {
        buttons = [
            (<Button color="inherit" variant="outlined" onClick={() => navigate('/signup')}>Signup</Button>),
            (<Button color="inherit" variant="outlined" onClick={() => navigate('/login')}>Login</Button>)
        ]
    }

    return (
        <Box sx={{ display: "flex", gap: 2 }}>
            {buttons}
        </Box>
    )
}