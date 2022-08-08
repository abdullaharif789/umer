import React from "react";
import Edit from "./Edit";

const Show = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th className="w-75">TODO</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <div className="d-flex">
                    <Edit setTodos={setTodos} todos={todos} todo={todo} />
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Show;
