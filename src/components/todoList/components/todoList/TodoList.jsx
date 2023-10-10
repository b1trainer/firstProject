import React from "react";
import TodoItem from "../todoItem/TodoItem";
import styles from './TodoList.module.css'
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} name={todo.name} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
