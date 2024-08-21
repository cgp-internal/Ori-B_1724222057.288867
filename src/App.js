import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { NoteContextProvider } from './context/NoteContext';

const App = () => {
  return (
    <React.Fragment>
      <NoteContextProvider>
        <NoteForm />
        <NoteList />
      </NoteContextProvider>
    </React.Fragment>
  );
};

export default App;
export { App };