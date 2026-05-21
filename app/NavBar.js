"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./layout.module.css";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? style.activeLink : ""}
          >
            Contacts
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? style.activeLink : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
