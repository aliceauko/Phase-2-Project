import React from 'react'
import Note from "./Note.js";
import Addnewnote from './Addnewnote.js';

function Notes({newnote, handleAddnewNote,    handleDeletenote}) {
  return (
    <div className='notes'>
      {newnote.map((note)=> (
      <Note id={note.id} write={note.write} date={note.date} handleDeletenote={handleDeletenote}/>
      ))}
 <Addnewnote handleAddnewNote ={handleAddnewNote}/>
    </div>
  )
}

export default Notes
