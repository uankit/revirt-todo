const express = require("express");
const todoController = require("../controllers").todo
const router = express.Router()

router.get('/',todoController.listAll)
router.post('/',todoController.uploadTodo)
router.patch('/:id',todoController.setTodo)
router.delete('/:id',todoController.deleteTodo)

module.exports = router