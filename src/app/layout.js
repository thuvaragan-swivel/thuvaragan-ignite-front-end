// src/app/layout.js or src/pages/_app.js

import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/app/components/ClientProviders";
import "bootstrap/dist/css/bootstrap.min.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Management System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
