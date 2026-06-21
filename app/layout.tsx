import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBSE - Senior School Certificate Examination Results 2026",
  description: "CBSE Result Portal Replica"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
