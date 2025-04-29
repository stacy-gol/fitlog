import type React from "react";
import { Box } from "@mui/material";
import styles from "./aboutUs-section.module.css";

const AboutUsSection: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.imageBlock}>
        <img
          src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/Group_2_fnm69e.png"
          alt="О нас"
          className={styles.image}
        />
      </Box>

      <Box className={styles.textBlock}>
        <h1 className={styles.title}>О нас</h1>

        <Box className={styles.textSection}>
          <h2 className={styles.subtitle}>Приложение</h2>
          <p className={styles.description}>
            Идея FitLog возникла из потребности сделать тренировки доступными для людей с сидячей работой. Мы хотели создать приложение, которое будет удобным помощником в вашем телефоне, напоминая о тренировках и помогая легко организовать их, чтобы вы могли заниматься даже в самый загруженный день.
          </p>
        </Box>

        <Box className={styles.textSection}>
          <h2 className={styles.subtitle}>Наша команда</h2>
          <p className={styles.description}>
            Наша команда состоит из людей, которые не только разрабатывают приложение, но и активно занимаются фитнесом. Мы понимаем, как важно поддерживать форму, особенно в условиях сидячей работы, и каждый из нас использует FitLog для того, чтобы оставаться в хорошей физической форме.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsSection;
