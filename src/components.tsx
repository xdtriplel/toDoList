import React from "react";

type ToDoItem = {
    id: number;
    title: string;
    description: string;
  };
  
type TodoListProps = {
    things: ToDoItem[];
};

const Todolist: React.FC<TodoListProps> = (props) => {
    return (
        <ul id="toDoList">
          {props.things.map((thing) => (
            <li key={thing.id}>
              <div>
                <h3>{thing.title}</h3>
                <p>{thing.description}</p>
              </div>
            </li>
          ))}
        </ul>
    );
};


export {Todolist}