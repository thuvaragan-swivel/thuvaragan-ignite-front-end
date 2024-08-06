import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/app/components/organisms/ClientProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Management System", // Title for the application.
  description: "", // Description for the application.
};

// Root layout component for the application.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}

// Defining PropTypes for the layout component.
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
