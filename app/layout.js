import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftSell - Turn Unused Software Licenses Into Cash",
  description:
    "SoftSell helps businesses recover value from their unused or underutilized software licenses through our secure and transparent resale platform.",
  keywords: "software resale, license resale, software license marketplace, sell unused licenses",
  openGraph: {
    title: "SoftSell - Turn Unused Software Licenses Into Cash",
    description:
      "SoftSell helps businesses recover value from their unused or underutilized software licenses through our secure and transparent resale platform.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        width: 800,
        height: 600,
        alt: "SoftSell - Software License Resale",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
