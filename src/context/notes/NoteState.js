import React, { useState } from "react"; 
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "65783cfcd3198131612e536b",
          "user": "657716cc432383833e0f1c72",
          "title": "My title",
          "description": "Please wakeup early",
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
      const[notes,setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;