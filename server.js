console.log("Hello World!")


// GET ENVIRONMENTAL VARIABLES 
require('dotenv').config()

// GET NEW PORT FROM ENV VARIABLES 
const PORT = process.env.PORT

// IMPORT DEPENDENCIES 
const cors = require('cors') 
const express = require('express') 
const morgan = require('morgan') 

//Import the People router
const peopleRouter = require('./controllers/place_controller')

// IMPORT THE DB CONNECTION
 const mongoose = require('./db/connection')
 const Place = require('./models/Place_model')

 // CREATE EXPRESS APP OBJECT 
 const app = express()

 // MIDDLEWARE
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging

//  SETTING UP controller
app.use('/places', peopleRouter) //<--send all 'places' to the peopleRouter

app.get('/', (req, res) => {
    res.json({
        hello: " the default route and server are working"
    })
})
// this is the same code as the above code.. just using SEND. (dynamic, txt, html... ect.)
// app.get("/", (req, res) => res.send("Server is Working")); // <--- Route to test server





// SERVER LISTENER
app.listen(PORT, () => console.log(`Listening in on port ${PORT}`))