import type { Metadata, Viewport } from "next";
import "./globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";


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
      className={`antialiased`}
    >
      <body className={`flex flex-col h-[88vh]`}>
         <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      {children}
    </GoogleOAuthProvider>

      </body>
    </html>
  );
}
