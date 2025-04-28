import type React from "react";
import { Box } from "@mui/material";
import styles from "./advantages-section.module.css";

const AdvantagesSection: React.FC = () => {
	return (
		<Box className={styles.container}>
			<Box className={styles.advantages}>
			<h1 className={styles.title}>Наши преимущества</h1>
			<img
					src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/Features_jnrvsw.png"
					alt="преимущества ПК"
					className={styles.advantagesImage}
				/>
			<img
					src="https://res.cloudinary.com/dfeszdhhf/image/upload/v1745852338/Features_1_n32pe3.png"
					alt="преимущества моб"
					className={styles.advantagesMobileImage}
				/>
			</Box>
		</Box>
	);
};

export default AdvantagesSection;
