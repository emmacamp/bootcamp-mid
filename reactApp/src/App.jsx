// import "./styles.css";
import { useEffect, useState } from "react";
import { createNotes, getAllNotes } from './services/notes';
import { Notes } from "./components/Notes/";


export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("UseEffect");
    setTimeout(() => {
      setLoading(true);
      getAllNotes().then(notes => {
        setNotes(notes);
        setLoading(false);
      });
    }, 1000);
  }, []);

  const handleChanges = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    createNotes(noteToAddToState).then((note) => {
      setNotes([...notes, note]);
      // setNote((prevNotes) => prevNotes.concat(note));
    });

    // setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };
  console.log("render");

  // if (notes.length === 0) return "Hola Mi gente";

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Loading..." : ""}
      <ol>
        {notes.map((note) => (
          <Notes key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChanges} value={newNote} />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
}
