import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export function CreateItemGalleryCard() {
  const navigate = useNavigate()
  const navigateToCreate = () => navigate(`/item/create`)

  // TODO
  return (
    <Card sx={{ cursor: "pointer" }} onClick={navigateToCreate}>
      <CardMedia
        sx={{ objectFit: 'cover' }}
        component="img"
        height="244"
        image={""}
        alt={"Create a new item"}
        loading='lazy'
      />
    </Card>
  )
}
