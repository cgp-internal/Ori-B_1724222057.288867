import React from 'react';
import { useNotes } from '../context/NoteContext';

const NoteList = () => {
  const [notes] = useNotes();

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <span>Status: {note.status}</span>
        </li>
      ))}
    </ul>
  );
};

export { NoteList };