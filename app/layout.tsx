import type { Metadata } from "next";
import "./globals.css";
import { SideMenu } from "./ui/side-menu/side-menu";

export const metadata: Metadata = {
  title: "Filip Popovski - Skyrim Inspired Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <SideMenu />

        <main className="flex-1 px-12">{children}</main>
      </body>
    </html>
  );
}
