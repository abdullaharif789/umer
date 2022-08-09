import React, { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    let count = todos.length;
    let last_id = count == 0 ? 0 : todos[count - 1].id;
    setTodos([...todos, { id: last_id + 1, title, checked: false }]);
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
