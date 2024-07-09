import type { Metadata } from "next";
import { inter, GoBold } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Dom, Meu Bico",
  description: "Meu Dom, Meu Bico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${GoBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
