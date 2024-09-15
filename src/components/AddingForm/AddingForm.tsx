import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { Todoes } from "../../types/todoes";
import styles from "./AddingForm.module.css";
import "../../App.css";

type AddingFormProps = {
  onAddTask: (
    id: string,
    title: string,
    description: string,
    completed: boolean,
  ) => void;
};

const AddingForm: FC<AddingFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(uuidv4(), title, description, false);
    setTitle("");
    setDescription("");
  };

  return (
    <form id={styles.addTask} onSubmit={handleSubmit}>
      <TextField
        className={styles.textfield}
        required
        id="titleField"
        label="Task title"
        variant="filled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        className={styles.textfield}
        id="descriptionField"
        label="Task description"
        variant="filled"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="outlined" id={styles.submitButton} type="submit">
        Add task
      </Button>
    </form>
  );
};

export default AddingForm;
