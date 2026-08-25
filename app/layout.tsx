import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SAKFLY Studio — Create, Generate, and Innovate with AI",
    template: "%s | SAKFLY Studio",
  },
  description:
    "SAKFLY Studio is your complete AI creation platform. Generate text, images, voice, and music using the power of Google Vertex AI in one powerful workspace.",
  keywords: [
    "SAKFLY Studio",
    "AI platform",
    "AI image generator",
    "AI voice generator",
    "AI music generator",
    "Vertex AI",
    "Gemini",
    "Imagen",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SAKFLY Studio — Create, Generate, and Innovate with AI",
    description:
      "Generate text, images, voice, and music using the power of Google Vertex AI in one powerful workspace.",
    siteName: "SAKFLY Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAKFLY Studio — Create, Generate, and Innovate with AI",
    description:
      "Generate text, images, voice, and music using the power of Google Vertex AI in one powerful workspace.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className={`${inter.className} min-h-screen bg-base font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
