import type React from "react";
import { Box } from "@mui/material";
import styles from "./review-card.module.css";
// biome-ignore lint/style/useImportType: <explanation>
import { ReviewItem } from "../utils/data";

interface ReviewCardProps {
  item: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.header}>
        <img className={styles.avatar} src={item.avatar} alt="review avatar"/>
        <div>
          <h2 className={styles.name}>{item.name}</h2>
          <p className={styles.occupation}>{item.occupation}</p>
        </div>
      </Box>
      <img src={item.stars} alt="Оценка" className={styles.stars} />
      <p className={styles.review}>{item.review}</p>
    </Box>
  );
};

export default ReviewCard;
