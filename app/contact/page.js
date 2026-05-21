import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Contacts</h1>
        <p className={styles.text}>
          Select a contact from the sidebar to view their details.
        </p>
      </section>
    </div>
  );
}
