import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const val = this.state.title.trim();
    if (val.length === 0) return;
    this.props.addTodoProps(val);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-wrap">
        <input
          type="text"
          className="input-text"
          placeholder="Add a new task..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
          aria-label="Todo title"
        />
        <input type="submit" className="input-submit" value="Add" />
      </form>
    );
  }
}

export default InputTodo;
