import type { Metadata } from "next";
import "@/styles/globals.css";
import { dm_sans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Banter",
  description: "Banter is a chat applicaiton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.svg" sizes="any" />
      </head>
      <body className={`antialiased ${dm_sans.className}`}>{children}</body>
    </html>
  );
}
