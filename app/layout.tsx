import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { DialRoot } from "dialkit";
import "dialkit/styles.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Fixa — Plan your day without overwhelm",
  description:
    "Fixa is a simple ADHD friendly planner that turns your thoughts into a clear plan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV !== "production" && <DialRoot />}
      </body>
    </html>
  );
}
