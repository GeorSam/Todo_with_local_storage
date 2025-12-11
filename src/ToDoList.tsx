import type { ToDoItem } from "./types";
import "./ToDoList.css";
interface ToDoListProps {
  list: ToDoItem[];
  handleDelete(id: number): void;
}
export default function ToDoList(props: ToDoListProps) {
  return (
    <>
      {props.list.map((listItem) => (
        <div className="listItemCard" key={listItem.id}>
          <h2>{listItem.name}</h2>
          <button
            className="deleteButton"
            onClick={() => props.handleDelete(listItem.id)}
          >
            Delete Item
          </button>
        </div>
      ))}
    </>
  );
}
