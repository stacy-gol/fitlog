import type React from "react";
import { Box, Button } from "@mui/material";
import styles from "./main-section.module.css";

const MainSection: React.FC = () => {
	return (
		<Box className={styles.container}>
			{/* Desktop */}
			<Box className={styles.imagesWrapper}>
				<img
					src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745848034/Group_149_1_cjlsws.png"
					alt="Картинка с тренировками"
					className={styles.image}
				/>
			</Box>

			{/* Mobile */}
			<Box className={styles.contentWrapper}>
				<h1 className={styles.title}>Удобный журнал ваших тренировок</h1>
				<h2 className={styles.description}>
					FitLog помогает вам легко записывать и отслеживать ваши тренировки.
					Кроме того, приложение учитывает и анализирует ваше питание, позволяя 
					вам управлять своим здоровьем комплексно. Начните вести учет своих 
					достижений и питания сегодня.
				</h2>
				<Button
					sx={{
						backgroundColor: "#2550b9",
						color: "white",
						padding: "12px 24px",
						borderRadius: "10px",
						fontSize: "16px",
						fontFamily: "Montserrat, sans-serif",
						textTransform: "none",
						"&:hover": {
							backgroundColor: "#1e3e91",
						},
					}}
				>
					Вход на платформу
				</Button>

				{/* Картинка в мобильной версии */}
				<img
					src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/Group_1_aso3dr.png"
					alt="Планка"
					className={styles.mobileImage}
				/>
			</Box>
		</Box>
	);
};

export default MainSection;
