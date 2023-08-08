var express = require('express');
var router = express.Router();
var {getAllTasks, getTask, createTask, updateTask, deleteTask} = require("../controllers/tasks")

router.get('/',getAllTasks)
router.post('/',createTask)
router.get('/:id',getTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router