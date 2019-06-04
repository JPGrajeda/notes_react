import React  from 'react';

/** 
 * * Components Material-ui */
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const TodoForm = props => {

    let { title, description, onChange, saveNote  } = props;

    return(

            <Grid>
                    <Grid item md={8}>
                        <TextField
                            type='text'
                            label="Title"
                            placeholder="Title"
                            margin="normal"
                            onChange={ (e) => onChange( e.target.value ,'title') }
                            value={ title }
                        />
                    </Grid>
                    <Grid item md={4}>
                        <TextField
                            label="Description"
                            placeholder="Description"
                            multiline
                            margin="normal"
                            onChange={ (e) => onChange(  e.target.value,'description') }
                            value={ description }
                        />
                    </Grid>
                    <Button variant="contained" color="primary" onClick={ e => { saveNote() } }  >
                        Save
                    </Button>
            </Grid>

    );
};

export default TodoForm;