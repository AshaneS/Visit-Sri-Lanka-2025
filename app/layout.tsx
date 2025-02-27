import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// const lato = Lato({
//   subsets: ["latin"],
//   variable: "--font-lato",
//   weight: ["100", "300", "400", "700", "900"],
// });

const public_Sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${public_Sans.className} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
