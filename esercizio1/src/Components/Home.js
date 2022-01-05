import { React, useState, useEffect, createContext, Fragment } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Card from "./Card";
import AddNota from "./AddNota.js";

// Firebase...
import firebase from 'firebase/compat/app';
import  'firebase/compat/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';


function Home() {


  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURE_MENT_ID
  });
  
  
  // Creo una istanzia di firestore..
  const firestore = firebase.firestore();



  // Creo il rifetrimento 
  const ref = firestore.collection("NoteW");
  const query = ref.orderBy('uid');
  const [note] =  useCollectionData(query,{idField:'id'});
  /*
  const [note, setNote] = useState([
    {
      title: "Pane",
      desc: "Comprare dal panettiere",
      id: 1,
    },
  ]);
*/

  const [titlec, setTitolo] = useState("");
  const [descc, setDescrizione] = useState("");
  const [idE, setIdE] = useState(0);
  const [isEdit, setIsedit] = useState(false);
  const [err, seterr] = useState(false);

  // Accesso

  const addNewNote = () => {
    if (isEdit === false) {
      if (titlec !== "" && descc !== ""){
        seterr(false)
        ref.add({
          desc: descc,
          title: titlec,
          uid: note.length +1
        });
        /*setNote([
          ...note,
          {
            title: titlec,
            desc: descc,
            id: note.length + 1,
          },
        ]);
        */
        setTitolo("");
        setDescrizione("");
      }else{
        seterr(true)
      }
    } else {

      // Aggiorna doc.

      ref.doc(idE).update({

        title: titlec,
        desc: descc
      })
      .then(() => {
        console.log("Aggiornamento riuscito")
      })
      .catch(err => {
        console.log("Aggiornamento non riuscito",err)
      })
      setIdE(0);
      /*
      // Recupero il valore :
      var valVecchio = note.filter((nota) => nota.id === idE);
      console.log("Val Vecchio", valVecchio);
      valVecchio[0].title = titlec;
      valVecchio[0].desc = descc;
      valVecchio[0].id = idE;

      var senzaVecchio = note.filter((nota) => nota.id !== valVecchio[0].id);
      console.log("Senza vecchio", senzaVecchio);
      let prec = valVecchio[0];
      senzaVecchio.push(prec);
     // setNote(senzaVecchio);
      console.log(senzaVecchio);
      */
      setIsedit(false);
      setTitolo("");
      setDescrizione("");
    }
    console.log(note);
  };

  const deleteN = (notaID) => {
    console.log("Nota ID",notaID);
    console.log(note);

      ref.doc(notaID).delete()
        .then(() => {
          console.log("documento eliminato con successo")
        })
        .catch(err => {
          console.log("Errore",err);
        })
    

    // filler mi ritorna una lista senza questa condizione
   // const tempn = note.filter((nota) => nota.id !== notaID);
    //console.log("Tempn", tempn);
   // setNote(tempn);
  };

  const EditN = (nota) => {
    seterr(false)
    setTitolo(nota.title);
    setDescrizione(nota.desc);
    setIdE(nota.id);
    setIsedit(true);
  };

  // <Card note={note} setNote = {setNote} />
  //var note = []

  return (

    <>
      <AddNota 
          titlec = {titlec} 
          descc={descc} 
          setTitolo={setTitolo} 
          setDescrizione={setDescrizione}
          isEdit={isEdit}
          addNewNote={addNewNote}
          err={err}  
        />

        <Card note= {note} deleteN ={deleteN} editN={EditN} />  
      </>
  );
}

export default Home;
