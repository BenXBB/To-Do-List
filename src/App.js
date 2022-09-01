import React from "react";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    setItems( (prevValue) => {
      return [...prevValue, inputText];
      });
      setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoitem => (
            <ToDoItem 
            text={todoitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
