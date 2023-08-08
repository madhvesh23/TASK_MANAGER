var express = require('express')
var tasks = require('./routes/tasks')
var connectDB = require('./db/connect')
require('dotenv').config()
var mongooes = require('mongoose')
app  = express()

// middleware
app.use(express.json())

// routes
app.use(express.static('./public'))
app.use('/api/v1/tasks',tasks)

var PORT = process.env.PORT
var MONGO_URL = process.env.MONGO_URL


var start =async () => {
    try {
        await connectDB(MONGO_URL)
        app.listen(PORT,()=>{
            console.log('connected mongodb')
            console.log(`Node Running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
        
    }

}

start()

