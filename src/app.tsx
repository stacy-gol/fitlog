import React from 'react';
import Header from './Header/header';
import styles from './app.module.css';
import MainSection from './MainSection/main-section';
import AdvantagesSection from './AdvantagesSection/advantages-section';
import FunctionalitySection from './FunctionalitySection/functionality-section';
import ReviewsSection from './ReviewsSection/reviews-section';
import AboutUsSection from './AboutUsSection/aboutUs-section';
import FooterSection from './Footer/footer';


export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <MainSection/>
      <AdvantagesSection/>
      <FunctionalitySection/>
      <ReviewsSection/>
      <AboutUsSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
