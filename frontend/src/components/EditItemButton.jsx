import * as React from 'react';
import { IconButton} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


export function EditItemButton({parentOpen, handleChildClose, handleOpen, handleClose, handleDelete, item, style, openChild}) {
    return (
        <div>
        <Button onClick={handleOpen}>
            <IconButton aria-label="Edit" sx={{ marginRight: '5%', marginTop: '5%', marginBottom: '5%' }}>
            <EditIcon />
            </IconButton>

        </Button>
        <Modal className='edit-modal'
            open={parentOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
            <Button onClick={() => {
                item.name = document.getElementById('edit-item').value
                item.price = document.getElementById('edit-price').value
                item.description = document.getElementById('edit-description').value
                item.condtition = document.getElementById('edit-condition').value
                item.owner = document.getElementById('edit-owner').value
                item.thumbnail_url = document.getElementById('edit-image-url').value
                handleClose()
            }}
            
            sx = {{mt: 2, ml: 2, mr: 7}}>[Submit]</Button>
            <Button onClick = {handleDelete}>        
            <IconButton aria-label="Delete" sx={{ marginRight: '5%', marginTop: '30%' , marginBottom:'5%'}}>
                <DeleteIcon />
            </IconButton>
            </Button>
            </Box>
        </Modal>

        <Modal className='info-modal'
            open={openChild}
            onClose={handleChildClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" 
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Info: {item.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>
            </Box>
        </Modal>

        </div>

    )


}