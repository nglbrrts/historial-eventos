'use client';

import '@/app/globals.css'
import TopBar from '../components/TopBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-50 dark:bg-neutral-900">
        <TopBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
