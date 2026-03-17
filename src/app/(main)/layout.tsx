import { ReactNode } from 'react';
import Sidebar from './_components/Sidebar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAF9]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 min-h-screen overflow-x-hidden lg:ml-0">
        <div className="p-4 sm:p-6 lg:p-8 xl:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
