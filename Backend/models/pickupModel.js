const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pickupSchema = new Schema({
    donor_name: {
        type: String,
        required: true
    },
    recipient_name: {
        type: String,
        required: true
    },
    food_category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    },
    delivery_time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },

}, {timestamps: true})

module.exports = mongoose.model('Pickup', pickupSchema)

