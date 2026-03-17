import { ReactNode } from 'react';
import Sidebar from './_components/Sidebar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      {/* Sidebar - Collapsible on mobile, fixed on desktop */}
      <Sidebar />
      
      {/* Main Content Area */}
      {/* On mobile: full width with padding for hamburger button */}
      {/* On desktop: offset by sidebar width */}
      <main className="min-h-screen w-full lg:ml-[280px] xl:ml-[320px] transition-all duration-300">
        {/* Extra top padding on mobile for hamburger button, normal on desktop */}
        <div className="pt-16 lg:pt-0 p-4 sm:p-6 lg:p-8 xl:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
