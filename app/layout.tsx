import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata } from "../data/siteMetadata";
import { Navbar } from "../components/Navbar";
import  Home  from "./page";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="your-storage-key-theme" // Optional. The default is "theme"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Home />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}