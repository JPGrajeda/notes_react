import React from "react";

/** 
 * * Components Material-ui */
import Typography from '@material-ui/core/Typography';

const Note = props => {
    const { id } = props.match.params;
    const { notes } = props;

    const note = notes.filter( note => {
        return note.id === parseInt(id)
    });

        return(
            <React.Fragment>
                <Typography aling="center" variant="h4" gutterBottom>
                        {note[0].title}
                </Typography>
                <Typography varian="subtitle2">
                        {note[0].description}
                </Typography>
            </React.Fragment>
        );
}

export default Note;