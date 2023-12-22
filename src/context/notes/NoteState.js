import React, { useState } from "react"; 
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
      //get all notes
      const getNotes = async () => {
        // API Call 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NzE2Y2M0MzIzODM4MzNlMGYxYzcyIn0sImlhdCI6MTcwMjMwNzkzNX0.0FPl3L3O7piXR5cpK3L5v_EHEo0d-04U9joC8gIzeQk"
          }
        });
        const json = await response.json();
        setNotes(json)
      }
      
      // Add a Note
      const addNote = async(title, description, tag)=>{
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NzE2Y2M0MzIzODM4MzNlMGYxYzcyIn0sImlhdCI6MTcwMjMwNzkzNX0.0FPl3L3O7piXR5cpK3L5v_EHEo0d-04U9joC8gIzeQk"
          },
         
          body: JSON.stringify({title,description,tag}), 
        });
        const note = await response.json();
        setNotes(notes.concat(note));
      }

      // Delete a Note
      const deleteNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NzE2Y2M0MzIzODM4MzNlMGYxYzcyIn0sImlhdCI6MTcwMjMwNzkzNX0.0FPl3L3O7piXR5cpK3L5v_EHEo0d-04U9joC8gIzeQk"
          }
        });
        const json = await response.json();
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      // Edit a Note
      const editNote = async(id, title, description, tag)=>{
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU3NzE2Y2M0MzIzODM4MzNlMGYxYzcyIn0sImlhdCI6MTcwMjMwNzkzNX0.0FPl3L3O7piXR5cpK3L5v_EHEo0d-04U9joC8gIzeQk"
        },
          body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        //logic to edit notes
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id===id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag; 
            break; 
          }
          
        }
          setNotes(newNotes);
      }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;