var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please insert Name'],
        trim:true,
        maxlength:[20,'name can not be more than 20']
    },
    completed: {
        type:Boolean,
        default:false
    }
})
module.exports = mongoose.model('Task', taskSchema)