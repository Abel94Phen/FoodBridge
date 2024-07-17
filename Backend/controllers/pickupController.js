const Pickup = require('../models/pickupModel')
const mongoose = require('mongoose')

//get all pickups
const getPickups = async (req, res) => {
    try{
        const pickups = await Pickup.find({}).sort({updatedAt: -1})
        res.status(200).json(pickups)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getPickups,
}