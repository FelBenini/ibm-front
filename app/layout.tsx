import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkTheme from "./DarkTheme";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Livro Demo IBM Bootcamp",
  description: "Projeto de exercício para os alunos do Bootcamp da IBM feito por Felipe Benini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkTheme>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </DarkTheme>
  );
}
