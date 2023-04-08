import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export const ShopItemGalleryCard = ({ item }) => {
  const navigate = useNavigate()
  const navigateToItem = () => navigate(`/item/view/${item.slug}`)

  return (
    <Card sx={{ cursor: "pointer" }} onClick={navigateToItem}>
      <CardMedia
        sx={{ objectFit: 'cover' }}
        component="img"
        height="244"
        image={item.thumbnail_url}
        alt={"Thumbnail of " + item.name}
        loading='lazy'
      />
      <CardContent>
        <Typography sx={{ cursor: "pointer" }} onClick={navigateToItem}>
          {item.name}
        </Typography>
        <Typography marginTop={1} fontSize={14}>
          ${item.price}
        </Typography>
      </CardContent>
    </Card>
  )
}
