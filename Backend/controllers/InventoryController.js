const Inventory = require('../models/InventoryModel')
const mongoose = require('mongoose')

//get all inventory
const getInventorys = async (req, res) => {
    try{
        const inventorys = await Inventory.find({}).sort({updatedAt: -1})
        res.status(200).json(inventorys)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//search through inventory by name
// const searchInventory = async (req, res) => {
//     try{
//         const inventory = await Inventory.find({name: req.params.name})
//         res.status(200).json(inventory)
//     }catch (error){
//         res.status(400).json({error: error.message})
//     }
// }

//edit inventory by id
const updateInventory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: 'No such inventory' })  
        } 
    
    const inventory = await Inventory.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!inventory){
            return res.status(400).json({message: 'No such inventory' })  
        }
    res.status(200).json(inventory)
}

//delete inventory by id
const deleteInventory = async (req, res) => {
    const { id } = req.params
    try{
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: 'No such inventory' })  
        } 
        const inventory = await Inventory.findByIdAndDelete({_id: id})
        if (!inventory){
            return res.status(400).json({message: 'No such inventory' })  
        }

        res.status(200).json(inventory)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//create inventory
const createInventory = async (req, res) => {
    const {name, food_category, quantity} = req.body
    let emptyfields = []

    if (!name){
        emptyfields.push('name')
    }
    if (!food_category){
        emptyfields.push('food_category')
    }
    if (!quantity){
        emptyfields.push('quantity')
    }
    if (emptyfields.length > 0){
        return res.status(400).json({message: `Please fill in the following fields: ${emptyfields.join(', ')}`})
    } 

    try{
        const inventory = await Inventory.create({name, category, quantity})
        res.status(200).json(inventory)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getInventorys,
    // searchInventory,
    createInventory,
    deleteInventory,
    updateInventory

}