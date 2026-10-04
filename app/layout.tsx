import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeadModalProvider } from "./context/LeadModalContext";
import LeadModal from "@/components/LeadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Great Empire Group | Real Estate & Property in Prayagraj",
  description:
    "The Great Empire Group helps you buy, sell and invest in residential and commercial properties in Prayagraj. Explore verified properties, valuation services and expert real estate assistance.",
  icons: {
    icon: "/tge-favicon.jpeg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <LeadModalProvider>
          {children}
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}
