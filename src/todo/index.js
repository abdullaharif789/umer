import React, { useState, useEffect } from "react";
import Show from "./Show";
import Create from "./Create";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadTodos = async () => {
    setLoading(true);
    await axios.get("http://localhost:4000/todos").then(({ data }) => {
      let temp_todos = data.data.map((todo) => ({
        id: todo._id,
        title: todo.title,
        checked: false,
        completed: false,
      }));
      setTodos(temp_todos);
    });
    setLoading(false);
  };
  useEffect(() => {
    loadTodos();
  }, []);
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">TODO APP BY UMER</div>
        <div className="card-body">
          <Create todos={todos} setTodos={setTodos} />
          {loading ? (
            <div className="d-block text-center mt-2">
              <div class="spinner-border text-success"></div>
            </div>
          ) : (
            <Show todos={todos} setTodos={setTodos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
