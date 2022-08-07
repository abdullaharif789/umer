import React, { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    const count = todos.length;
    setTodos([...todos, { id: count + 1, title }]);
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
