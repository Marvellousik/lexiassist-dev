'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Download,
  Trash2,
  Volume2,
  Type,
  Settings,
  Headphones,
} from 'lucide-react';
import { toast } from 'sonner';

interface TTSHistoryItem {
  id: string;
  text: string;
  createdAt: Date;
  audioUrl?: string;
}

export default function TextToSpeechPage() {
  const [text, setText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [history, setHistory] = useState<TTSHistoryItem[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tts-history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem('tts-history', JSON.stringify(history));
  }, [history]);

  const handleSpeak = () => {
    if (!text.trim()) {
      toast.error('Please enter some text to convert');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackRate;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to set selected voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((v) => v.name.includes('Google') || v.name.includes('Natural'));
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => {
      setIsPlaying(false);
      toast.error('Error playing audio');
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);

    // Add to history
    const newItem: TTSHistoryItem = {
      id: Date.now().toString(),
      text: text.slice(0, 100) + (text.length > 100 ? '...' : ''),
      createdAt: new Date(),
    };
    setHistory((prev) => [newItem, ...prev].slice(0, 10));
  };

  const handleClear = () => {
    setText('');
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('tts-history');
    toast.success('History cleared');
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Text to Speech</h1>
          <p className="mt-1 text-sm text-slate-600">
            Convert your text into natural-sounding speech
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          leftIcon={<Settings size={18} />}
        >
          Settings
        </Button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <Card className="bg-slate-50">
          <CardContent className="p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Volume2 size={18} className="text-slate-500" />
                <span className="text-sm font-medium text-slate-700">Speed:</span>
                <div className="flex gap-2">
                  {[0.5, 1, 1.5, 2].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setPlaybackRate(rate)}
                      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                        playbackRate === rate
                          ? 'bg-[#4A8B5C] text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Input Area */}
      <Card className="border-2 border-dashed border-slate-200">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 text-slate-500">
            <Type size={18} />
            <span className="text-sm font-medium">Enter your text</span>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here to convert it to speech..."
            className="w-full h-48 sm:h-64 p-3 sm:p-4 text-sm sm:text-base text-slate-700 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#4A8B5C] focus:ring-2 focus:ring-[#4A8B5C]/20 focus:outline-none resize-none"
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm text-slate-500">
              {text.length} characters
            </span>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                leftIcon={<Trash2 size={16} />}
                disabled={!text}
              >
                Clear
              </Button>
              <Button
                onClick={handleSpeak}
                leftIcon={isPlaying ? <Pause size={18} /> : <Play size={18} />}
                className={isPlaying ? 'bg-amber-500 hover:bg-amber-600' : ''}
              >
                {isPlaying ? 'Stop' : 'Convert'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 flex-shrink-0">
              <Headphones className="h-5 w-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Natural Voices</p>
              <p className="text-xs sm:text-sm text-slate-500">High-quality AI voices</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
              <Settings className="h-5 w-5 text-purple-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Speed Control</p>
              <p className="text-xs sm:text-sm text-slate-500">Adjust playback speed</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 flex-shrink-0">
              <Download className="h-5 w-5 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Download Audio</p>
              <p className="text-xs sm:text-sm text-slate-500">Save as MP3</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* History Section */}
      {history.length > 0 && (
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Recent Conversions</h3>
              <Button variant="ghost" size="sm" onClick={clearHistory}>
                Clear History
              </Button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Volume2 size={16} className="text-slate-400 flex-shrink-0" />
                    <span className="text-sm text-slate-700 truncate">
                      {item.text}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 flex-shrink-0 ml-2">
                    {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
