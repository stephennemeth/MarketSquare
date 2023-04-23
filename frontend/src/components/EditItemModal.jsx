import * as React from 'react';
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContextProvider";

import '../css/edititemmodal.css'


export function EditItemModal({ parentOpen, handleClose, item}) {
    const { deleteItem } = useContext(ItemsContext);
    const { putItem } = useContext(ItemsContext);
    const deleteMe = () =>{
        deleteItem(item);
        handleClose();
    }
    const handleSubmit = () => {
        if (document.getElementById('edit-item').value === '') document.getElementById('edit-item').value = ' '
        if (document.getElementById('edit-price').value === '') document.getElementById('edit-price').value = 0.00
        if (document.getElementById('edit-description').value === '') document.getElementById('edit-description').value = ' '
        if (document.getElementById('edit-condition').value === '') document.getElementById('edit-condition').value = ' '
        if (document.getElementById('edit-owner').value === '') document.getElementById('edit-owner').value = ' '
        if (document.getElementById('edit-image-url').value === '') document.getElementById('edit-image-url').value = "https://princetoncryo.com/media/catalog/category/default_product.jpg"

          item.name = document.getElementById('edit-item').value
          item.price = document.getElementById('edit-price').value
          item.description = document.getElementById('edit-description').value
          item.condition = document.getElementById('edit-condition').value
          item.owner = document.getElementById('edit-owner').value
          item.thumbnailUrl = document.getElementById('edit-image-url').value

         const data = {
            name: item.name,
            price: item.price,
            thumbnailUrl: item.thumbnailUrl,
            description: item.description,
            condition: item.condition
         }
         putItem(item,data)

        handleClose()
    }

    const editItemBoxStyle = {
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

    return (
            <Modal className='edit-modal'
                open={parentOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="edit-form-field-box" sx={editItemBoxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit: {item.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                    <TextField id="edit-item" label="Item Name" variant="outlined" defaultValue={item.name} sx={{ mt: 2 }} />
                    <TextField id="edit-price" label="Price" variant="outlined" defaultValue={item.price} sx={{ mt: 2 }} />
                    <TextField id="edit-description" label="Description" variant="outlined" defaultValue={item.description} sx={{ mt: 2 }} />
                    <TextField id="edit-condition" label="Condition" variant="outlined" defaultValue={item.condition} sx={{ mt: 2 }} />
                    <TextField id="edit-owner" label="Current Owner" variant="outlined" defaultValue={item.owner} sx={{ mt: 2 }} />
                    <TextField id="edit-image-url" label="Image url" variant="outlined" defaultValue={item.thumbnailUrl} sx={{ mt: 2 }} />
                    <br />
                    <Button onClick={handleSubmit}
                        className='edit-item-modal-button'
                        variant='outlined'
                    >
                        Submit
                    </Button>
                    <IconButton aria-label="Delete" className='edit-item-modal-button' onClick={deleteMe}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Modal>

    )


}