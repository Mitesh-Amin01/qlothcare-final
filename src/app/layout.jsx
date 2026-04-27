import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Qlothcare",
  description: "Welcome to Qlothcare - Premium Web Experience",
  icons: {
    icon: "/logo/logo.png",
    apple: "/logo/logo.png",
  },
  openGraph: {
    title: "Qlothcare",
    description: "Welcome to Qlothcare - Premium Web Experience",
    siteName: "Qlothcare",
    images: [
      {
        url: "/logo/logo.png",
        width: 800,
        height: 600,
        alt: "Qlothcare Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlothcare",
    description: "Welcome to Qlothcare - Premium Web Experience",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
