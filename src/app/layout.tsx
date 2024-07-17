'use client';

import '../styles/globals.css'
import TopBar from '../components/ui-commons/TopBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
        <TopBar />
        <main className='h-full'>{children}</main>
        <div id="tooltip-root"></div>
      </body>
    </html>
  );
}


