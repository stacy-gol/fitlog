import React from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./reviews-section.module.css";
import ReviewCard from "../ReviewCard/review-card";
import { reviews } from "../utils/data";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const ReviewsSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [index, setIndex] = React.useState(0);
  
    const visibleReviews = isMobile
      ? [reviews[index]]
      : [reviews[index], reviews[(index + 1) % reviews.length]];
  
    const handlePrev = () => {
      setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
  
    const handleNext = () => {
      setIndex((prev) => (prev + 1) % reviews.length);
    };
  
    return (
      <Box className={styles.container}>
        <Box className={styles.headerRow}>
          <Box className={styles.textBlock}>
            <h1 className={styles.title}>Отзывы</h1>
            <p className={styles.text}>
              Мы предлагаем полный спектр услуг, чтобы обеспечить вам удобство и
              качество обслуживания.
            </p>
          </Box>
          <Box className={styles.controls}>
            <IconButton onClick={handlePrev}>
              <ArrowBackIosNew className={styles.arrow} />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForwardIos className={styles.arrow} />
            </IconButton>
          </Box>
        </Box>
  
        <Box className={styles.containerReviews}>
          {visibleReviews.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <ReviewCard key={i} item={item} />
          ))}
        </Box>
      </Box>
    );
  };
  
  export default ReviewsSection;