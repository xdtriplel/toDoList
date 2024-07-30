import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


/* ToDoList component */

type ToDoItem = {
    id: number;
    title: string;
    description: string;
};
  
type TodoListProps = {
    things: ToDoItem[];
};

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Todolist: React.FC<TodoListProps> = (props) => {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);

    console.log(props.things)
    return (
      <>
      {props.things.map((thing) => 
        <Demo>
          <List dense={dense}>
            
              <ListItem secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              >

              <ListItemText
                    key={thing.id}
                    primary={thing.title}
                    secondary={secondary ? thing.description : null}
                  />
            </ListItem>
          </List>
        </Demo>
    )}
    </>)
};


/* Adding a new item component */

type AddingFormProps = {
  onAddTask: (title: string, description: string) => void;
};

const AddingForm: React.FC<AddingFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <>
      <form id='addATask' onSubmit={handleSubmit}>
        <TextField className="textfield" required id="titleField" label="Task title" variant="filled" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField className="textfield" id="descriptionField" label="Task description" variant="filled" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button variant="outlined" id="submitButton" type="submit">Add task</Button>
      </form>
    </>
  )
}

export {Todolist , AddingForm}