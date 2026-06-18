import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CyberWarrior Forge | MVForge",
  description: "ForgeWorks & AuditForge — Secure rental websites and professional security audits. Technical mastery for self-reliant business owners.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} antialiased dark`}>
      <body className="min-h-screen bg-[#0a0a0c] text-[#e5e7eb]">
        {children}
      </body>
    </html>
  );
}
