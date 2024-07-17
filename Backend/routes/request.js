const express = require('express')

const router = express.Router()
const {
    createRequest,
    getRequests,
    approveRequest,
    deleteRequest,
} = require('../controllers/requestController')

router.post('/recipient/', createRequest)

router.get('/donor/requests', getRequests)

router.get('/recipient/requests', getRequests)

router.delete('/recipient/:id', deleteRequest)

router.post('/donor/:id', approveRequest)

module.exports = router