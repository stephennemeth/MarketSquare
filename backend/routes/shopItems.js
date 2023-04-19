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
    .then((item) => res.json({msg : 'Item created successfully'}))
    .catch((err) => {
        console.log(err)
        return res.status(400).json({error: `Unable to create item ${err}`})})
})

module.exports = router