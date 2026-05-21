import SidebarNav from "./SidebarNav";
import styles from "./layout.module.css";

export default function ContactLayout({ children }) {
  return (
    <div className={styles.layout}>
      <SidebarNav />
      <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
    </div>
  );
}
