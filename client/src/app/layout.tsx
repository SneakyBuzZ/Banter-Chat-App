import type { Metadata } from "next";
import "@/styles/globals.css";
import { dm_sans } from "@/lib/fonts";
import AuthProvider from "@/components/shared/AuthProvider";

export const metadata: Metadata = {
  title: "Banter",
  description: "Banter is a chat applicaiton",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.svg" sizes="any" />
      </head>
      <body className={`antialiased ${dm_sans.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
