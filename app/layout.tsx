import type { Metadata } from "next";
import "./globals.css";
import { SideMenu } from "./ui/side-menu/side-menu";
import { NavigationProvider } from "./contexts/NavigationContext";
import { GlobalKeyboardListener } from "./components/global-keyboard-listener";

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
        <NavigationProvider>
          <GlobalKeyboardListener />
          <SideMenu />
          <main className="flex-1 px-12">{children}</main>
        </NavigationProvider>
      </body>
    </html>
  );
}
