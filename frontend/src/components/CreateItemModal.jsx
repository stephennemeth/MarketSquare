import { Box, Typography, Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useContext } from 'react'
import { ItemsContext } from "../context/ItemsContextProvider";

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

export function CreateItemModal({open, handleClose}) {
    const { createItem } = useContext(ItemsContext);
    const itemPush = () => {
        const myItem = 
            {
            name: document.getElementById('item-name').value,
            price: document.getElementById('item-price').value,
            description: document.getElementById('item-description').value,
            condtition: document.getElementById('item-condition').value,
            owner: document.getElementById('item-owner').value,
            thumbnail_url: document.getElementById('item-image-url').value,
        }
        createItem(myItem);
        handleClose();
    }
    return(
    <Modal
        key="create-modal"
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
    </Modal>
    )
}