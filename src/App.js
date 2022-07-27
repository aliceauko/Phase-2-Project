import React,{useState}from "react";
import Notes from "./components/Notes";
import {nanoid} from 'nanoid';

function App(){
  const[newnote, setNewnote] =useState([
    {
    id:nanoid(),
    write: "This is my first note",
    date:"15/04/2021",
  },
  {
    id:nanoid(),
    write: "This is my second note",
    date:"23/04/2021",
  },
  {
    id:nanoid(),
    write: "This is my third note",
    date:"28/04/2021",
  }
  
]);
  return(
    <div className="contain">
      <Notes notes={newnote}/>
      
    </div>
  )
}

export default App