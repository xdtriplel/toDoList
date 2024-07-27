import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist, AddingForm }  from "./components";

function App() {
  const toDoThings: {id: number, title:string, description: string}[] = [
    {id: 1, title: "Wake up", description: "wake up to reality"},
    {id: 2, title: "Brush the teeth", description: "Your teeth are so dirty, you shoulda clean it up"},
    {id: 3, title: "Make a breakfast", description: "Cook some dish"}
  ];

  return (
    <>
      <header>
        <h1>To Do List</h1>
      </header>
      <AddingForm/>

      <div id="todolist">
        <Todolist things={toDoThings}/>
      </div>
    </>
  )
}

export default App;
