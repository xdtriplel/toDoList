import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist }  from "./components";

function App() {
  const toDoThings: {id: number, title:string, description: string}[] = [
    {id: 1, title: "Wake up", description: "wake up to reality"},
    {id: 2, title: "Brush the teeth", description: "Your teeth are so dirty, you shoulda clean it up"},
    {id: 3, title: "Make a breakfast", description: "Cook some dish"}
  ];

  return (
    <Todolist things={toDoThings}/>
  )
}

export default App;
