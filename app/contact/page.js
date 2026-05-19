import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.text}>
          Have a question, suggestion, or just want to say hi? Fill out the form
          below and we will get back to you as soon as possible.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Send a Message</h2>
        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
            />
          </div>
          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
