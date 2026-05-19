import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>About the App</h1>
        <p className={styles.text}>
          This is a Next.js crash course application built to demonstrate the
          core features of Next.js, including file-based routing, server
          components, layouts, and CSS modules. It serves as a hands-on
          learning project for developers getting started with Next.js.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>How It Works</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>File-based Routing</strong>
            <p className={styles.cardText}>
              Each folder inside <code className={styles.code}>app/</code> becomes
              a route. For example,{" "}
              <code className={styles.code}>app/about/page.js</code> maps to{" "}
              <code className={styles.code}>/about</code>.
            </p>
          </div>
          <div className={styles.card}>
            <strong className={styles.cardTitle}>Layouts</strong>
            <p className={styles.cardText}>
              The <code className={styles.code}>layout.js</code> file wraps all
              pages with shared UI like headers or navigation.
            </p>
          </div>
          <div className={styles.card}>
           
            <strong className={styles.cardTitle}>Server Components</strong>
            <p className={styles.cardText}>
              By default, components in Next.js are server-rendered, which
              improves performance and SEO.
            </p>
          </div>
          <div className={styles.card}>
            
            <strong className={styles.cardTitle}>CSS Modules</strong>
            <p className={styles.cardText}>
              Styles are scoped per component using{" "}
              <code className={styles.code}>.module.css</code> files, preventing
              naming conflicts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
