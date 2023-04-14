import * as React from 'react';
import {Card, IconButton, CardActionArea, CardContent, CardMedia,} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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

export const ShopItemGalleryCard = ({ item, authState }) => {
  const navigate = useNavigate()
  const viewItem = () => navigate(`/item/view/${item.slug}`)
  const editItem = () => navigate(`/item/edit/${item.slug}`)
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editItemButton = authState ? (
    
    <div>
      <Button onClick={handleOpen}>
        <IconButton aria-label="Edit" sx={{ marginRight: '5%', marginTop: '5%' , marginBottom:'5%'}}>
          <EditIcon />
        </IconButton>

      </Button>
      <Modal
        open={open}
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
          <TextField id="edit-item" label="Item Name" variant="outlined" defaultValue = {item.name} sx={{ mt: 2 }}/>
          <TextField id="edit-price" label="Price" variant="outlined" defaultValue = {item.price}sx={{ mt: 2 }}/>
          <TextField id="edit-description" label="Description" variant="outlined" defaultValue = {item.description}sx={{ mt: 2 }}/>
          <TextField id="edit-condition" label="Condition" variant="outlined" defaultValue = {item.condtition} sx={{ mt: 2 }}/>
          <TextField id="edit-owner" label="Current Owner" variant="outlined" defaultValue = {item.owner}sx={{ mt: 2 }}/>
          <TextField id="edit-image-url" label="Image url" variant="outlined" defaultValue = {item.thumbnail_url} sx={{ mt: 2 }}/>
          <Button onClick={() =>
          {item.name = document.getElementById('edit-item').value
           item.price = document.getElementById('edit-price').value
           item.description = document.getElementById('edit-description').value
           item.condtition = document.getElementById('edit-condition').value
           item.owner = document.getElementById('edit-owner').value
           item.thumbnail_url = document.getElementById('edit-image-url').value

           handleClose()
        }
          
          }>Submit</Button>
        </Box>
      </Modal>
    </div>
    
  ) : null

  return (
    <Card>
      <CardActionArea onClick={viewItem}>
        <CardMedia onClick={viewItem}
          sx={{ objectFit: 'cover' }}
          component="img"
          height="244"
          image={item.thumbnail_url}
          alt={"Thumbnail of " + item.name}
          loading='lazy'
        />
      </CardActionArea>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardActionArea onClick={viewItem}>
          <CardContent>
            <Typography>
              {item.name}
            </Typography>
            <Typography marginTop={1} fontSize={14}>
              ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        {editItemButton}
      </Box>
    </Card>
  )
}
