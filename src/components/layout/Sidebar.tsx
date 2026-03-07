'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  Brain,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Study', href: '/study', icon: BookOpen },
  { name: 'Quiz', href: '/quiz', icon: Brain },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

const bottomNavigation = [
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();

  // Don't show sidebar on auth pages
  if (pathname === '/login' || pathname === '/register' || pathname === '/') {
    return null;
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          type="button"
          className="p-2 rounded-md bg-white shadow-md text-slate-600 hover:text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo placeholder - replace with your company asset tomorrow */}
          <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-100">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">LexiAssist</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom section */}
          <div className="px-4 py-4 border-t border-slate-100 space-y-1">
            {bottomNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}

            {/* User info & Logout */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              {user && (
                <div className="px-4 py-2 mb-2">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors"
              >
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
