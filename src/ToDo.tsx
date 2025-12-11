import { useState } from "react";
import ToDoList from "./ToDoList";
import type { ToDoItem } from "./types";
import "./ToDo.css";

export default function ToDo() {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState<ToDoItem[]>([]);

  function handleAdd() {
    if (!text.trim()) return;

    const newItem: ToDoItem = {
      id: Date.now(),
      name: text.trim(),
    };

    setToDoList((prev) => [...prev, newItem]);
    setText(""); // reset textarea
  }

  function handleDelete(id: number) {
    const newList = toDoList.filter((item) => item.id !== id);
    setToDoList(newList);
  }
  return (
    <div className="container">
      <div className="background">
        <div>
          <textarea
            className="textArea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <button className="addButton" onClick={handleAdd}>
            Add To Do Item
          </button>
        </div>
        <div className="toDoList">
          <ToDoList list={toDoList} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
