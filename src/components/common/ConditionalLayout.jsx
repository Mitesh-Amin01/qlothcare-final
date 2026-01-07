'use client'

import { usePathname } from 'next/navigation';

export default function ConditionalLayout({ navbar, footer, children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/dashboard');

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      {navbar}
      {children}
      {footer}
    </>
  );
}
