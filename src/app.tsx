import React from 'react';
import Header from './Header/header';
import styles from './app.module.css';


export function App() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default App;
