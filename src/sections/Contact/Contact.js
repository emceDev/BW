import styles from "./contact.module.scss";
const Contact = () => {
	return (
		<div className={styles.Contact}>
			<h1>Contact</h1>
			<div>
				<h2>
					GitHub:{" "}
					<a href="https://github.com/emceDev" target="_blank">
						emceDev
					</a>
				</h2>
				<h2>Email: emce.dev@gmail.com</h2>
			</div>
		</div>
	);
};
export default Contact;
