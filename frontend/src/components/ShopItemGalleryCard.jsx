import React from 'react'
import { Box, Card, IconButton, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


export const ShopItemGalleryCard = ({ item, authState }) => {
  const navigate = useNavigate()
  const viewItem = () => navigate(`/item/view/${item.slug}`)
  const editItem = () => navigate(`/item/edit/${item.slug}`)

  const editItemButton = authState ? (
    <IconButton aria-label="Edit" sx={{ marginRight: '5%' }} onClick={editItem}>
      <EditIcon />
    </IconButton>
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
