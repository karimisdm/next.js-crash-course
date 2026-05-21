"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import contacts from "../../mock/contacts";
import styles from "./layout.module.css";

const links = [
  { href: "/contact", label: "Contact" },
  { href: "/contact/birthday", label: "🎂 Birthdays" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebarTitle}>Pages</p>
      <nav>
        <ul className={styles.sidebarList}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.sidebarLink} ${pathname === href ? styles.activeLink : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {pathname === "/contact" && (
        <>
          <div className={styles.sidebarDivider} />
          <p className={styles.sidebarTitle}>Contacts</p>
          <ul className={styles.contactList}>
            {contacts.map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <Image
                  src={contact.image}
                  alt={`${contact.firstName} ${contact.lastName}`}
                  width={32}
                  height={32}
                  className={styles.contactAvatar}
                />
                <span className={styles.contactName}>
                  {contact.firstName} {contact.lastName}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
