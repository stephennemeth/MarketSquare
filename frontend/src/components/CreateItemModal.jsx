import { Box, Typography, Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useContext } from 'react'
import { ItemsContext } from "../context/ItemsContextProvider";
import { useState, useEffect } from "react";
import Input from '@mui/material/Input';

const style = {
    '& > :not(style)': { m: 2 },
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

const ariaLabel = { 'aria-label': 'description' };

export function CreateItemModal({open, handleClose}) {
    const { createItem } = useContext(ItemsContext);
    const [itemName, setName] = useState();
    const [itemPrice, setPrice] = useState();
    const [itemDescription, setDescription] = useState();
    const [itemCondition, setCondition] = useState();
    const [itemOwner, setOwner] = useState();
    const [itemURL, setURL] = useState();
    const changeName = event => {
        const newName = event.target.value;
        setName(newName)
    }
    const changePrice = event => {
        const newPrice = event.target.value;
        setPrice(newPrice)
    }
    const defIMG = "https://princetoncryo.com/media/catalog/category/default_product.jpg"
    const changeDescription = event => {
        const newPrice = event.target.value;
        setDescription(newPrice)
    }
    const changeCondition = event => {
        const newCondition = event.target.value;
        setCondition(newCondition)
    }   
    const changeOwner = event => {
        const newOwner = event.target.value;
        setOwner(newOwner)
    }

    const changeURL = event => {
        const newURL = event.target.value;
        setURL(newURL)
    }

    const zeroValues = () => {
        setName(null)
        setPrice(null)
        setDescription(null)
        setCondition(null)
        setOwner(null)
        setURL(null)
    }
    const itemPush = () => {
        if(itemURL === null){
            setURL(defIMG)
        }
        console.log("Item name: " + itemName)
        // if(itemPrice === null) setPrice(0)
        // if(itemDescription === null) setDescription("[NULL]")
        // if(itemCondition === null) setCondition("[NULL]")
        // if(itemOwner === null) setOwner("[NULL]")
        // if(itemURL === null) setName("https://princetoncryo.com/media/catalog/category/default_product.jpg")

        const myItem = 
            {
            name: itemName,
            price: itemPrice,
            description: itemDescription,
            condition: itemCondition,
            owner: itemOwner,
            thumbnailUrl: itemURL
            
        }
        createItem(myItem);
        zeroValues();
        handleClose();
    }

    useEffect(() => {
        zeroValues()
    }, [])
    return(
    <Modal
        key="create-modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box
            component="form"
            sx={style}
            noValidate
            autoComplete="off">
            {/* <form className="new-item-form"> */}
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create new item:
                </Typography>
                <Input id = "thisItem" placeholder = "Item Name" onChange = {changeName} value = {itemName}  inputProps={ariaLabel}/>
                <Input placeholder = "Item Price" onChange = {changePrice} value = {itemPrice}  sx={{ mt: 2 }}/>
                <Input placeholder = "Item Description" onChange = {changeDescription} value = {itemDescription}  inputProps={ariaLabel}/>
                <Input placeholder = "Item Condition" onChange = {changeCondition} value = {itemCondition}  inputProps={ariaLabel}/>
                <Input placeholder = "Item Owner" onChange = {changeOwner} value = {itemOwner}  inputProps={ariaLabel}/>
                <Input placeholder = "Item Image URL" onChange = {changeURL} value = {itemURL}  inputProps={ariaLabel}/>
                <br />
                <Button onClick={() => { itemPush() }} sx={{ mt: 3 }} variant='outlined' disabled = 
                {itemName === null || 
                itemPrice === null ||
                itemDescription === null ||
                itemCondition === null ||
                itemOwner === null ||
                itemURL === null}
                >Submit
                </Button>
            {/* </form> */}
        </Box>
    </Modal>
    )
}