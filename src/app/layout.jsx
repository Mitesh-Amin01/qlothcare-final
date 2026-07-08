import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />


const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "Qlothcare",
  description: "Welcome to Qlothcare - Premium Web Experience",
  icons: {
    icon: "/logo/company_logo.png",
    apple: "/logo/company_logo.png",
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
        <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
