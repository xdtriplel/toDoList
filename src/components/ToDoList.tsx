import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todoes } from "../types/todoes";
import "../App.css";

type TodoListProps = {
  things: Todoes;
};

const Todolist: FC<TodoListProps> = ({ things }) => {
  return (
    <>
      {things.map((thing) => (
        <List className="todoList">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              key={thing.id}
              primary={thing.title}
              secondary={thing.description}
            />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default Todolist;
