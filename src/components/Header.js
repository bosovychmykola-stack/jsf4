import React from "react";

const headerStyle = {
  padding: "12px 0",
  lineHeight: "1.6",
};

export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      <h1>Simple Todo App</h1>
      <p>Додай, відмічай виконане та видаляй завдання — просто і швидко.</p>
    </header>
  );
}
