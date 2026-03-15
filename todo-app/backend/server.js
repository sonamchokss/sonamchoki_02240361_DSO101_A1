require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

// get tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// add task
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "Task added", tasks });
});

// delete task
app.delete("/tasks/:id", (req, res) => {
  tasks.splice(req.params.id, 1);
  res.json({ message: "Task deleted", tasks });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});