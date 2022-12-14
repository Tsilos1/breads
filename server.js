//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use (express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//BREADS
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//BAKERS
const bakersController = require('./controllers/bakers_controller.js') 
app.use('/bakers', bakersController)

//Routes
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})
  
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  ) 

//Listen
app.listen (PORT, () => {
    console.log ('listening on port', PORT);
})




  
