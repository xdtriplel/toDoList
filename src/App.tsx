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

  const handleDeleteTask = (idNumber: string) => {
    setTasks((prevState) => [
      ...prevState.slice(
        0,
        prevState.findIndex((p) => p.id == idNumber),
      ),
      ...prevState.slice(prevState.findIndex((p) => p.id == idNumber) + 1),
    ]);
  };

  const handleUpdateThings = (thing: TodoItem) => {
    const updatedThings = tasks.map((item) =>
      item.id === thing.id ? { ...item, completed: !item.completed } : item,
    );
    setTasks(updatedThings);
  };

  useFetchTodoes(() => {
    const fetchData = async () => {
      const result = await fetch("https://dummyjson.com/todos", {
        method: "GET",
      });
      const jsonResult = await result.json();
      for (let i of jsonResult.todos) {
        const item: TodoItem = {
          id: uuidv4(),
          title: i.todo,
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
        onDeleteTask={handleDeleteTask}
        onAddTask={handleAddTask}
        onUpdateThings={handleUpdateThings}
      />
    </>
  );
}

export default App;
