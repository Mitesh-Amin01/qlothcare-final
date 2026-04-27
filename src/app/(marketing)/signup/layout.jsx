export const metadata = {
  title: "Signup | Qlothcare - Premium Garment Care",
  description: "Join Qlothcare today to experience the future of premium garment care. Automated tracking, expert handling, and doorstep delivery at your service.",
  openGraph: {
    title: "Signup | Qlothcare",
    description: "Initialize your Qlothcare account and gain access to the premium garment care vault.",
  },
};

export default function SignupLayout({ children }) {
  return (
    <section className="bg-[#050505]">
      {children}
    </section>
  );
}
