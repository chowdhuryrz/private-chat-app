import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "../components/providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ephemeral - Self-Destructing Chat App",
  description:
    "A private, self-destructing chat room application built with Next.js and Upstash. Create secure chat rooms with unique identities, send real-time messages, and destroy all conversation history with a single action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${jetbrainsMono.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
