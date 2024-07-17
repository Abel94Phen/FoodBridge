require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const inventoryRoutes = require('./routes/inventory')
const requestRoutes = require('./routes/request')
const pickupRoutes = require('./routes/pickup')
const userRoutes = require('./routes/authRoutes')


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

    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    app.get('/set-cookies', (req, res) => {
    
      // res.setHeader('Set-Cookie', 'newUser=true');
      
      res.cookie('newUser', false);
      res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    
      res.send('you got the cookies!');
    
    });
    
    app.get('/read-cookies', (req, res) => {
    
      const cookies = req.cookies;
      console.log(cookies.newUser);
    
      res.json(cookies);
    
    });