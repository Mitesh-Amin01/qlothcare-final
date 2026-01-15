import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ConditionalLayout from "@/components/common/ConditionalLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConditionalLayout navbar={<Navbar />} footer={<Footer />}>
          <main>{children}</main>
        </ConditionalLayout>
      </body>
    </html>
  );
}
