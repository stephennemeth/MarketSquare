import * as React from 'react';
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import '../css/edititembutton.css'


export function EditItemButton({ parentOpen, handleChildClose, handleOpen, handleClose, handleDelete, item, openChild }) {
    const handleSubmit = () => {
        item.name = document.getElementById('edit-item').value
        item.price = document.getElementById('edit-price').value
        item.description = document.getElementById('edit-description').value
        item.condtition = document.getElementById('edit-condition').value
        item.owner = document.getElementById('edit-owner').value
        item.thumbnail_url = document.getElementById('edit-image-url').value
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
        <div className="edit-button-wrapper">
            <IconButton onClick={handleOpen} aria-label="Edit">
                <EditIcon />
            </IconButton>
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
                    <TextField id="edit-condition" label="Condition" variant="outlined" defaultValue={item.condtition} sx={{ mt: 2 }} />
                    <TextField id="edit-owner" label="Current Owner" variant="outlined" defaultValue={item.owner} sx={{ mt: 2 }} />
                    <TextField id="edit-image-url" label="Image url" variant="outlined" defaultValue={item.thumbnail_url} sx={{ mt: 2 }} />
                    <br />
                    <Button onClick={handleSubmit}
                        className='edit-item-modal-button'
                        variant='outlined'
                    >
                        Submit
                    </Button>
                    <IconButton aria-label="Delete" className='edit-item-modal-button' onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Modal>
        </div>

    )


}