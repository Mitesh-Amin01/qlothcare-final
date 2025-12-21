'use client'

import { usePathname } from 'next/navigation';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Hide navbar and footer on dashboard & sys routes
  const hideLayout =
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/dashboard');

  if (hideLayout) {
    // Return only the main content
    return children[1];
  }

  // Return navbar + main + footer
  return <>{children}</>;
}
