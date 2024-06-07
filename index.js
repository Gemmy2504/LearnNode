// import all the necessary packages
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const port = 8000;
// we will create these todoRoutes in the future
import todoRoutes from "./routes/Todo.js";
const app = express();

// DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(express.json());

// include the todoRoutes
app.use("/api", todoRoutes);

// start the server in the port 8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
