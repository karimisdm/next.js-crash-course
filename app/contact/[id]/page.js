import Image from "next/image";
import { notFound } from "next/navigation";
import contacts from "../../../mock/contacts";
import styles from "../page.module.css";

export default async function ContactDetail({ params }) {
  const { id } = await params;
  const contact = contacts.find((c) => c.id === Number(id));

  if (!contact) notFound();

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>
          {contact.firstName} {contact.lastName}
        </h1>
        <p className={styles.text}>{contact.role}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Details</h2>
        <div className={styles.card}>
          <Image
            src={contact.image}
            alt={`${contact.firstName} ${contact.lastName}`}
            width={80}
            height={80}
            className={styles.avatarImg}
          />
          <div className={styles.info}>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Name</span>
              <span className={styles.rowValue}>
                {contact.firstName} {contact.lastName}
              </span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Role</span>
              <span className={styles.rowValue}>{contact.role}</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
              <span className={styles.rowLabel}>Email</span>
              <a className={styles.rowLink} href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Phone</span>
              <a className={styles.rowLink} href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </div>
            <div className={styles.divider} />
            <div className={styles.row}>
              <span className={styles.rowLabel}>Address</span>
              <span className={styles.rowValue}>{contact.address}</span>
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>Birthday</span>
              <span className={styles.rowValue}>
                {new Date(contact.dateOfBirth).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
