'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Sparkles,
  Copy,
  Check,
  Save,
  Download,
  Trash2,
  Edit3,
  Wand2,
  FileText,
  RotateCcw,
  Type,
} from 'lucide-react';
import { toast } from 'sonner';

type RewriteMode = 'grammar' | 'academic' | 'simple' | 'creative';

interface RewriteHistory {
  id: string;
  original: string;
  rewritten: string;
  mode: RewriteMode;
  createdAt: Date;
}

const rewriteModes: { id: RewriteMode; label: string; description: string }[] = [
  { id: 'grammar', label: 'Grammar & Spelling', description: 'Fix errors and improve clarity' },
  { id: 'academic', label: 'Academic', description: 'Formal academic tone' },
  { id: 'simple', label: 'Simplify', description: 'Easier to understand' },
  { id: 'creative', label: 'Creative', description: 'More engaging style' },
];

export default function WritingAssistantPage() {
  const [text, setText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [isRewriting, setIsRewriting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedMode, setSelectedMode] = useState<RewriteMode>('grammar');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<RewriteHistory[]>([]);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== 'undefined' && 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setText((prev) => prev + finalTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
        toast.error('Voice recognition error. Please try again.');
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      toast.error('Voice recognition not supported in your browser');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      toast.success('Voice recording stopped');
    } else {
      recognitionRef.current.start();
      setIsRecording(true);
      toast.success('Voice recording started. Speak now...');
    }
  };

  const handleRewrite = async () => {
    if (!text.trim()) {
      toast.error('Please enter some text to rewrite');
      return;
    }

    setIsRewriting(true);

    // Simulate AI rewriting
    setTimeout(() => {
      let rewritten = '';
      const mode = rewriteModes.find((m) => m.id === selectedMode);

      switch (selectedMode) {
        case 'grammar':
          rewritten = `✅ Grammar Enhanced (${mode?.label}):\n\n${text.trim()}\n\n📝 Improvements made:\n• Corrected grammar and punctuation\n• Improved sentence structure\n• Enhanced clarity and flow`;
          break;
        case 'academic':
          rewritten = `🎓 Academic Version (${mode?.label}):\n\nThe following text has been restructured to adhere to academic writing standards:\n\n${text.trim()}\n\n📝 Academic improvements:\n• Formal tone and vocabulary\n• Objective perspective\n• Proper academic structure`;
          break;
        case 'simple':
          rewritten = `💡 Simplified Version (${mode?.label}):\n\n${text.trim()}\n\n📝 Simplifications:\n• Shorter sentences\n• Common vocabulary\n• Clear and concise language`;
          break;
        case 'creative':
          rewritten = `✨ Creative Version (${mode?.label}):\n\n${text.trim()}\n\n📝 Creative enhancements:\n• Engaging narrative style\n• Vivid descriptions\n• Dynamic sentence variety`;
          break;
      }

      setRewrittenText(rewritten);
      setIsRewriting(false);

      // Add to history
      const newItem: RewriteHistory = {
        id: Date.now().toString(),
        original: text.slice(0, 100) + '...',
        rewritten: rewritten.slice(0, 100) + '...',
        mode: selectedMode,
        createdAt: new Date(),
      };
      setHistory((prev) => [newItem, ...prev].slice(0, 10));

      toast.success('Text rewritten successfully');
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenText);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
    setRewrittenText('');
  };

  const handleSave = () => {
    toast.success('Saved to your library');
  };

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Writing Assistant</h1>
          <p className="mt-1 text-sm text-slate-600">
            AI-powered writing enhancement with voice input
          </p>
        </div>
        <Button
          variant={isRecording ? 'destructive' : 'outline'}
          leftIcon={isRecording ? <MicOff size={18} /> : <Mic size={18} />}
          onClick={toggleRecording}
        >
          {isRecording ? 'Stop Recording' : 'Voice Input'}
        </Button>
      </div>

      {/* Mode Selection */}
      <Card className="bg-slate-50">
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-3">
            <Wand2 size={18} className="text-slate-500" />
            <span className="text-sm font-medium text-slate-700">Rewrite Mode:</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {rewriteModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`p-3 rounded-xl text-left transition-all ${
                  selectedMode === mode.id
                    ? 'bg-[#4A8B5C] text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <p className="font-medium text-sm">{mode.label}</p>
                <p className={`text-xs mt-1 ${selectedMode === mode.id ? 'text-white/80' : 'text-slate-500'}`}>
                  {mode.description}
                </p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-4">
          <Card className="h-full">
            <CardHeader
              title="Your Text"
              description={isRecording ? '🎙️ Listening... Speak now' : 'Type or use voice input'}
              action={
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  leftIcon={<Trash2 size={16} />}
                  disabled={!text}
                >
                  Clear
                </Button>
              }
            />
            <CardContent className="p-3 sm:p-4">
              {isRecording && (
                <div className="mb-3 p-3 bg-red-50 rounded-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-red-600 font-medium">Recording in progress...</span>
                </div>
              )}
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Start typing or click 'Voice Input' to speak..."
                className="w-full h-64 sm:h-80 p-3 sm:p-4 text-sm text-slate-700 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#4A8B5C] focus:ring-2 focus:ring-[#4A8B5C]/20 focus:outline-none resize-none"
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-slate-500">
                  {text.split(/\s+/).filter(Boolean).length} words
                </span>
                <span className="text-xs text-slate-500">
                  {text.length} characters
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <Card className="h-full">
            <CardHeader
              title="Enhanced Text"
              description="AI-enhanced version will appear here"
              action={
                rewrittenText && (
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSave}
                      leftIcon={<Save size={16} />}
                    >
                      Save
                    </Button>
                  </div>
                )
              }
            />
            <CardContent className="p-3 sm:p-4">
              {rewrittenText ? (
                <div className="h-64 sm:h-80 overflow-y-auto">
                  <div className="prose prose-sm max-w-none">
                    <div className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed">
                      {rewrittenText}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 sm:h-80 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-slate-400" />
                  </div>
                  <p className="text-slate-500 text-sm">
                    Your enhanced text will appear here
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleRewrite}
          isLoading={isRewriting}
          leftIcon={<Wand2 size={20} />}
          disabled={!text.trim()}
        >
          {isRewriting ? 'Enhancing...' : 'Enhance Writing'}
        </Button>
      </div>

      {/* Features */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 flex-shrink-0">
              <Mic className="h-5 w-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Voice to Text</p>
              <p className="text-xs sm:text-sm text-slate-500">Speak and transcribe</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 flex-shrink-0">
              <RotateCcw className="h-5 w-5 text-purple-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Multiple Modes</p>
              <p className="text-xs sm:text-sm text-slate-500">4 rewriting styles</p>
            </div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-3 sm:p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 flex-shrink-0">
              <Download className="h-5 w-5 text-green-600" />
            </div>
            <div className="min-w-0">
              <p className="font-medium text-slate-900 text-sm">Export</p>
              <p className="text-xs sm:text-sm text-slate-500">PDF/DOCX coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* History */}
      {history.length > 0 && (
        <Card>
          <CardHeader title="Recent Enhancements" />
          <CardContent className="p-3 sm:p-4">
            <div className="space-y-2 sm:space-y-3">
              {history.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4A8B5C]/10 flex-shrink-0">
                      <Edit3 size={14} className="text-[#4A8B5C]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-700 truncate">
                        {item.original}
                      </p>
                      <p className="text-xs text-slate-500 capitalize">
                        {item.mode} mode • {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
