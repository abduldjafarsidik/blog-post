import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import style from "./layout.module.scss";
import cn from "classnames";

const figtree = Figtree({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Code Challenge",
  description: "Code Challenge by Synapsis.id",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(figtree.className, style.layout)}>{children}</body>
    </html>
  );
}
