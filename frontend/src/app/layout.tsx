import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/MainNavigation";
import TabBar from "@/components/TabBar";
import HeaderNav from "@/components/HeaderNav";

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
      <body className={`${geistSans.className} min-h-screen flex flex-col`}>
        <HeaderNav />
        <main className="p-4 px-6">
          {children}
        </main>
        <TabBar />
      </body>
    </html>
  );
}
