const express = require('express')

const router = express.Router()
const {
    getPickups,
} = require('../controllers/pickupController')


router.get('/donor/pickups', getPickups)

router.get('/recipient/pickups', getPickups)


module.exports = router