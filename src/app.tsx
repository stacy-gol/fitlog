import React from 'react';
import Header from './Header/header';
import styles from './app.module.css';
import MainSection from './MainSection/main-section';
import AdvantagesSection from './AdvantagesSection/advantages-section';


export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <MainSection/>
      <AdvantagesSection/>
    </div>
  );
}

export default App;
