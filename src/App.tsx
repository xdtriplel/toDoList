import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/ToDoList";
import AddingForm from "./components/AddingForm";
import { v4 as uuidv4 } from "uuid";
import { TodoItem, Todoes } from "./types/todoes";

const todoes: Todoes = [
  { id: "1", title: "Wake up", description: "wake up to reality" },
  {
    id: "2",
    title: "Brush the teeth",
    description: "Your teeth are so dirty, you shoulda clean it up",
  },
  { id: "3", title: "Make a breakfast", description: "Cook some dish" },
];

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

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <AddingForm onAddTask={handleAddTask} />

      <Todolist things={tasks} />
    </>
  );
}

export default App;
