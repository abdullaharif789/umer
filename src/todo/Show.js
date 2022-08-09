import React, { useState } from "react";
import Edit from "./Edit";

const Show = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [globalSelect, setGlobalSelect] = useState(false);
  const toggleGloablSelectTodos = (e) => {
    let new_value = !globalSelect;
    setGlobalSelect(new_value);
    setTodos(todos.map((todo) => ({ ...todo, checked: new_value })));
  };
  const deleteSelectedTodos = () => {
    setTodos(todos.filter((todo) => !todo.checked));
    setGlobalSelect(false);
  };

  const toggleSingleSelectTodo = (id) => {
    let temp_todos = [...todos];
    let todo_index = temp_todos.map((todo) => todo.id).indexOf(id);
    temp_todos[todo_index].checked = !temp_todos[todo_index].checked;
    setTodos(temp_todos);
  };

  return (
    <>
      <div>
        <table className="table mt-5">
          <thead>
            <tr>
              <th>
                <div className="form-group form-check">
                  <input
                    checked={globalSelect}
                    className="form-check-input"
                    type="checkbox"
                    onChange={toggleGloablSelectTodos}
                  />
                </div>
              </th>
              <th>ID</th>
              <th className="w-75">TODO</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={todo.checked}
                      onChange={() => toggleSingleSelectTodo(todo.id)}
                    />
                  </div>
                </td>
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
        {todos.filter((todo) => todo.checked).length > 0 && (
          <button className="btn btn-danger" onClick={deleteSelectedTodos}>
            Delete Selected TODOS
          </button>
        )}
      </div>
    </>
  );
};

export default Show;
