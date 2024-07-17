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
                    primary={thing.title}
                    secondary={secondary ? thing.description : null}
                  />
            </ListItem>
          </List>
        </Demo>
    )}
    </>)
};


export {Todolist}