import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FloatingSocials from "@/components/FloatingSocials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ManyGraphix | Networking, Computer Systems & IT Support",
  description: "Reliable computer networking, computer systems and IT support solutions for businesses and individuals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /><FloatingSocials /></body></html>;
}
