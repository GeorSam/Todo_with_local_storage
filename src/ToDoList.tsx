import type { ToDoItem } from "./types";

interface ToDoListProps {
  list: ToDoItem[];
  handleDelete(id: number): void;
}
export default function ToDoList(props: ToDoListProps) {
  return (
    <div>
      {props.list.map((listItem) => (
        <div key={listItem.id}>
          <li>{listItem.name}</li>
          <button onClick={() => props.handleDelete(listItem.id)}>
            Delete Item
          </button>
        </div>
      ))}
    </div>
  );
}
