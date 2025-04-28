import type React from "react";
import { Box } from "@mui/material";
import styles from "./functionality-card.module.css";
import { FunctionalityItem } from "../utils/data";

interface FunctionalityCardProps {
  item: FunctionalityItem;
}

const FunctionalityCard: React.FC<FunctionalityCardProps> = ({ item }) => {
  return (
    <Box className={styles.container}>
      <img
        src={item.image}
        alt="Картинка с функционалом"
        className={styles.image}
      />
      <h1 className={styles.title}>{item.text}</h1>
    </Box>
  );
};

export default FunctionalityCard;
