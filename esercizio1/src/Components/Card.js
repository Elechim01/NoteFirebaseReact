import { React, useContext } from "react";
import Button from "react-bootstrap/Button";

function Card(props) {
  



  return (
    <div className="row">
      {props.note && props.note.map((note) => (
        <div className="col" >
          <div className="card mb-3 mx-3 mt-3" style={{ width: "20rem" }} key={note.id}>
            <div className="card-body">
              <h4 className="card-title">{note.title} </h4>
              <p className="card-text"> {note.desc} </p>
              <Button className="me-4 btn btn-danger" onClick={ ()=> props.deleteN(note.id)}> Delete </Button>
              <Button onClick={() => props.editN(note)}>Edit</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
