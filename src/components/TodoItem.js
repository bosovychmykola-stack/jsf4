import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <span className={todo.completed ? "todo-title completed" : "todo-title"}>
          {todo.title}
        </span>
        <button className="btn-delete" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
