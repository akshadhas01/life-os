import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("lifeos-notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lifeos-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = () => {
    if (!input.trim()) return;

    setNotes([
      ...notes,
      {
        id: Date.now(),
        text: input,
      },
    ]);

    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <h1>Notes</h1>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <input
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1 }}
        />

        <button onClick={addNote}>
          Add Note
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <div className="list-item" key={note.id}>
            <span>{note.text}</span>

            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notes;