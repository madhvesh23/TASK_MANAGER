var Task  = require('../models/taskSchema')


var createTask = async (req, res) => {
    try{
        var task = await Task.create(req.body)
        res.status(201).json(task)
    }catch(error){
        res.status(500).json({msg:error})
    }
}

var getAllTasks = async (req, res) => {
    try{
        var tasks = await Task.find({})
        res.status(201).json({tasks})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

var getTask = async (req, res) => {
   try{
    var {id:taskId} = req.params
    var task = await Task.findById({_id:taskId})
    if(!task){
        res.status(404).json({msg:`task does not exist with given id:${taskId}`})
    }
    res.status(201).json(task)
   }catch(error){
    res.status(500).json({msg:error})
   }
}

var updateTask = async (req, res) => {
    const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite : true
  })
  if (!task) {
    return res.status(404).json(`No task with id : ${taskID}`)
  }
  res.status(200).json({ task })
}
var deleteTask = async (req, res) => {
    const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return res.status(404).json(`No task with id : ${taskID}`)
  }
  res.status(200).json({ task })
}


module.exports = {
    getAllTasks , getTask , createTask , updateTask , deleteTask
}