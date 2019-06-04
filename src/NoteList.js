import React from 'react';

/** 
 * * Components Material-ui */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

/** 
 * * Components router dom */
import { Link } from "react-router-dom";

const NoteList = (props) => {
    const { notes , deleteNote } = props;

    let formatteNotes = notes.length ? 
    (
        notes.map(function (note, index) {
                 return (
                    <React.Fragment key={note.id}>
                        <ListItem variant="inset" component={Link} to={`/view/${note.id}`}>
                            <ListItemText primary={note.title} secondary={`${note.description.substring(0,35)}...`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="Delete"
                                    onClick={ () => deleteNote(note.id) }
                                >
                                <DeleteIcon />
                            </IconButton>
                  </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                 )
            })
    )
    :
    (
        <Typography aling="center" variant="subtitle2">
            No notes yet
        </Typography>
    );

    // let todoList = notes.map(function (note, index) {
    //      return (
    //         <React.Fragment key={note.id}>
    //             <ListItem variant="inset" component={Link} to={`view/${note.id}`}>
    //                 <ListItemText primary={note.title} secondary={`${note.description.substring(0,40)}...`} />
    //             </ListItem>
    //             <Divider />
    //         </React.Fragment>
    //      )
    // });

    return(

        <List>
            {formatteNotes}
        </List>
    );
}


export default NoteList;