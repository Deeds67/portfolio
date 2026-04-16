import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBar from "@/components/ui/NavBar";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Your Name",
  description: "Your Name — Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSans.variable}`}>
        <NavBar></NavBar>
        {children}
        <footer className="text-center text-sm text-gray-400 py-8 mt-8">
          Your Name &middot; {new Date().getFullYear()}
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}
