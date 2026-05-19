import "./globals.css";
import style from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={style.Layout}>
          {children}
        </div>
      </body>
    </html>
  );
}
