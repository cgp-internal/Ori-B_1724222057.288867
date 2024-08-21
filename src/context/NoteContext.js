import { createContext, useState } from 'react';
import { initialNotes } from '../data/notes';

const NoteContext = createContext();

const useNotes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const updateNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return [notes, addNote, updateNote, deleteNote];
};

const NoteContextProvider = ({ children }) => {
  const [notes, addNote, updateNote, deleteNote] = useNotes();

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteContextProvider, useNotes };