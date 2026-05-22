import Image from "next/image";
import Link from "next/link";
import contacts from "../../../mock/contacts";
import SearchInput from "./SearchInput";
import styles from "./page.module.css";

function getUpcomingDays(dateOfBirth) {
  const today = new Date();
  const birthday = new Date(dateOfBirth);
  const next = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (next < today) next.setFullYear(today.getFullYear() + 1);
  return Math.ceil((next - today) / (1000 * 60 * 60 * 24));
}

function formatDate(dateOfBirth) {
  return new Date(dateOfBirth).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
}

const sorted = [...contacts].sort(
  (a, b) => getUpcomingDays(a.dateOfBirth) - getUpcomingDays(b.dateOfBirth)
);

export default async function Birthday({ searchParams }) {
  const { role } = await searchParams;
  const query = role?.toLowerCase() ?? "";

  const filtered = query
    ? sorted.filter((c) => c.role.toLowerCase().includes(query))
    : sorted;

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Birthdays</h1>
        <p className={styles.text}>
          Contacts sorted by upcoming birthday — never miss one.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>All Contacts</h2>
        <SearchInput />
        {filtered.length === 0 ? (
          <p className={styles.empty}>No contacts found for &quot;{role}&quot;.</p>
        ) : (
          <ul className={styles.list}>
            {filtered.map((contact) => {
              const daysLeft = getUpcomingDays(contact.dateOfBirth);
              return (
                <li key={contact.id} className={styles.card}>
                  <Link href={`/contact/${contact.id}`} className={styles.cardLink}>
                    <Image
                      className={styles.avatar}
                      src={contact.image}
                      alt={`${contact.firstName} ${contact.lastName}`}
                      width={56}
                      height={56}
                    />
                    <div className={styles.info}>
                      <span className={styles.name}>
                        {contact.firstName} {contact.lastName}
                      </span>
                      <span className={styles.role}>{contact.role}</span>
                    </div>
                  </Link>
                  <div className={styles.birthdayInfo}>
                    <span className={styles.birthdayDate}>
                      {formatDate(contact.dateOfBirth)}
                    </span>
                    <span className={styles.birthdayBadge}>
                      {daysLeft === 0 ? "Today!" : `${daysLeft}d`}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}
