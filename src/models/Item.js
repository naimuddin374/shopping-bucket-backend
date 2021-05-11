const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0,
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Item = model('Item', ItemSchema)
module.exports = Item