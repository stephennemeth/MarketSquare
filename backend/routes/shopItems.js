const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const auth = require('../middleware/auth')

const ShopItem = require('../models/ShopItem')

router.get('/', async (req, res) => {
    ShopItem.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json({error: `Unable to get items ${err}`}))
})

router.post('/', auth, async (req, res) => {
    ShopItem.create(req.body)
    .then((item) => {
        res.json({msg : 'Item created successfully', id: item._id, item: item})
        console.log(item)
    })
    .catch((err) => {
        console.log(err)
        return res.status(400).json({error: `Unable to create item ${err}`})})
})

router.get('/:id', async (req, res) => {
    ShopItem.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({error: `Unable to get item with id ${req.params.id}. ${err}`}))
})

router.delete('/:id', auth, async (req, res) => {
    ShopItem.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: `Item with id ${req.params.id} deleted successfully`}))
    .catch((err) => res.status(400).json({error: `Unable to delete item with id ${req.params.id}. ${err}`}))
})

router.put('/:id', auth, async (req, res) => {
    ShopItem.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: `Item with id ${req.params.id} updated successfully`}))
    .catch((err) => res.status(400).json({error: `Unable to update item with id ${req.params.id}. ${err}`}))
})


module.exports = router