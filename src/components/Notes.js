import React from 'react'
import Note from "./Note.js";
import Addnewnote from './Addnewnote.js';

function Notes({newnote, handleAddnewNote}) {
  return (
    <div className='notes'>
      {newnote.map((note)=> (
      <Note id={note.id} write={note.write} date={note.date}/>
      ))}
 <Addnewnote handleAddnewNote ={handleAddnewNote}/>
    </div>
  )
}

export default Notes
