//IMPORT Mongoose 
const mongoose = require('mongoose') 

// pull Schema and model from mongoose
const Schema = mongoose.Schema
const model = mongoose.model

// Create a new Place Schema
const placeSchema = new Schema(
    {
        name: String, 
        img: String, 
        description: String, 
}, 
{timestamps: true}
)

// Create our Model object 
const Place = model('Place', placeSchema) 

// Export the model object
module.exports = Place