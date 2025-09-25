import type { Metadata } from "next";
import "@/styles/styles.css";
import { inter } from "@/styles/font";

export const metadata: Metadata = {
  title: "HELLNAW",
  description: "We make short-form videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}