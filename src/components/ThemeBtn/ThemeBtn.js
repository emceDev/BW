import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./themeBtn.module.scss";
export const ThemeBtn = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div
			id="ThemeBtn"
			className={`${styles.ThemeBtn} ${styles[theme]}`}
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		></div>
	);
};
