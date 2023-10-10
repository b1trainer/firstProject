import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styles from "./TotalItems.module.css";

const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const allTodos = useSelector((state) =>
  state.todos.length !== 0
);

  return (
    <div className={styles.count}>
      {allTodos ? (
        completedTodos.length !== 0 ? (
          <h3>Done: {completedTodos.length}</h3>
        ) : (
          <h3>Nothing has been done</h3>
        )
      ) : (
        <h3>Nothing to do</h3>
      )}
    </div>
  );
};

export default TotalItems;
