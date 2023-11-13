import React from 'react';
import { showFormattedDate } from '../utils/data';

const Notes = ({ note, deleteNote, toggleArchive }) => {
  const { id, title, createdAt, body, archived } = note;

  return (
    <li key={id} style={styles.card}>
      <strong style={styles.title}>{title}</strong>
      <p style={styles.createdAt}>{showFormattedDate(createdAt)}</p>
      <p style={styles.body}>{body}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.deleteButton} onClick={() => deleteNote(id)}>
          Delete
        </button>
        <button style={styles.archiveButton} onClick={() => toggleArchive(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </li>
  );
};

const styles = {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: 'auto',
    },
    button: {
      backgroundColor: '#ff0000',
      color: '#fff',
      padding: '8px',
      border: 'none',
      cursor: 'pointer',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    body: {
      marginTop: '8px',
    },
    createdAt: {
      color: '#555',
      marginTop: '8px',
    },
    deleteButton: {
      color: 'red',
      padding: '8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: 'auto',
    },
    archiveButton: {
      color: 'yellow',
      padding: '8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: 'auto',
    },
  };


export default Notes;