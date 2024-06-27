'use client';

import TabNavigation from '@/components/TabNavigation';
import TopBar from "@/components/TopBar";

const tabs = [
  { name: 'Empresa', href: '#', current: true },
  { name: 'Productos', href: '#', current: false },
  { name: 'DTEs', href: '#', current: false },
];

export default function Home() {
  return (
    <main>
      <TopBar />
    </main>
  );
}
