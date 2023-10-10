import React from "react";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";
import TotalItems from "./components/totalItems/TotalItems";

const TodoPage = () => {
  return (
    <div>
      <div class="flex justify-center">
        <AddTodo />
      </div>
      <div>
        <TodoList />
      </div>
      <div class='flex justify-center'>
        <TotalItems />
      </div>
    </div>
  );
};

export default TodoPage;
