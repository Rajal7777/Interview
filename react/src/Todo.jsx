import { useState } from "react";
import { v4 as createId } from "uuid";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState("");

  console.log(todos);
  console.log("editId", editId);

  function handleAddTodo() {
    //text xa ki xoina re empty xa ki xoina check garyo
    const trimmedInput = inputValue.trim();

    //empty ca vany return gardem
    if (!trimmedInput) return;

    //yeta mealy mistake gary ko theya if block setTodos ma maelay {} cutly braces use gary ko tara return halay ko theyana jslay garda default value undefined return hunca so tyhi value todo.map ly read garda kheri can not read property of undefined error aauxa so tyhi value return garna parcha

    /*
    //prev.map((item) =>
          item.id === editId ? { ...item, text: inputValue } : item,
        ); yo code ma map harek item ma callback fuction run hunca if item.id === editId ca vany text chnage navaya smae item de 

        */
       
    if (editId) {
      setTodos((prev) => {
        return prev.map((item) =>
          item.id === editId ? { ...item, text: inputValue } : item,
        );
      });
      setInputValue("");
      setEditId(null);
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        text: trimmedInput,
        id: createId(),
      },
    ]);

    setInputValue("");
  }

  //delete
  function handleDelete(id) {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  //handle start edit
  function startEdit(item) {
    setEditId(item.id);
    setInputValue(item.text);
  }

  function cancelEdit() {
    setEditId(null);
    setInputValue("");
  }
  return (
    <>
      <div>Todo</div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Add a task"
      />
      <button onClick={handleAddTodo}>{editId ? "update" : "save"}</button>
      {editId && <button onClick={cancelEdit}>cancel</button>}
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>delete</button>
            <button onClick={() => startEdit(item)}>update</button>
          </li>
        ))}
      </ul>
    </>
  );
}
