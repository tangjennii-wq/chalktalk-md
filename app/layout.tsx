import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChalkTalk MD",
  description: "Help every attending teach like a master educator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
