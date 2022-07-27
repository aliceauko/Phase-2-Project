import React from "react";

function Addnewnote() {
  return (
    <div className="note newnote">
      <textarea rows="10" cols="10" placeholder="Add new note..."></textarea>
      <div className="footernote">
        <small>300 remaining</small>
        <button className="savenote">Save</button>
      </div>
    </div>
  );
}

export default Addnewnote;
