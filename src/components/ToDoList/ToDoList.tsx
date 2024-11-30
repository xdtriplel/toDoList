import React, { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todoes } from "../../types/todoes";
import { TodoItem } from "../../types/todoes";
import completedTodoes from "../../constants/completedTodoes";
import Checkbox from "@mui/material/Checkbox";
import styles from "./ToDoList.module.css";
import useFetchTodoes from "../../hooks/fetchTodoes";
import { v4 as uuidv4 } from "uuid";

type TodoListProps = {
  things: Todoes;
  onAddTask: (
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) => void;
  onUpdateTasks: (things: Todoes) => void;
};

const Todolist: FC<TodoListProps> = ({ things, onAddTask, onUpdateTasks }) => {
  const [todoItems, setTodoItems] = useState<Todoes>(things);

  useEffect(() => {
    setTodoItems(things);
  }, [things]);

  const [fadeOutId, setFadeOutId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    const updatedTodoes = todoItems.filter((item) =>
      item.id != id ? item : null,
    );

    setFadeOutId(id);

    setTimeout(() => {
      setTodoItems(updatedTodoes);

      onUpdateTasks(updatedTodoes);

      setFadeOutId(null);
    }, 200);
  };

  const handleCheckbox = (id: string) => {
    const updatedTodoes = todoItems.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );

    setTodoItems(updatedTodoes);

    onUpdateTasks(updatedTodoes);
  };

  return (
    <List className={styles.todoList}>
      {todoItems.map((thing) => (
        <ListItem
          key={thing.id}
          className={[
            thing.completed ? styles.taskCompleted : styles.taskUncompleted,
            styles.ul,
            fadeOutId == thing.id ? styles.fadeOut : "",
          ].join(" ")}
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={() => handleClick(thing.id)} />
            </IconButton>
          }
        >
          <Checkbox
            onClick={() => handleCheckbox(thing.id)}
            checked={thing.completed}
          />
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
