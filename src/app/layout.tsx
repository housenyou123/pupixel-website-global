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
  title: "pixelbeat - Share Real Life Stories | PIXELBEAT PTE. LTD.",
  description: "pixelbeat is building AI-powered tools for capturing and sharing authentic moments. By PIXELBEAT PTE. LTD.",
  keywords: ["AI", "story sharing", "real life stories", "authentic moments", "pixelbeat", "PIXELBEAT PTE. LTD."],
  openGraph: {
    title: "pixelbeat - Share Real Life Stories",
    description: "AI-powered tools for capturing and sharing authentic moments. By PIXELBEAT PTE. LTD.",
    url: "https://pixelbeat.us",
    siteName: "pixelbeat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "pixelbeat - Share Real Life Stories",
    description: "AI-powered tools for capturing and sharing authentic moments. By PIXELBEAT PTE. LTD.",
  },
  icons: {
    icon: "/icon.svg",
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
