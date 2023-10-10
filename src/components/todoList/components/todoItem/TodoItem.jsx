import React from "react";
import styles from "./TodoItem.module.css";
import { toggleComplete, deleteTodo } from "../../../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, name, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className={!!completed ? styles.item_done : styles.item}>
      <span class="font-semibold space-x-6 border-r-2 flex  items-center px-2 w-96">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
          class="w-4 h-4 border-gray-300 rounded-lg"
        ></input>
        <p class="flex flex-wrap w-80 p-2">{name}</p>
      </span>
      <div class="border-r-2 w-full flex items-center justify-center">
        <p class="m-2 p-2 flex-wrap">{title}</p>
      </div>
      <div class="flex items-center">
        <button className={styles.delete_button} onClick={handleDeleteTodo}>
          &times;
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
