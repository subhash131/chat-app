import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "../providers/authProvider";
import styles from "./layout.module.css";
import Navbar from "../components/common/Navbar";
import SocketProvider from "../context/socketContext/SocketContext";

export const metadata: Metadata = {
  title: "Find Your Sponsor",
  description: "Project By Subhash",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <AuthProvider>
        <SocketProvider>
          <body className={styles.layout}>
            <div className={styles.navbar_container}>
              <Navbar />
            </div>
            <div className={styles.main_container}>{children}</div>
          </body>
        </SocketProvider>
      </AuthProvider>
    </html>
  );
}
