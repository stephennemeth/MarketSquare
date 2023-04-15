import * as React from 'react';
import { CardMedia, } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


export function ViewItemButton({openChild, handleChildClose, item, style}) {
    return (
        <div>
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

        </div>

    )


}