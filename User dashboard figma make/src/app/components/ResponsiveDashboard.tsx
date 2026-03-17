import { useState } from "react";
import { Menu, X, Settings, Moon } from "lucide-react";
import svgPaths from "../../imports/svg-k5p2zx3dne";
import imgFrame20 from "figma:asset/249e9d98a5abcf88fcd712722ce3906ca8dc0464.png";
import imgFrame21 from "figma:asset/a2e869a0185ffbee2044f1f3a5f1bfd26bbeae29.png";
import imgFrame22 from "figma:asset/378528d2f052d6b62408ef943cf2c2ae284f0713.png";
import imgFrame23 from "figma:asset/d980f328c5df0f297c1107ad61da288fddaa2128.png";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

function MenuItem({ icon, text, active, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-3 rounded-full w-full transition-colors ${
        active
          ? "bg-[#3C8350] text-white"
          : "text-[#272a28] hover:bg-gray-100"
      }`}
    >
      <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
      <span className="font-['Roboto',sans-serif] font-medium text-[14px]">
        {text}
      </span>
    </button>
  );
}

type ToolCardProps = {
  title: string;
  description: string;
  bgColor: string;
  bgImage: string;
  illustration: React.ReactNode;
};

function ToolCard({ title, description, bgColor, bgImage, illustration }: ToolCardProps) {
  return (
    <div className="h-[242px] overflow-clip relative rounded-lg flex-1 min-w-[280px] md:min-w-[320px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-lg"
      >
        <div
          className="absolute inset-0 rounded-lg"
          style={{ backgroundColor: bgColor }}
        />
        <div
          className="absolute bg-size-[56px_98px] bg-top-left inset-0 opacity-8 rounded-lg"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
          <div className="flex-shrink-0">{illustration}</div>
          <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
            <h3 className="font-['Roboto',sans-serif] font-semibold text-[#272a28] text-[24px] leading-[1.2]">
              {title}
            </h3>
            <p className="font-['Roboto',sans-serif] font-normal text-[#555c56] text-[14px] leading-[1.45]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type FileItemProps = {
  title: string;
};

function FileItem({ title }: FileItemProps) {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="w-6 h-6 flex-shrink-0">
        <svg
          className="w-full h-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <path
            d={svgPaths.p20ebc00}
            fill="url(#paint0_linear_file)"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_file"
              x1="12"
              x2="12"
              y1="2.25"
              y2="21.75"
            >
              <stop stopColor="#89CFF0" />
              <stop offset="1" stopColor="#3C8350" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="font-['Roboto',sans-serif] font-semibold text-[14px] text-[rgba(0,0,0,0.6)] truncate">
        {title}
      </p>
    </div>
  );
}

export default function ResponsiveDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { icon: <div className="w-4 h-4 bg-[#3C8350] rounded" />, text: "Dashboard" },
    { icon: <div className="w-4 h-4 bg-gray-400 rounded" />, text: "Text to Speech" },
    { icon: <div className="w-4 h-4 bg-gray-400 rounded" />, text: "Reading Assistant" },
    { icon: <div className="w-4 h-4 bg-gray-400 rounded" />, text: "Writing Assistant" },
    { icon: <div className="w-4 h-4 bg-gray-400 rounded" />, text: "StudyBuddy" },
  ];

  const recentFiles = [
    "Ch1_APUSH_Cornell_Note.docx",
    "Macbeth_Mnemonic.docx",
    "Speech_Practice.mp3",
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col relative">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 relative z-50 bg-white">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center gap-2">
          <h1 className="font-['Roboto',sans-serif] font-bold text-[20px] text-[#3C8350]">
            LexiAssist
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Moon size={20} />
          </button>
        </div>
      </div>

      {/* Overlay for dimming effect */}
      <div
        className={`fixed inset-0 bg-white transition-opacity duration-300 z-30 pointer-events-none ${
          sidebarOpen ? "opacity-60" : "opacity-0"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-[#3C8350] z-40 transition-transform duration-300 shadow-2xl
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          w-[272px] flex-shrink-0
        `}
      >
        <div className="flex flex-col h-full p-4 gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center py-4">
            <div className="h-[42px] w-[140px] relative">
              <svg viewBox="0 0 140 42" className="w-full h-full">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  className="font-['Roboto',sans-serif] font-bold text-[20px]"
                >
                  LexiAssist
                </text>
              </svg>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                active={activeItem === item.text}
                onClick={() => {
                  setActiveItem(item.text);
                  setSidebarOpen(false);
                }}
              />
            ))}
          </nav>

          {/* Get Help Button */}
          <div className="mt-auto">
            <button className="bg-[#eff0ef] h-[56px] w-full rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
              <span className="font-['Roboto',sans-serif] font-medium text-[14px] text-[#272a28]">
                Get Help
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative">
        <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12">
            <div>
              <h1 className="font-['Roboto',sans-serif] font-semibold text-[#272a28] text-[24px] md:text-[28px] leading-[1.2] mb-1">
                Hello, Victoria!
              </h1>
              <p className="font-['Roboto',sans-serif] font-normal text-[#555c56] text-[16px] md:text-[18px] leading-[1.45]">
                Pick a tool to get started with
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden md:block">
                <Settings size={24} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg hidden md:block">
                <Moon size={24} />
              </button>
            </div>
          </div>

          {/* Tool Cards */}
          <div className="flex flex-wrap gap-6 md:gap-8 mb-12 md:mb-16">
            <ToolCard
              title="Text to Speech"
              description="Upload a file and LexiAssist will read it out to you"
              bgColor="rgba(64,123,255,0.33)"
              bgImage={imgFrame20}
              illustration={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
              }
            />
            <ToolCard
              title="Reading Assistant"
              description="Get support in understanding texts better"
              bgColor="rgba(64,191,145,0.33)"
              bgImage={imgFrame21}
              illustration={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              }
            />
            <ToolCard
              title="StudyBuddy"
              description="Create flashcards and mnemonics to study smarter"
              bgColor="rgba(255,193,7,0.33)"
              bgImage={imgFrame22}
              illustration={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              }
            />
            <ToolCard
              title="Speech to Text"
              description="Speak and have your words transcribed automatically"
              bgColor="rgba(156,39,176,0.33)"
              bgImage={imgFrame23}
              illustration={
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
              }
            />
          </div>

          {/* Recent Files */}
          <div className="bg-white rounded-lg">
            <h2 className="font-['Roboto',sans-serif] font-semibold text-[#272a28] text-[20px] md:text-[24px] leading-[1.2] mb-4">
              Continue from where you left off
            </h2>
            <div className="bg-[#f5f5f5] rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {recentFiles.map((file) => (
                  <FileItem key={file} title={file} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}