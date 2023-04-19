const express = require('express')
const router = express.Router()

const ShopItem = require('../models/ShopItem')

router.get('/', (req, res) => {
    ShopItem.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({error: `Unable to get items ${err}`}))
})

router.post('/', (req, res) => {
    ShopItem.create(req.body)
    .then((item) => {
        res.json({msg : 'Item created successfully', id: item._id, item: item})
        console.log(item)
    })
    .catch((err) => {
        console.log(err)
        return res.status(400).json({error: `Unable to create item ${err}`})})
})

router.get('/:id', (req, res) => {
    ShopItem.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({error: `Unable to get item with id ${req.params.id}. ${err}`}))
})

router.delete('/:id', (req, res) => {
    ShopItem.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: `Item with id ${req.params.id} deleted successfully`}))
    .catch((err) => res.status(400).json({error: `Unable to delete item with id ${req.params.id}. ${err}`}))
})

router.put('/:id', (req, res) => {
    ShopItem.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: `Item with id ${req.params.id} updated successfully`}))
    .catch((err) => res.status(400).json({error: `Unable to update item with id ${req.params.id}. ${err}`}))
})


module.exports = router