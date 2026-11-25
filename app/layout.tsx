import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingSocials from "@/components/FloatingSocials";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ManyGraphix | Networking, Computer Systems & IT Support",
  description:
    "Reliable computer networking, computer systems and IT support solutions for businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}
