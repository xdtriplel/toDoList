import React, { useEffect, useState } from "react";
import "./App.css";
import Todolist from "./components/ToDoList/ToDoList";
import AddingForm from "./components/AddingForm/AddingForm";
import { v4 as uuidv4 } from "uuid";
import { TodoItem, Todoes } from "./types/todoes";
import todoes from "./constants/todoes";
import useFetchTodoes from "./hooks/fetchTodoes";
import { useDispatch, useSelector } from "react-redux";
import { addItemdb } from "./functions/addItemdb";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state: { todoes: Todoes }) => state.todoes);

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTask = (
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) => {
    const newItem = {
      id,
      title,
      description,
      completed,
    };

    dispatch({ type: "ADD_TODO", payload: newItem });
    addItemdb(newItem);
  };

  const fetchData = async function () {
    let answer = await fetch("http://localhost:3001/todoes").then((res) =>
      res.json(),
    );
    for (let i of answer) {
      dispatch({ type: "ADD_TODO", payload: i });
    }
  };

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <AddingForm onAddTask={handleAddTask} />

      <Todolist />
    </>
  );
}

export default App;
