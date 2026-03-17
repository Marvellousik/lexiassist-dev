'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import {
  Volume2,
  FileText,
  Edit3,
  MessageSquare,
  Layers,
  HelpCircle,
  Mic,
  File,
  Clock,
  ArrowRight,
} from 'lucide-react';

// Tool Card Component
interface ToolCardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  href: string;
}

function ToolCard({ title, description, bgColor, icon, href }: ToolCardProps) {
  return (
    <Link href={href}>
      <div 
        className="h-[220px] rounded-2xl overflow-hidden relative cursor-pointer group transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              {icon}
            </div>
            
            {/* Text */}
            <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
              <h3 className="font-semibold text-[#272a28] text-xl md:text-2xl leading-tight">
                {title}
              </h3>
              <p className="text-[#555c56] text-sm leading-relaxed">
                {description}
              </p>
              <div className="flex items-center gap-1 text-[#3C8350] text-sm font-medium mt-1 group-hover:gap-2 transition-all">
                Get Started <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// File Item Component
interface FileItemProps {
  title: string;
}

function FileItem({ title }: FileItemProps) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 hover:bg-white/50 rounded-lg transition-colors cursor-pointer">
      <div className="w-6 h-6 flex-shrink-0">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path 
            d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" 
            fill="url(#fileGradient)"
          />
          <defs>
            <linearGradient id="fileGradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#89CFF0" />
              <stop offset="1" stopColor="#3C8350" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-semibold text-sm text-black/60 truncate">
        {title}
      </p>
    </div>
  );
}

// Main Dashboard Page
export default function DashboardPage() {
  const { user } = useAuthStore();

  const recentFiles = [
    'Ch1_APUSH_Cornell_Note.docx',
    'Macbeth_Mnemonic.docx',
    'Speech_Practice.mp3',
    'Biology_Flashcards.pdf',
  ];

  const tools = [
    {
      title: 'Text to Speech',
      description: 'Upload a file and LexiAssist will read it out to you',
      bgColor: 'rgba(64,123,255,0.25)',
      icon: <Volume2 size={32} className="text-blue-500" />,
      href: '/text-to-speech',
    },
    {
      title: 'Reading Assistant',
      description: 'Get support in understanding texts better',
      bgColor: 'rgba(64,191,145,0.25)',
      icon: <FileText size={32} className="text-green-500" />,
      href: '/reading-assistant',
    },
    {
      title: 'Writing Assistant',
      description: 'Enhance your writing with AI-powered suggestions',
      bgColor: 'rgba(255,193,7,0.25)',
      icon: <Edit3 size={32} className="text-amber-500" />,
      href: '/writing-assistant',
    },
    {
      title: 'StudyBuddy',
      description: 'Create flashcards and mnemonics to study smarter',
      bgColor: 'rgba(126,87,194,0.25)',
      icon: <MessageSquare size={32} className="text-purple-500" />,
      href: '/chat-assistant',
    },
  ];

  const quickAccess = [
    { title: 'Chat Assistant', icon: MessageSquare, href: '/chat-assistant', color: 'bg-purple-100 text-purple-600' },
    { title: 'Flashcards', icon: Layers, href: '/flashcards', color: 'bg-blue-100 text-blue-600' },
    { title: 'Quizzes', icon: HelpCircle, href: '/quizzes', color: 'bg-green-100 text-green-600' },
    { title: 'Voice Input', icon: Mic, href: '/writing-assistant', color: 'bg-amber-100 text-amber-600' },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="font-semibold text-[#272a28] text-2xl md:text-3xl leading-tight mb-1">
            Hello, {user?.name?.split(' ')[0] || 'Student'}! 👋
          </h1>
          <p className="text-[#555c56] text-base md:text-lg">
            Pick a tool to get started with
          </p>
        </div>
        
        {/* Quick Access Pills */}
        <div className="flex flex-wrap gap-2">
          {quickAccess.map((item) => (
            <Link key={item.title} href={item.href}>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${item.color} hover:opacity-80 transition-opacity`}>
                <item.icon size={16} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Study Streak', value: '7 days', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50' },
          { label: 'Hours Studied', value: '24.5', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Quizzes Taken', value: '12', icon: HelpCircle, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Flashcards', value: '156', icon: Layers, color: 'text-green-500', bg: 'bg-green-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Files Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-[#272a28] text-xl">
            Continue from where you left off
          </h2>
          <Link href="/materials" className="text-[#3C8350] text-sm font-medium hover:underline flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-[#f5f5f5] rounded-xl p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {recentFiles.map((file) => (
              <FileItem key={file} title={file} />
            ))}
          </div>
        </div>
      </div>

      {/* Course Materials Preview */}
      <div className="bg-gradient-to-r from-[#3C8350]/5 to-[#3C8350]/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#3C8350] rounded-xl flex items-center justify-center">
              <File size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[#272a28] text-lg">Course Materials Library</h3>
              <p className="text-[#555c56] text-sm">Upload and organize all your study materials</p>
            </div>
          </div>
          <Link href="/materials">
            <button className="bg-[#3C8350] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2d6340] transition-colors">
              Open Library
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
