"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import styles from "./page.module.css";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("role", value);
      } else {
        params.delete("role");
      }
      router.replace(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Search by job title..."
      defaultValue={searchParams.get("role") ?? ""}
      onChange={handleChange}
    />
  );
}
