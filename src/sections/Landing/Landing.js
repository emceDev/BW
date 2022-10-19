import styles from "./landing.module.scss";
export const Landing = (props) => {
	return (
		<div
			className={styles.Landing}
			onMouseEnter={(e) => props.report(e.target, e.type)}
		>
			<div>
				<img></img>
				<h1>MATEUSZ CISŁO</h1>
				<h2>STABILITY PASSION PROGRAMMING</h2>
			</div>
		</div>
	);
};
