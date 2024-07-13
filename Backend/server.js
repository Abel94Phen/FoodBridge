require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const inventoryRoutes = require('./routes/inventory')

const app = express()

app.use(express.json())

//middlweware
app.use((req, res, next) => {
    console.log(req.path, req.method, req.statusCode)
    next()
})

//routes
app.use('/business/inventory', inventoryRoutes)


//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.log(error)
    })

