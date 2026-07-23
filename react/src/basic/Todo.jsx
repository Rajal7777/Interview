import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleSaveTodo() {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    if (editingId) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId ? { ...todo, text: trimmedInput } : todo,
        ),
      );
      setInput("");
      setEditingId(null);
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: trimmedInput,
      },
    ]);
    setInput("");
  }

  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    if (editingId === id) {
      setInput("");
      setEditingId(null);
    }
  }

  function handleEditTodo(todo) {
    setInput(todo.text);
    setEditingId(todo.id);
  }

  function handleCancelEdit() {
    setInput("");
    setEditingId(null);
  }

  return (
    <div>
      <h2>Todo</h2>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "8px" }} onClick={handleSaveTodo}>
        {editingId ? "update" : "save"}
      </button>
      {editingId && (
        <button style={{ marginLeft: "8px" }} onClick={handleCancelEdit}>
          cancel
        </button>
      )}

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={() => handleEditTodo(todo)}>edit</button>
          <button
            style={{ marginLeft: "8px" }}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
