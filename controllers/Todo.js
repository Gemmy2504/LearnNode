import { Todo } from "../models/Todo.js";

export const getTodoById = async (req, res) => {
  const task = await Todo.findById(req.query.todoId);
  res.json({ task });
};
export const getAllTodos = async (req, res) => {
  // simply use .find() method and it will return all the todos
  const tasks = await Todo.find();
  res.json({ tasks });
};
export const createTodo = async (req, res) => {
  const task = req.body;
  await Todo.create(task);
  console.log(task);

  res.json("success");
};
export const updateTodo = async (req, res) => {
  const updatedTask = await Todo.findOneAndUpdate(req.params.id, req.body);
  res.json({ updatedTask });
};
export const deleteTodo = async(req,res)=>{
  await Todo.deleteOne(req.body.id);
  res.json("success");
};