import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        name: name,
        title: value,
      })
    );
    setName("");
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add task"
        value={name}
        className={styles.input}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Add todo"
        value={value}
        className={styles.input}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default AddTodo;
