import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Create from "./Create";

function Edit({ todo, todos, setTodos }) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState();

  const toggle = () => {
    setModal(!modal);
    setTitle(todo.title);
  };

  const updateTodo = () => {
    if (title === "") {
      alert("Please enter a title");
      return;
    }
    // Update Todo
    let temp_todos = [...todos];
    let todo_index = temp_todos.map((todo) => todo.id).indexOf(todo.id);
    temp_todos[todo_index].title = title;
    setTodos(temp_todos);
    // Empty Title
    setTitle("");
    toggle();
  };

  return (
    <div>
      <Button color="warning" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Edit TODO</ModalHeader>
        <ModalBody>
          <input
            className="form-control"
            type={"text"}
            placeholder="Enter any TODO"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateTodo}>
            Update TODO
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edit;
