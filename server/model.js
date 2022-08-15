const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/umer?retryWrites=true&w=majority");

const Todo = mongoose.model(
  "todos",
  mongoose.Schema({
    title: { type: String, required: true },
    complete: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
  })
);
module.exports = { Todo };
