
import React from "react";
import { TodoItem } from "./todoItem"; // TodoItem을 named import로 가져옵니다.

export const TodoList = ({ todos, onDelete }) => {
  
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};
