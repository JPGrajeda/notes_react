import React from 'react';

/** 
 * * Components router dom */
import { Link, Route, Redirect } from "react-router-dom";

/** 
 * * Components Material-ui */
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

/** 
 * *  Componentes */
import NotesForm from './NotesForm';
import NotesList from "./NoteList";
import Home from "./Home";
import Note from "./Note";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      notes: []
    };
  }

  /**
   * !Actualiza el valor de los inputs
   */
  updateValueInput = (value, propiedad) => {
      this.setState({
          [propiedad]: value
      })
  }

  /**
   * !Guarda las notas en el array notes
   */
  saveNote = () => {

    if(!this.state.title){
      return console.log('No tiene title');
    }

    if(!this.state.description){
      return console.log('No tiene description');
    }

    const notes = this.state.notes;
    notes.push({ id: Date.now(),title: this.state.title , description: this.state.description})
    this.clearValue();
    this.setState({
      notes,
    })
  }

  /**
   * !Elimina item de la lista
   */
  deleteNote = (idNote) => {
    const notes = this.state.notes;
    // var idx = Object.keys(notes).filter(function(key) { // devuelve la posicio del array a borrar 
    //   return notes[key].id === idNote;
    // })
    // notes.splice(idx, 1);
    
    var newNotes = notes.filter(function(key) { // crea el nuevo array sin el eliminado 
      return key.id !== idNote;
    })

    this.setState({
      notes: newNotes
    })
  }

  /**
   * !Busca si la nota existe y la retorna
   */
  filterNote = (idNote) => {
    const notes = this.state.notes;
    var note = notes.filter(note =>{
      return note.id === parseInt(idNote)
    })
    return note[0];
  }



  /**
   * !Limpia los inputs
   */
  clearValue = () => {
    this.setState({
      title: '',
      description: ''
    })
  }

  render(){
    return (
      <React.Fragment>

        {/* <Container fixed> */}

        <Grid container>
        
          <Grid item xs={2}>
            <NotesList notes={this.state.notes} deleteNote={ this.deleteNote }/>
            <Fab color="primary" aria-label="Add" component={Link} to={`/new`}>
                <AddIcon />
            </Fab>
          </Grid>

          <Grid item xs={10}>
            <Route exact path="/" component={Home}/>
            <Route path="/new" 
              render={ () => (
                <NotesForm 
                onChange={ this.updateValueInput } 
                saveNote={ this.saveNote}
                title={ this.state.title }
                description={ this.state.description }
                />
                ) 
              }
            />
            <Route path="/view/:id" 
              render={ props => {
                const note = this.filterNote(props.match.params.id)
                return note ? <Note note={note}></Note> : <Redirect to="/"/>
                }
              }
            />
          </Grid>

        </Grid>

        {/* </Container> */}

      </React.Fragment>
    );
  }


}

export default App;
