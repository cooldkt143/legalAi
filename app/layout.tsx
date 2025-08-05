import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // optional but recommended
});

export const metadata: Metadata = {
  title: "LegalAI FIR Assistant",
  description:
    "Your intelligent legal companion for FIR assistance and legal guidance",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="legalai-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
