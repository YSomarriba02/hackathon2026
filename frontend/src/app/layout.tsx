import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TabBar from "@/components/TabBar";
import HeaderNav from "@/components/HeaderNav";
import TabManager from "@/components/TabManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conecta Emprende",
  description: "Plataforma móvil de subastas",
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`flex flex-col h-screen bg-background`}>
        {children}
      </body>
    </html>
  );
}
