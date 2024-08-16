import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/ToDoList";
import AddingForm from "./components/AddingForm";
import { v4 as uuidv4 } from "uuid";
import { TodoItem, Todoes } from "./types/todoes";
import todoes from "./constants/todoes";

function App() {
  const [tasks, setTasks] = useState<Todoes>(todoes);

  const handleAddTask = (title: string, description: string) => {
    const newItem = {
      id: uuidv4(),
      title,
      description,
    };

    setTasks((prevState) => [...prevState, newItem]);
  };

  const handleDeleteTask = (idNumber: string) => {
    setTasks((prevState) => [
      ...prevState.slice(
        0,
        prevState.findIndex((p) => p.id == idNumber),
      ),
      ...prevState.slice(prevState.findIndex((p) => p.id == idNumber) + 1),
    ]);
  };

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <AddingForm onAddTask={handleAddTask} />

      <Todolist things={tasks} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
