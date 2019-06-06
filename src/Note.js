import React from "react";

/** 
 * * Components Material-ui */
import Typography from '@material-ui/core/Typography';

const Note = props => {
    // const { id } = props.match.params;
    const { note } = props;

    // const note = notes.filter( note => {
    //     return note.id === parseInt(id)
    // });

        return(
            <React.Fragment>
                <Typography aling="center" variant="h4" gutterBottom>
                        {note.title}
                </Typography>
                <Typography varian="subtitle2">
                        {note.description}
                </Typography>
            </React.Fragment>
        );
}

export default Note;