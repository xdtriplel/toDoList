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
import { useDispatch, useSelector } from "react-redux";
import { deleteItemdb } from "../../functions/deleteItemdb";
import { changeStatusdb } from "../../functions/changeStatusdb";

const Todolist: FC<{}> = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state: { todoes: Todoes }) => state.todoes);

  const [fadeOutId, setFadeOutId] = useState<string | null>(null);

  const handleClick = (todo: TodoItem) => {
    setFadeOutId(todo.id);

    deleteItemdb(todo.id);

    setTimeout(() => {
      dispatch({ type: "DELETE_TODO", payload: todo });

      setFadeOutId(null);
    }, 200);
  };

  const handleCheckbox = (todo: TodoItem) => {
    changeStatusdb(todo);
    dispatch({ type: "UPDATE_TODOES", payload: todo });
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
              <DeleteIcon onClick={() => handleClick(thing)} />
            </IconButton>
          }
        >
          <Checkbox
            onClick={() => handleCheckbox(thing)}
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
