import "./globals.css";

import Header from "@/components/header";
import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";

const chakra = Chakra_Petch({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
