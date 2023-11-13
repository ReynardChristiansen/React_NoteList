// NoteForm.js

import React from 'react';

const NoteForm = ({ titleError, MAX_TITLE_LENGTH, newNote, handleTitleChange, handleBodyChange, addNote }) => {
  return (
    <div style={styles.center}>
      <h2>Buat Catatan</h2>
      <form>
        {titleError && <p style={{ color: 'red' }}>{titleError}</p>}
        <p>Sisa karakter: {MAX_TITLE_LENGTH - newNote.title.length}</p>

        <label>
          <input
            style={styles.title}
            type="text"
            value={newNote.title}
            placeholder="Ini adalah judul ..."
            onChange={handleTitleChange}
          />
        </label>

        <br></br>

        <label>
          <textarea
            style={styles.note}
            type="text"
            value={newNote.body}
            placeholder="Tuliskan catatanmu di sini ..."
            onChange={(e) => handleBodyChange(e.target.value)}
          />
        </label>

        <br></br>

        <button style={styles.btn} type="button" onClick={addNote}>
          Buat
        </button>
      </form>
    </div>
  );
};

const styles = {
  center: {
    textAlign: 'center',
  },
  title: {
    width: '500px',
    height: '50px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  note: {
    width: '500px',
    height: '250px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  btn: {
    width: '500px',
    height: '50px',
    borderRadius: '5px',
    marginBottom: '90px',
  },
};

export default NoteForm;
