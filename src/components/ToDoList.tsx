import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todoes } from "../types/todoes";
import { TodoItem } from "../types/todoes";
import completedTodoes from "../constants/completedTodoes";
import Checkbox from "@mui/material/Checkbox";
import "../App.css";
import styles from "../css/ToDoList.module.css";

type TodoListProps = {
  things: Todoes;
  onDeleteTask: (id: string) => void;
};

const Todolist: FC<TodoListProps> = ({ things, onDeleteTask }) => {
  const [completedTasks, setCompletedTasks] = useState<Todoes>(completedTodoes);

  const handleClick = (id: string) => {
    onDeleteTask(id);
  };

  const handleCheckbox = (thing: TodoItem) => {
    if (!completedTasks.includes(thing)) {
      setCompletedTasks((prevState) => [...prevState, thing]);
    } else {
      setCompletedTasks((prevState) => [
        ...prevState.slice(
          0,
          prevState.findIndex((p) => p.id == thing.id),
        ),
        ...prevState.slice(prevState.findIndex((p) => p.id == thing.id) + 1),
      ]);
    }
  };

  return (
    <List className={styles.todoList}>
      {things.map((thing) => (
        <ListItem
          className={
            [completedTasks.includes(thing) ? styles.taskCompleted : styles.taskUncompleted, styles.ul].join(" ")
          }
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => handleClick(thing.id)} />
            </IconButton>
          }
        >
          <Checkbox onClick={() => handleCheckbox(thing)} />
          <ListItemText
            key={thing.id}
            primary={thing.title}
            secondary={thing.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Todolist;
