import React, { useEffect, useState } from "react";
import "./App.css";
import Todolist from "./components/ToDoList/ToDoList";
import AddingForm from "./components/AddingForm/AddingForm";
import { v4 as uuidv4 } from "uuid";
import { TodoItem, Todoes } from "./types/todoes";
import todoes from "./constants/todoes";
import useFetchTodoes from "./hooks/fetchTodoes";

function App() {
  const [tasks, setTasks] = useState<Todoes>(todoes);

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

    setTasks((prevState) => [...prevState, newItem]);
  };

  const handleUpdateThings = (updatedThings: Todoes) => {
    setTasks(updatedThings);
  };

  useFetchTodoes(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });
      const jsonResult = await result.json();
      for (let i of jsonResult) {
        const item: TodoItem = {
          id: uuidv4(),
          title: i.title,
          description: "",
          completed: i.completed,
        };

        handleAddTask(item.id, item.title, item.description, item.completed);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <h1>To Do List</h1>
      </header>
      <AddingForm onAddTask={handleAddTask} />

      <Todolist
        things={tasks}
        onAddTask={handleAddTask}
        onUpdateThings={handleUpdateThings}
      />
    </>
  );
}

export default App;
