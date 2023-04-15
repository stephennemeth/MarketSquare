import * as React from 'react';
import { CardActionArea, CardContent, CardMedia, } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {EditItemButton} from './EditItemButton'
import {ViewItemButton} from './ViewItemButton'

import '../css/shopitemgallerycard.css'

import {Card} from './Card'

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

export const ShopItemGalleryCard = ({ITEMS, setITEMS, item, authState }) => {

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

      <EditItemButton 
      parentOpen = {open} 
      childOpen = {openChild} 
      handleOpen = {handleOpen} 
      handleClose={handleClose} 
      handleDelete = {handleDelete} 
      item = {item} 
      style = {style} 
      openChild = {openChild}/>
    
  ) : null

  return (
    <>
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
    </Card>


    <ViewItemButton 
    openChild = {openChild} 
    handleChildClose = {handleChildClose} 
    item = {item} 
    style = {style}/>
    </>
  )
}
