import { ReactNode } from 'react';
import Sidebar from './_components/Sidebar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F8FAF9]">
      {/* Sidebar - Fixed width as per design */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 ml-0 lg:ml-0 overflow-auto">
        <div className="p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
