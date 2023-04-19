const mongoose = require('mongoose')

const ShopItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true,
        default: 'https://princetoncryo.com/media/catalog/category/default_product.jpg'
    },
    owner: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: false,
    },
})

module.exports = ShopItem = mongoose.model('shopitem', ShopItemSchema)


        
