import "./globals.css";
import style from "./layout.module.css";
import NavBar from "./NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={style.Layout}>
          <header className={style.Header}>
            <h1 className={style.Logo}>My Contacts</h1>
            <NavBar />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
