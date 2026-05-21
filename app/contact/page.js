import Link from "next/link";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <p className={styles.sidebarTitle}>Pages</p>
        <nav>
          <ul className={styles.sidebarList}>
            <li>
              <Link href="/contact" className={styles.sidebarLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact/birthday" className={styles.sidebarLink}>
                🎂 Birthdays
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.text}>
          Want to get in touch? Here are the details of the person behind this
          project.Want to get in touch? Here are the details of the person behind this
          project.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Person Details</h2>
        <div className={styles.card}>
          <div className={styles.avatar}>JD</div>
          <div className={styles.info}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Name</span>
              <span className={styles.rowValue}>John Doe</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Role</span>
              <span className={styles.rowValue}>Full-Stack Developer</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
              <span className={styles.rowLabel}>Email</span>
              <a className={styles.rowLink} href="mailto:john@example.com">
                john@example.com
              </a>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Phone</span>
              <a className={styles.rowLink} href="tel:+11234567890">
                +1 (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
