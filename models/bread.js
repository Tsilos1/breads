// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://clipart-library.com/data_images/129666.jpg' }
})

// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread

