import styles from "./landing.module.scss";
import txt from "./landign.json";
export const Landing = () => {
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	return (
		<div id="Landing" className={styles.Landing}>
			<div>
				<img></img>
				<h1>MATEUSZ CISŁO</h1>
				<h2>{txt[l].sub}</h2>
			</div>
		</div>
	);
};
