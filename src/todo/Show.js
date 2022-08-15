import React, { useState } from "react";
import axios from "axios";
import Edit from "./Edit";

const Show = ({ todos, setTodos }) => {
  const deleteTodo = async (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    await axios.delete(`http://localhost:4000/todos/${id}`);
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

  const complete = (id) => {
    let temp_todos = [...todos];
    let todo_index = temp_todos.map((todo) => todo.id).indexOf(id);
    temp_todos[todo_index].complete = !temp_todos[todo_index].complete;
    setTodos(temp_todos);
  };
  return (
    <>
      <div>
        {todos.filter((todo) => todo.checked).length > 0 && (
          <button className="btn btn-danger mt-5" onClick={deleteSelectedTodos}>
            Delete Selected TODOS
          </button>
        )}
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
                <td className={todo.complete ? "cut-text" : ""}>
                  {todo.title}
                </td>
                <td>
                  <div className="d-flex">
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => complete(todo.id)}
                    >
                      {todo.complete ? "Incomplete" : "Complete"}
                    </button>
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
