import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Todo = mongoose.model("Todo", taskSchema);
