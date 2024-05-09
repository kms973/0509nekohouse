import React, { useState } from "react";
import { Container } from "./styled";
import { TodoList } from "../../components/todo/todoList";


export const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat Breakfast' },
    { id: 2, text: 'Eat Lunch' },
    { id: 3, text: 'Eat Dinner' },
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const [newTodoText, setNewTodoText] = useState(""); // 새로운 항목의 텍스트를 저장할 상태

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value); // 입력값이 변경될 때마다 새로운 항목의 텍스트 상태를 업데이트
  };

  const handleAddTodo = () => {
    // 입력값이 비어 있지 않은 경우에만 새로운 항목을 추가
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText.trim(),
      };
      const updatedTodos = [...todos, newTodo];
      setNewTodoText(""); // 입력 필드를 초기화
    }
  };

  return <Container>
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        placeholder="새로운 할 일을 입력하세요"
      />
      <button onClick={handleAddTodo}>추가</button>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  </Container>
}