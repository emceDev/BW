import styles from "./contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h1>Kontakt</h1>
      <div>
        <h2>Email: mcislo.dev@gmail.com</h2>
        <h2>
          GitHub:{" "}
          <a href="https://github.com/emceDev" target="_blank">
            emceDev
          </a>
        </h2>

        <h2>Smartphone: 518 765 184</h2>
      </div>
    </div>
  );
};
export default Contact;
