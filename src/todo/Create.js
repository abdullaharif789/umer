import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }

    setTodos([
      { id: uuidv4(), title, checked: false, completed: false },
      ...todos,
    ]);
    setTitle("");
  };
  return (
    <div>
      <input
        className="form-control"
        type={"text"}
        placeholder="Enter any TODO"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button className="btn btn-success mt-3" onClick={addTodo}>
        Add TODO
      </button>
    </div>
  );
};

export default Create;
