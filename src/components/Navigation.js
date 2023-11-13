import React from 'react';

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Notes</h1>
      </div>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Cari catatan..."
          style={styles.searchInput}
        />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    borderBottom: '1px solid white'
  },
  titleContainer: {
    marginLeft: '10px',
  },
  title: {
    color: '#fff',
    margin: 0,
  },
  searchContainer: {
    marginRight: '10px',
  },
  searchInput: {
    padding: '5px',
    width:'300px',
    borderRadius:'5px',
    height: '30px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: '10px',
  },
};

export default Navigation;