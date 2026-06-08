import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>About My Contacts</h1>
        <p className={styles.text}>
          My Contacts is a personal contact management app where you can browse
          profiles, view full contact details, and keep track of upcoming
          birthdays — all in one place.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>What You Can Do</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>Browse Contacts</strong>
            <p className={styles.cardText}>
              See all your contacts listed in the sidebar. Click any name to
              open their full profile with details like email, phone, and
              address.
            </p>
          </div>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>View Profiles</strong>
            <p className={styles.cardText}>
              Each contact has a dedicated page showing their name, role, email,
              phone number, address, and date of birth.
            </p>
          </div>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>Track Birthdays</strong>
            <p className={styles.cardText}>
              The Birthdays page lists all contacts sorted by their upcoming
              birthday so you never miss an important date.
            </p>
          </div>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>Search by Role</strong>
            <p className={styles.cardText}>
              On the Birthdays page you can filter contacts by job title to
              quickly find everyone in a specific role.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
