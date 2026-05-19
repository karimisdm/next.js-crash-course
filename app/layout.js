import "./globals.css";
import style from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={style.Layout}>
          <header className={style.Header}>
            <h1 className={style.Logo}>My Contacts</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
