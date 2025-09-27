import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio",
  description: "A modern animated portfolio built with Next.js, Framer Motion, GSAP & Locomotive Scroll",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
