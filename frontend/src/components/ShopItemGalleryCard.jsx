import * as React from 'react';
import { IconButton, CardActionArea, CardContent, CardMedia, } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import '../css/shopitemgallerycard.css'

import {Card as CustomCard} from './Card'

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

export const ShopItemGalleryCard = ({ITEMS, setITEMS, myItems, setPush, itemsData, setItemsData, item, authState }) => {
  const navigate = useNavigate()
  const viewItem = () => navigate(`/item/view/${item.slug}`)
  const editItem = () => navigate(`/item/edit/${item.slug}`)
  function  getIndex(email) {
    return ITEMS.findIndex(obj => obj.email === email);
  }
  
  // const myIDindex = ITEMS.findIndex((thing) => thing.id === item.id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openChild, setChildOpen] = React.useState(false);
  const handleChildOpen = () => setChildOpen(true);
  const handleChildClose = () => setChildOpen(false);


  const handleDelete = () => {
    setITEMS(itemsData => {return itemsData.filter((thing) => thing.id !== item.id)});
    handleClose()
  }
  const editItemButton = authState ? (
    <div>
      <Button onClick={handleOpen}>
        <IconButton aria-label="Edit" sx={{ marginRight: '5%', marginTop: '5%', marginBottom: '5%' }}>
          <EditIcon />
        </IconButton>

      </Button>
      <Modal className='edit-modal'
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
          }

           handleClose()
        }
          
          } sx = {{mt: 2, ml: 2, mr: 7}}>[Submit]</Button>
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
    
  ) : null

  return (
    <Card>
      <CardActionArea onClick={handleChildOpen}>
        <CardMedia onClick={handleChildOpen}
          sx={{ objectFit: 'cover' }}

          component="img"
          image={item.thumbnail_url}
          alt={"Thumbnail of " + item.name}
          loading='lazy'
        />
      </CardActionArea>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CardActionArea onClick={handleChildOpen}>

          <CardContent>
            <Typography>
              {item.name}
            </Typography>
            <Typography className='price-text'>
              ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        {editItemButton}
      </Box>
      <Modal className='info-modal-logged-out'
        open={openChild}
        onClose={handleChildClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Info: {item.name}
          </Typography>
          <Grid2 container spacing={2} className='text-field-container'>
                    <Grid2 item sx={12} sm={6}>
                        <p>Owner:</p> {item.owner}
                    </Grid2>
                    <Grid2 item sx={12} sm={6}>
                        <p>Description:</p>
                        {item.description}
                    </Grid2>
                    <Grid2 item sx={12} sm={6}>
                    <p>Price:</p>
                      ${item.price}
                    </Grid2>                        
                    <Grid2 item sx={12} sm={6}>
                    <p>Condition:</p>
                    {item.condtition}
                    </Grid2>
                    <CardMedia
                      sx={{ objectFit: 'contain' }}
                      component="img"
                      height="244"
                      image={item.thumbnail_url}
                      alt={"Thumbnail of " + item.name}
                      loading='lazy'
                    />
                </Grid2>
        </Box>
      </Modal>
    </Card>
  )
}
