import React, { useState, useEffect } from 'react';
import { getInitialData, showFormattedDate } from './utils/data';
import Navigation from './components/Navigation';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    id: '',
    title: '',
    body: '',
    archived: false,
    createdAt: '',
  });
  const [titleError, setTitleError] = useState('');


  useEffect(() => {
    const initialData = getInitialData();
    setNotes(initialData);
  }, []);

  const MAX_TITLE_LENGTH = 50;

  const addNote = () => {
    if (newNote.title.length > MAX_TITLE_LENGTH) {
      setTitleError('Title cannot exceed 50 characters');
      return;
    }

    const timestamp = +new Date();
    const newNoteWithId = { ...newNote, id: timestamp, createdAt: new Date().toISOString() };
    setNotes([...notes, newNoteWithId]);
    setNewNote({
      id: '',
      title: '',
      body: '',
      archived: false,
      createdAt: '',
    });
    setTitleError('');
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    const remainingCharacters = MAX_TITLE_LENGTH - inputValue.length;
    setNewNote({ ...newNote, title: inputValue });
    setTitleError('');
    if (remainingCharacters < 0) {
      setTitleError('Title cannot exceed 50 characters');
    }
  };

  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <Navigation/>
      
      <NoteForm
        titleError={titleError}
        MAX_TITLE_LENGTH={MAX_TITLE_LENGTH}
        newNote={newNote}
        handleTitleChange={handleTitleChange}
        handleBodyChange={(body) => setNewNote({ ...newNote, body })}
        addNote={addNote}
      />

      <div>
        <h1 style={styles.center}>Catatan Aktif</h1>
        {activeNotes.length === 0 ? (
          <p style={styles.center}>Tidak ada catatan</p>
        ) : (
          <ul style={styles.list}>
            {activeNotes.map((note) => (
              <Notes key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />
            ))}
          </ul>
        )}

        <h1 style={styles.center}>Arsip Catatan</h1>
        {archivedNotes.length === 0 ? (
          <p style={styles.center}>Tidak ada catatan</p>
        ) : (
          <ul style={styles.list}>
            {archivedNotes.map((note) => (
              <Notes key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  center: {
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '0px',
  },
};

export default App;
