import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import NavBar from "@/components/ui/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre Marais",
  description: "Pierre Marais CV",
  icons: { icon: "/linkedinprofilepic.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4f41e469-2947-48c8-9602-575c66ea4f50"
          strategy="afterInteractive"
        />
        <NavBar></NavBar>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
