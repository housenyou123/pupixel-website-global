import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Pupixel AI - Transform Your Images with AI | Pixelbeat Inc.",
  description: "Pupixel AI is a powerful AI image tool that helps you generate, edit, and enhance images with cutting-edge artificial intelligence technology. By Pixelbeat Inc.",
  keywords: ["AI", "image generation", "image editing", "artificial intelligence", "Pupixel", "Pixelbeat Inc."],
  openGraph: {
    title: "Pupixel AI - Transform Your Images with AI",
    description: "Generate, edit, and enhance images with cutting-edge AI technology. By Pixelbeat Inc.",
    url: "https://pixelbeat.us",
    siteName: "Pupixel AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pupixel AI - Transform Your Images with AI",
    description: "Generate, edit, and enhance images with cutting-edge AI technology. By Pixelbeat Inc.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
