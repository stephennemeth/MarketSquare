import * as React from 'react';
import { CardMedia, } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


export function ViewItemModal({ openChild, handleChildClose, item }) {
    const viewItemBoxStyle = {
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
        <div>
            <Modal className='info-modal-logged-out'
                open={openChild}
                onClose={handleChildClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={viewItemBoxStyle}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Info: {item.name}
                    </Typography>
                    <Grid2 container spacing={2} className='text-field-container'>
                        <Grid2 item xs={12} sm={6}>
                            <p>Owner:</p> {item.owner}
                        </Grid2>
                        <Grid2 item xs={12} sm={6}>
                            <p>Description:</p>
                            {item.description}
                        </Grid2>
                        <Grid2 item xs={12} sm={6}>
                            <p>Price:</p>
                            ${item.price}
                        </Grid2>
                        <Grid2 item xs={12} sm={6}>
                            <p>Condition:</p>
                            {item.condition}
                        </Grid2>
                        <CardMedia
                            sx={{ objectFit: 'contain' }}
                            component="img"
                            height="244"
                            image={item.thumbnailUrl}
                            alt={"Thumbnail of " + item.name}
                            loading='lazy'
                        />
                    </Grid2>
                </Box>
            </Modal>

        </div>

    )


}