import txt from "./bio.json";
import styles from "./bio.module.scss";
const Bio = () => {
	const l = navigator.language !== "pl-PL" ? "eng" : "pl";
	return (
		<div className={styles.Bio}>
			<h1>{txt[l].title}</h1>
			<p>{txt[l].txt}</p>
		</div>
	);
};
export default Bio;
