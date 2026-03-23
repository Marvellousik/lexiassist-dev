import { useState } from 'react';
import { Mic, AudioWaveform, Settings, Moon, Sun, ChevronDown, X, Download, Bookmark } from 'lucide-react';
import imgEllipse7 from "figma:asset/1c0b41a50bde94cbc54dd35b7d2a6db99082e056.png";

export function WritingAssistant() {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [expandedTool, setExpandedTool] = useState<string | null>('tools');
  const [selectedFont, setSelectedFont] = useState('Roboto');
  const [selectedSpacing, setSelectedSpacing] = useState('Normal');

  const handleCleanAndStructure = () => {
    // Frontend only - would process text here
    console.log('Clean and structure clicked');
  };

  const handleCopyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const toggleTool = (tool: string) => {
    setExpandedTool(expandedTool === tool ? null : tool);
  };

  return (
    <div className="flex h-screen bg-[#fafafa] overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-[#3c8350] rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Writing Assistant</h1>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowTools(!showTools)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle tools"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <img 
              src={imgEllipse7} 
              alt="User profile" 
              className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-200"
            />
          </div>
        </header>

        {/* Writing Area */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-hidden flex flex-col">
          <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
            <div className="bg-[#f4f4f4] border border-gray-200 rounded-3xl flex flex-col flex-1 shadow-sm overflow-hidden">
              {/* Voice Controls */}
              <div className="flex items-center gap-4 px-6 md:px-8 pt-6 pb-4 border-b border-gray-200 bg-white/50 flex-shrink-0">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-2.5 rounded-full transition-all ${
                    isRecording 
                      ? 'bg-red-50 text-red-600 ring-2 ring-red-200' 
                      : 'hover:bg-gray-200 text-[#3c8350]'
                  }`}
                  aria-label={isRecording ? 'Stop recording' : 'Start recording'}
                >
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  className="p-2.5 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Audio visualization"
                >
                  <AudioWaveform className="w-5 h-5 text-gray-700" />
                </button>

                <button
                  onClick={handleCleanAndStructure}
                  disabled={!text}
                  className="ml-auto bg-[#2b5d39] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#234a2d] transition-all font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
                >
                  Clean and Structure
                </button>
              </div>

              {/* Text Area */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Start typing or use voice input to begin writing..."
                  className="w-full flex-1 bg-transparent resize-none outline-none text-gray-900 text-base md:text-lg leading-relaxed placeholder:text-gray-400 px-6 md:px-8 py-6 overflow-y-auto"
                  style={{ fontFamily: selectedFont }}
                />
              </div>

              {/* Copy Button */}
              {text && (
                <div className="flex justify-end px-6 md:px-8 pb-6 pt-4 border-t border-gray-200 bg-white/50 flex-shrink-0">
                  <button
                    onClick={handleCopyToClipboard}
                    className="bg-[#2b5d39] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full hover:bg-[#234a2d] transition-all font-medium text-sm md:text-base flex items-center gap-2 shadow-sm hover:shadow"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy to clipboard
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar - Tools Panel */}
      <aside
        className={`${
          showTools ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0 fixed md:relative right-0 top-0 h-full w-80 bg-[#f4f4f4] border-l border-gray-200 rounded-tl-3xl rounded-bl-3xl shadow-2xl md:shadow-none transition-transform duration-300 z-50 overflow-y-auto flex flex-col`}
      >
        <div className="p-6 flex-1 flex flex-col">
          {/* Close button for mobile */}
          <button
            onClick={() => setShowTools(false)}
            className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close tools"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tools Header - Collapsible */}
          <div className="mb-6">
            <button
              onClick={() => toggleTool('tools')}
              className="w-full flex items-center justify-between group"
            >
              <h2 className="text-xl text-[#3c8350] font-medium tracking-tight">Tools</h2>
              <div className={`w-10 h-10 bg-[#3c8350] rounded-full flex items-center justify-center transition-transform duration-200 ${
                expandedTool === 'tools' ? '' : 'rotate-180'
              }`}>
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </button>
          </div>

          {/* Collapsible Tools Section */}
          <div className={`overflow-hidden transition-all duration-300 ${
            expandedTool === 'tools' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            {/* Font Choice Dropdown */}
            <div className="mb-4">
              <button 
                onClick={() => toggleTool('font')}
                className="w-full flex items-center justify-between text-left py-3 px-4 text-lg text-gray-700 hover:bg-white/50 rounded-lg transition-colors"
              >
                <span className="font-normal">Font Choice</span>
                <ChevronDown className={`w-5 h-5 text-[#3c8350] transition-transform duration-200 ${
                  expandedTool === 'font' ? 'rotate-180' : ''
                }`} />
              </button>
              {expandedTool === 'font' && (
                <div className="mt-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  {['Roboto', 'Arial', 'Times New Roman', 'Georgia', 'Courier New'].map((font) => (
                    <button
                      key={font}
                      onClick={() => {
                        setSelectedFont(font);
                        setExpandedTool(null);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        selectedFont === font ? 'bg-[#3c8350]/10 text-[#3c8350] font-medium' : 'text-gray-700'
                      }`}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Spacing Dropdown */}
            <div className="mb-4">
              <button 
                onClick={() => toggleTool('spacing')}
                className="w-full flex items-center justify-between text-left py-3 px-4 text-lg text-gray-700 hover:bg-white/50 rounded-lg transition-colors"
              >
                <span className="font-normal">Spacing</span>
                <ChevronDown className={`w-5 h-5 text-[#3c8350] transition-transform duration-200 ${
                  expandedTool === 'spacing' ? 'rotate-180' : ''
                }`} />
              </button>
              {expandedTool === 'spacing' && (
                <div className="mt-2 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  {['Compact', 'Normal', 'Relaxed', 'Loose'].map((spacing) => (
                    <button
                      key={spacing}
                      onClick={() => {
                        setSelectedSpacing(spacing);
                        setExpandedTool(null);
                      }}
                      className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        selectedSpacing === spacing ? 'bg-[#3c8350]/10 text-[#3c8350] font-medium' : 'text-gray-700'
                      }`}
                    >
                      {spacing}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tinted Backgrounds Toggle */}
            <div className="mb-6">
              <div className="flex items-center justify-between py-3 px-4 hover:bg-white/50 rounded-lg transition-colors">
                <span className="text-lg text-gray-700 font-normal">Tinted backgrounds</span>
                <button className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-[#3c8350] hover:bg-[#3c8350]/5 transition-all relative overflow-hidden">
                  <X className="w-6 h-6 text-gray-400" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Bookmark Icon */}
            <div className="mb-4">
              <button className="p-3 hover:bg-white/50 rounded-lg transition-colors flex items-center gap-2 text-gray-600 hover:text-[#3c8350]" aria-label="Bookmark">
                <Bookmark className="w-6 h-6" />
                <span className="text-base font-normal">Save preferences</span>
              </button>
            </div>
          </div>

          {/* Export Button - Always visible at bottom */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <button
              onClick={handleExport}
              className="w-full bg-[#2b5d39] text-white px-6 py-4 rounded-full hover:bg-[#234a2d] transition-all font-medium text-lg flex items-center justify-center gap-3 shadow-sm hover:shadow"
            >
              <Download className="w-5 h-5" />
              Export options
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {showTools && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowTools(false)}
        />
      )}
    </div>
  );
}