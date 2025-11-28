import { useState } from "react";
import ToDoList from "./ToDoList";
import type { ToDoItem } from "./types";

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
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button onClick={handleAdd}>Add To Do Item</button>
        <ToDoList list={toDoList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
