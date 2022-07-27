import React, { useState } from "react";

function Addnewnote({handleAddnewNote}) {
    const [writenote, setWriteNote]=useState('')

    const HandleWritenote = (e)=>{
        setWriteNote(e.target.value)

    }

    const handleSavenote =()=>{
handleAddnewNote(writenote)

    }
  return (
    <div className="note newnote">
      <textarea rows="10" cols="10" placeholder="Add new note..." value={writenote} onChange={HandleWritenote}></textarea>
      <div className="footernote">
        <small>300 remaining</small>
        <button className="savenote" onClick={handleSavenote}>Save</button>
      </div>
    </div>
  );
}

export default Addnewnote;
