import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import NavBar from "@/components/ui/NavBar";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

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
      <body className={`${inter.className} ${dmSans.variable}`}>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4f41e469-2947-48c8-9602-575c66ea4f50"
          strategy="afterInteractive"
        />
        <NavBar></NavBar>
        {children}
        <footer className="text-center text-sm text-gray-400 py-8 mt-8">
          Pierre Marais &middot; {new Date().getFullYear()}
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
