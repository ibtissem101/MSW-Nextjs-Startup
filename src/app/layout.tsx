import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StartMockWorker } from "./components/mockServer";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackApp - Next.js Starter",
  description: "Production-ready Next.js starter for hackathons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <StartMockWorker>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </StartMockWorker>
      </body>
    </html>
  );
}
