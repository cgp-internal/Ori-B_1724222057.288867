import React, { useState, useContext } from 'react';
import { useNotes, addNote, updateNote } from '../context/NoteContext';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { notes, addNewNote, updateExistingNote } = useNotes();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addNewNote({ title, content, id: Math.random() });
    setTitle('');
    setContent('');
  };

  const handleUpdate = (id) => {
    if (!title || !content) return;
    updateExistingNote(id, { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <br />
      <button type="submit">Add Note</button>
      {notes.map((note) => (
        <button key={note.id} onClick={() => handleUpdate(note.id)}>
          Update Note {note.id}
        </button>
      ))}
    </form>
  );
};

export { NoteForm };