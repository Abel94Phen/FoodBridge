require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const inventoryRoutes = require('./routes/inventory')
const requestRoutes = require('./routes/request')
const pickupRoutes = require('./routes/pickup')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())

//middlweware
app.use((req, res, next) => {
    console.log(req.path, '      using the method -->    ',req.method)
    next()
})

//routes
app.use('/donor/inventory', inventoryRoutes)
app.use('/', requestRoutes)
app.use('/', pickupRoutes)
app.use('/user', userRoutes)


//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db and Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

