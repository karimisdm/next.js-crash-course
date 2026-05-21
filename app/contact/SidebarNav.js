"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
    </aside>
  );
}
