import React, {useState} from "react";
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

    return <Container>
       <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
    </Container>
}