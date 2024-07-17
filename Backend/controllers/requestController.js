const Request = require('../models/requestModel')
const Pickup = require('../models/pickupModel')
const mongoose = require('mongoose')

//get all requests
const getRequests = async (req, res) => {
    try{
        const requests = await Request.find({}).sort({updatedAt: -1})
        res.status(200).json(requests)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete request by id
const deleteRequest = async (req, res) => {
    const { id } = req.params
    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: 'No such request' })  
        } 
        const request = await Request.findByIdAndDelete({_id: id})
        if (!request){
            return res.status(400).json({message: 'No such request' })  
        }

        res.status(200).json(request)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//approve request
const approveRequest = async (req, res) => {
    try {
        const requestId = req.params.id;
        const donorName = req.body.donor_name;  // Assuming donor_name is passed in the request body

        // Find the request by ID
        const request = await Request.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        // Create a new pickup document
        const pickup = new Pickup({
            donor_name: donorName,
            recipient_name: request.recipient_name,
            food_category: request.food_category,
            quantity: request.quantity,
            delivery_date: request.delivery_date,
            delivery_time: request.delivery_time,
            location: request.location,
        });

        // Save the pickup document
        await pickup.save();

        await Request.findByIdAndDelete(requestId);

        res.status(200).json({ message: 'Request accepted and pickup created', pickup });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

//create request
const createRequest = async (req, res) => {
    const {recipient_name, food_category, quantity, delivery_date, delivery_time, location} = req.body
    let emptyfields = []

    if (!recipient_name){
        emptyfields.push('recipient_name')
    }
    if (!food_category){
        emptyfields.push('food_category')
    }
    if (!quantity){
        emptyfields.push('quantity')
    }
    if (!delivery_date){
        emptyfields.push('delivery_date')
    }
    if (!delivery_time){
        emptyfields.push('delivery_time')
    }
    if (!location){
        emptyfields.push('location')
    }
    if (emptyfields.length > 0){
        return res.status(400).json({message: `Please fill in the following fields: ${emptyfields.join(', ')}`})
    } 

    try{
        const request = await Request.create({recipient_name, food_category, quantity, delivery_date, delivery_time, location})
        res.status(200).json(request)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getRequests,
    createRequest,
    deleteRequest,
    approveRequest,
}