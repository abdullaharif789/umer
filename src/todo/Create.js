import React, { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    let last_id = todos[todos.length - 1].id;
    setTodos([...todos, { id: last_id + 1, title }]);
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
