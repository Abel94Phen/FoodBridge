const express = require('express')

const router = express.Router()
const {
    getInventorys,
    // searchInventory,
    createInventory,
    updateInventory,
    deleteInventory
} = require('../controllers/InventoryController')

router.get('/', getInventorys)

// router.get('/:name', getInventory)

router.post('/', createInventory)

router.patch('/:id', updateInventory)

router.delete('/:id', deleteInventory)

module.exports = router