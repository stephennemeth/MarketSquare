import * as React from 'react';
import { useContext } from 'react'
import { Box, IconButton, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import '../css/shopitemgallerycard.css'

import { Card } from './Card'
import { EditItemModal } from './EditItemModal'
import { ViewItemModal } from './ViewItemModal'

import { AppContext } from '../App'

export const ShopItemGalleryCard = ({ item }) => {


  const appContext = useContext(AppContext);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openChild, setChildOpen] = React.useState(false);
  const handleChildOpen = () => setChildOpen(true);
  const handleChildClose = () => setChildOpen(false);
  const handleDelete = () => {
    // TODO Zack: Use ItemsContext to delete item instead
    // Old code:
    //setITEMS(itemsData => { return itemsData.filter((thing) => thing.id !== item.id) }); 
    handleClose()
  }

  const editItemButton = appContext.authState ? (
    <>
      <div className="edit-button-wrapper">
        <IconButton onClick={handleOpen} aria-label="Edit">
          <EditIcon />
        </IconButton>
      </div>
      <EditItemModal
        parentOpen={open}
        childOpen={openChild}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleDelete={handleDelete}
        item={item}
        openChild={openChild} />
    </>
  ) : null

  return (
    <>
      <Card className="card-wrapper">
        <CardActionArea onClick={handleChildOpen}>
          <CardMedia
            sx={{ objectFit: 'cover' }}

            component="img"
            image={item.thumbnailUrl}
            alt={"Thumbnail of " + item.name}
            loading='lazy'
          />
        </CardActionArea>
        <Box className='itemcard-content'>
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


      <ViewItemModal
        openChild={openChild}
        handleChildClose={handleChildClose}
        item={item} />
    </>
  )
}
