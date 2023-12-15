import React, { useState } from "react"; 
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "65783cfcd3198131612e536b",
          "user": "657716cc432383833e0f1c72",
          "title": "title",
          "description": "description",
          "tag": "personal",
          "date": "2023-12-12T10:59:08.271Z",
          "__v": 0
        },
        {
          "_id": "65783e67d3198131612e536e",
          "user": "657716cc432383833e0f1c72",
          "title": "New Note",
          "description": "Please access the playlist",
          "tag": "YouTube",
          "date": "2023-12-12T11:05:11.382Z",
          "__v": 0
        },
        {
          "_id": "657855e693e673d141c4c698",
          "user": "657716cc432383833e0f1c72",
          "title": "New Note2",
          "description": "Please access the playlist3",
          "tag": "YouTube4",
          "date": "2023-12-12T12:45:26.629Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
      // Add a Note
      const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "657855e693e673d141c4c688",
          "user": "657716cc432383833e0f1c72",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-12-12T12:45:26.629Z",
          "__v": 0

        };
        setNotes(notes.concat(note)) 
      }

      // Delete a Note
      const deleteNote = (id)=>{
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = (id, title, description, tag)=>{

      }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;