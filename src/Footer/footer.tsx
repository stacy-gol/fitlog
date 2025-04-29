import type React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./footer.module.css";

const FooterSection: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.navigation}>
        <h2 className={styles.navTitle}>Навигация</h2>
        <ul className={styles.navLinks}>
          <li>Преимущества</li>
          <li>Функционал</li>
          <li>Отзывы</li>
          <li>О нас</li>
        </ul>
      </Box>

      <Box className={styles.bottomBlock}>
      <Typography
					variant="h6"
					className={styles.logo}
					sx={{
						color: "#2550B9",
						fontSize: "23px",
						fontWeight: "bold",
						fontFamily: "Montserrat, sans-serif",
					}}
				>
					FITLOG
				</Typography>
        <div className={styles.backToTop}>
          <img src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745904502/Vector_lgp9wu.png" alt="back to top" className={styles.backToTopImage}/>
          <span>Вернуться на верх</span>
          <img src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745904502/Vector_lgp9wu.png" alt="back to top" className={styles.backToTopImage}/>
        </div>
        <div className={styles.copyright}>
          © 2024 FitLog - Все права защищены
        </div>
      </Box>
    </Box>
  );
};

export default FooterSection;
