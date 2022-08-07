import React from "react";

const Show = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th className="w-50">TODO</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
