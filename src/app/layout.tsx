import type { Metadata } from "next";

import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "KasiCareer Connect | Soweto AI Launchpad",
  description: "A Codex-ready starter app for the Boundless Soweto AI App Development Challenge 2026."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
