const res = require("express/lib/response");
const Todo = require("../models/todo");

const listAll = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
};

const uploadTodo = async (req, res) => {
  const todo = new Todo(req.body);
  const newTodo = await todo.save();
  res.status(201).json(newTodo);
};

const setTodo = async (req, res) => {
  console.log(req.body);
  const updateTodo = await Todo.findOneAndUpdate(
    { id: req.params.id },
    {
      isCompleted: req.body.isCompleted,
    },
  );
  res.status(200).json(updateTodo);
};

const deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete(req.params.id);
  res.status(200).json("Todo Deleted");
};

module.exports = {
  listAll,
  uploadTodo,
  setTodo,
  deleteTodo,
};
