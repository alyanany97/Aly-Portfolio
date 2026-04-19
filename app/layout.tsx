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
  title: "Aly Anany — Computer Engineering",
  description:
    "Portfolio of Aly Anany — Computer Engineering student at the University of Guelph specializing in AI/ML, Cloud, and Robotics.",
  keywords: [
    "Aly Anany",
    "Computer Engineering",
    "AI",
    "Machine Learning",
    "Cloud",
    "Azure",
    "Robotics",
    "University of Guelph",
  ],
  authors: [{ name: "Aly Anany" }],
  openGraph: {
    title: "Aly Anany — Computer Engineering",
    description: "Portfolio of Aly Anany — AI/ML, Cloud, and Robotics engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        {/*
          This script runs before React loads — it reads localStorage and
          applies "dark" to <html> immediately, preventing a white flash
          on page load when dark mode is saved.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
