import type { Metadata } from "next";
import "../components/styles/globals.css";

export const metadata: Metadata = {
  title: "SAJohnson",
  description: "Portfolio of Trimtab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lcx1qbm.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
    </>
  );
}