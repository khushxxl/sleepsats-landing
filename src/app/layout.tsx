import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepSats — Earn Bitcoin While You Sleep",
  description:
    "Sleep well, earn Bitcoin. SleepSats rewards you with satoshis for maintaining healthy sleep habits.",
  icons: [],
  openGraph: {
    title: "SleepSats — Earn Bitcoin While You Sleep",
    description:
      "Sleep well, earn Bitcoin. SleepSats rewards you with satoshis for maintaining healthy sleep habits.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SleepSats — Earn Bitcoin While You Sleep",
    description:
      "Sleep well, earn Bitcoin. SleepSats rewards you with satoshis for maintaining healthy sleep habits.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
