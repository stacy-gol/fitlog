import type React from "react";
import { Box } from "@mui/material";
import styles from "./advantages-section.module.css";
import { advantage } from "../utils/data";

const AdvantagesSection: React.FC = () => {
	return (
		<Box className={styles.container}>
			<Box className={styles.advantages}>
				<h1 className={styles.title}>Наши преимущества</h1>
				<Box className={styles.grid}>
					{advantage.map((item, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Box key={index} className={styles.card}>
							<img src={item.image} alt={item.text} className={styles.icon} />
							<p className={styles.text}>{item.text}</p>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default AdvantagesSection;
