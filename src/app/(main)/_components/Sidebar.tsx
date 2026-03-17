'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  RefreshCw,
  FileText,
  Edit3,
  Menu,
  ChevronUp,
  ChevronDown,
  LogOut,
  MessageCircle,
  Layers,
  HelpCircle,
  X,
  BookOpen,
  Upload,
} from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface SubNavItem {
  name: string;
  href: string;
}

const mainNavigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
];

const sectionNavigation: NavItem[] = [
  { name: 'Text to Speech', href: '/text-to-speech', icon: RefreshCw },
  { name: 'Reading Assistant', href: '/reading-assistant', icon: FileText },
  { name: 'Writing Assistant', href: '/writing-assistant', icon: Edit3 },
  { name: 'Course Materials', href: '/materials', icon: Upload },
];

const studyBuddySubmenu: SubNavItem[] = [
  { name: 'Chat Assistant', href: '/chat-assistant' },
  { name: 'Flashcards', href: '/flashcards' },
  { name: 'Quizzes', href: '/quizzes' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studyBuddyOpen, setStudyBuddyOpen] = useState(true);
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isStudyBuddyActive = studyBuddySubmenu.some(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          type="button"
          className="p-2 rounded-md bg-[#4A8B5C] shadow-md text-white"
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
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#4A8B5C] transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <path
                  d="M20 5C20 5 12 10 12 18V28L20 35L28 28V18C28 10 20 5 20 5Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M20 8C20 8 14 12 14 18V26L20 31L26 26V18C26 12 20 8 20 8Z"
                  fill="#4A8B5C"
                />
                <circle cx="20" cy="18" r="3" fill="white" />
                <path
                  d="M17 22C17 22 18 24 20 24C22 24 23 22 23 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 28C8 28 10 26 14 28"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M32 28C32 28 30 26 26 28"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">LexiAssist</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
            {/* Dashboard */}
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive('/dashboard')
                  ? 'bg-white text-[#4A8B5C]'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Home size={20} />
              Dashboard
            </Link>

            {/* Divider */}
            <div className="my-4 border-t border-white/20" />

            {/* Section Title */}
            <div className="px-4 py-2 text-xs font-medium text-white/60 uppercase tracking-wider">
              Section Title
            </div>

            {/* Main Nav Items */}
            {sectionNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-white text-[#4A8B5C]'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}

            {/* StudyBuddy Dropdown */}
            <div className="mt-2">
              <button
                onClick={() => setStudyBuddyOpen(!studyBuddyOpen)}
                className={`flex items-center justify-between w-full gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                  isStudyBuddyActive
                    ? 'bg-white text-[#4A8B5C]'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Menu size={20} />
                  StudyBuddy
                </div>
                {studyBuddyOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {/* Submenu */}
              {studyBuddyOpen && (
                <div className="mt-1 ml-2 space-y-1">
                  {studyBuddySubmenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all ml-6 ${
                        isActive(subItem.href)
                          ? 'bg-white text-[#4A8B5C]'
                          : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Bottom section - User Profile */}
          <div className="px-4 py-4 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-white/30">
                  <AvatarImage
                    src={user?.avatar}
                    alt={user?.name || 'User'}
                  />
                  <AvatarFallback className="bg-white/20 text-white">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {user?.name || 'Alison Eyo'}
                  </span>
                  <span className="text-xs text-white/70">
                    {user?.email || 'ails@lexiassist'}
                  </span>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
