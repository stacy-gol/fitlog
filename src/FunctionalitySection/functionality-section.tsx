import type React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./functionality-section.module.css";
import FunctionalityCard from "../FunctionalityCard/functionality-card";
import { functionality } from "../utils/data"; 

const FunctionalitySection: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const displayedItems = isMobile ? [functionality[1]] : functionality;

	return (
		<Box className={styles.container}>
			<Box className={styles.advantages}>
				<h1 className={styles.title}>Функционал</h1>
				<p className={styles.text}>
					Наша команда предлагает удобный учет тренировок, анализ прогресса и контроль питания для ваших лучших результатов
				</p>
				<Box className={styles.containerFunctionality}>
					{displayedItems.map((item, index) => (
						<FunctionalityCard key={index} item={item} />
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default FunctionalitySection;

