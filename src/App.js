import React, {useState, useEffect} from "react";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";

function App() {
  const [newnote, setNewnote] = useState([
    {
      id: nanoid(),
      write: "This is my first note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      write: "This is my second note",
      date: "23/04/2021",
    },
    {
      id: nanoid(),
      write: "This is my third note",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      write: "This is my fourth note",
      date: "2/05/2021",
    },
  ]);

  useEffect(() => {
    const newnote = JSON.parse(
      localStorage.getItem("newnote")
      );
    if (newnote) {
      setNewnote(newnote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "newnote",
       JSON.stringify(newnote));
  }, [newnote]);

  const addnewNote = (write) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      write: write,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...newnote, newNote];
    setNewnote(newNotes);
  };

  const deleteNotes = (id) => {
    const newUpdatedNotes = newnote.filter((note) => note.id !== id);
    setNewnote(newUpdatedNotes);
  };

  return (
    <div className="contain">
      <Notes
        newnote={newnote}
        handleAddnewNote={addnewNote}
        handleDeletenote={deleteNotes}
      />
    </div>
  );
}

export default App;
