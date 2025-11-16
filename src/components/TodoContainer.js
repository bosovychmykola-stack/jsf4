import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: "Почати лабораторну", completed: true },
      { id: uuidv4(), title: "Зробити компоненти", completed: false },
      { id: uuidv4(), title: "Оновити стилі", completed: false },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
          <div className="footer">React {React.version} • Class-based components • Modern UI</div>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
