import React from 'react'
import Note from "./Note.js";

function Notes({newnote}) {
  return (
    <div className='notes'>
      {newnote.map((note)=> (
      <Note id={note.id} write={note.write} date={note.date}/>
      ))}
 
    </div>
  )
}

export default Notes
