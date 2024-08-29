import type { Metadata } from "next";
import { Inter, Jockey_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });
const jockey = Jockey_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jockey",
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
      <body className={jockey.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
