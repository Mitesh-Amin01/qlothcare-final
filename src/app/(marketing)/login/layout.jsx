export const metadata = {
  title: "Login | Qlothcare - Premium Garment Care",
  description: "Securely access your Qlothcare account to track your orders, manage your bookings, and experience premium garment care logistics.",
  openGraph: {
    title: "Login | Qlothcare",
    description: "Enter the Qlothcare vault to manage your premium laundry and dry cleaning services.",
  },
};

export default function LoginLayout({ children }) {
  return (
    <section className="bg-[#050505]">
      {children}
    </section>
  );
}
