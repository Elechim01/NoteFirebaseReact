import React from 'react'
import {Form,Button} from 'react-bootstrap';

function AddNota(props) {
	return (
		<div>
			<div className="p-4">
        <h1> Inserisci una nuova nota</h1>
        <Form className="p-3" style={{ width: "30rem" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titolo</Form.Label>
            <Form.Control
              type="text"
              value={props.titlec}
              onChange={(e) => props.setTitolo(e.target.value)}
              placeholder="Pane"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              type="text"
              value={props.descc}
              onChange={(e) => props.setDescrizione(e.target.value)}
              placeholder="Prendere il pane al panificio"
            />
          </Form.Group>
          {props.isEdit === false ? (
            <Button onClick={props.addNewNote}>Aggiungi</Button>
          ) : (
            <Button onClick={props.addNewNote}>Salva</Button>
          )}
          {
            props.err ?
            <p className = "pt-3" style ={{color: "red"}}><b> Errore </b>compila i campi per aggiungere un elemento  </p> 
            :
              <p> </p>
          }
        </Form>
      </div>
		</div>
	)
}

export default AddNota;
