import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useContext } from 'react'
import { AppContext } from '../App'

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


    const itemPush = () => {
        // setPush(            // TODO: Get setPush from Items context
        //     myItems.push(   // TODO: Get itemsData from Items context instead of myItems
        //         {
        //             id: 69,
        //             slug: "newItem999",
        //             name: document.getElementById('item-name').value,
        //             price: document.getElementById('item-price').value,
        //             description: document.getElementById('item-description').value,
        //             condtition: document.getElementById('item-condition').value,
        //             owner: document.getElementById('item-owner').value,
        //             thumbnail_url: document.getElementById('item-image-url').value,
        //         }
        //     )
        // );
        handleClose();
    }
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
            (<Modal
                key="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className="new-item-form">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create new item:
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        </Typography>
                        <TextField id="item-name" label="Item Name" variant="outlined" sx={{ mt: 2 }} />
                        <TextField id="item-price" label="Price" variant="outlined" sx={{ mt: 2 }} />
                        <TextField id="item-description" label="Description" variant="outlined" sx={{ mt: 2 }} />
                        <TextField id="item-condition" label="Condition" variant="outlined" sx={{ mt: 2 }} />
                        <TextField id="item-owner" label="Current Owner" variant="outlined" sx={{ mt: 2 }} />
                        <TextField id="item-image-url" defaultValue="https://princetoncryo.com/media/catalog/category/default_product.jpg" label="Image url" variant="outlined" sx={{ mt: 2 }} />
                        <br />
                        <Button onClick={() => { itemPush() }} sx={{ mt: 3 }} variant='outlined'>Submit</Button>
                    </form>
                </Box>
            </Modal>),
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