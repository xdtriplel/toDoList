import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Todoes } from "../types/todoes";
import "../App.css";

type AddingFormProps = {
  onAddTask: (title: string, description: string) => void;
};

const AddingForm: FC<AddingFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form id="addTask" onSubmit={handleSubmit}>
      <TextField
        className="textfield"
        required
        id="titleField"
        label="Task title"
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className="textfield"
        id="descriptionField"
        label="Task description"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="outlined" id="submitButton" type="submit">
        Add task
      </Button>
    </form>
  );
};

export default AddingForm;
