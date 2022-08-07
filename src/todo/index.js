import React, { useState } from "react";
import Show from "./Show";
import Create from "./Create";

const Todo = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: "Buy Milk",
    // },
    // {
    //   id: 2,
    //   title: "Eat Food",
    // },
    // {
    //   id: 3,
    //   title: "Take Shower",
    // },
    // {
    //   id: 4,
    //   title: "Change Clothes",
    // },
    // {
    //   id: 5,
    //   title: "Go to restaurant",
    // },
  ]);
  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">TODO APP BY UMER</div>
        <div className="card-body">
          <Create todos={todos} setTodos={setTodos} />
          <Show todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
