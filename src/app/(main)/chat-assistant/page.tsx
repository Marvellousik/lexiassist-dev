'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Trash2,
  Clock,
  BookOpen,
  Paperclip,
  MoreVertical,
  Copy,
  Check,
  MessageSquare,
  Brain,
} from 'lucide-react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: Date;
}

const suggestedPrompts = [
  'Explain quantum physics in simple terms',
  'Help me understand photosynthesis',
  'What are the key events of World War II?',
  'Solve this math problem: 2x + 5 = 15',
  'Summarize the theory of evolution',
];

export default function ChatAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `I'd be happy to help you with that! Let me break it down:\n\n${userMessage.content}\n\nThis is a great question. Here's what I understand about this topic:\n\n1. Key concept explanation\n2. Important details to remember\n3. Practical applications\n\nWould you like me to elaborate on any specific part?`,
        `Great question! Based on my knowledge:\n\n${userMessage.content}\n\nHere are the main points:\n• First important point\n• Second crucial detail\n• Third relevant information\n\nIs there anything specific you'd like me to clarify?`,
        `I can help with that! Regarding "${userMessage.content.slice(0, 30)}...":\n\nThis topic involves several key concepts. Let me explain it step by step:\n\nStep 1: Understanding the basics\nStep 2: Exploring deeper concepts\nStep 3: Practical applications\n\nFeel free to ask follow-up questions!`,
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      const newConversation: Conversation = {
        id: Date.now().toString(),
        title: messages[0].content.slice(0, 50) + '...',
        messages,
        updatedAt: new Date(),
      };
      setConversations((prev) => [newConversation, ...prev].slice(0, 10));
    }
    setMessages([]);
    toast.success('New chat started');
  };

  const handleClear = () => {
    setMessages([]);
    toast.success('Chat cleared');
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Chat Assistant</h1>
          <p className="mt-1 text-slate-600">
            Ask questions and get AI-powered academic help
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            leftIcon={<Trash2 size={16} />}
            disabled={messages.length === 0}
          >
            Clear
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNewChat}
            leftIcon={<MessageSquare size={16} />}
          >
            New Chat
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4 h-full">
        {/* Sidebar - Recent Conversations */}
        <Card className="lg:col-span-1 hidden lg:flex flex-col">
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Recent</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {conversations.length === 0 ? (
                <p className="text-sm text-slate-400 text-center py-4">
                  No recent conversations
                </p>
              ) : (
                conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    <p className="text-sm font-medium text-slate-700 line-clamp-1">
                      {conv.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {new Date(conv.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <BookOpen size={16} />
                <span>Course materials integrated</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Chat Area */}
        <Card className="lg:col-span-3 flex flex-col h-full">
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#4A8B5C]/10 flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-[#4A8B5C]" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    How can I help you today?
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 text-center max-w-md">
                    Ask me anything about your studies. I'm here to help explain concepts,
                    solve problems, and guide your learning.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center max-w-lg">
                    {suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handlePromptClick(prompt)}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-600 transition-colors text-left"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.role === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      {message.role === 'user' ? (
                        <AvatarFallback className="bg-slate-200 text-slate-700">
                          <User size={14} />
                        </AvatarFallback>
                      ) : (
                        <AvatarFallback className="bg-[#4A8B5C] text-white">
                          <Bot size={14} />
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-[#4A8B5C] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      <span
                        className={`text-xs mt-2 block ${
                          message.role === 'user' ? 'text-white/70' : 'text-slate-400'
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-[#4A8B5C] text-white">
                      <Bot size={14} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-slate-100 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-100 p-4">
              <div className="flex items-end gap-2">
                <button
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  title="Attach file (coming soon)"
                >
                  <Paperclip size={20} />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything about your studies..."
                    className="w-full px-4 py-3 pr-12 text-sm text-slate-700 bg-slate-50 rounded-xl border border-slate-200 focus:border-[#4A8B5C] focus:ring-2 focus:ring-[#4A8B5C]/20 focus:outline-none resize-none min-h-[48px] max-h-[120px]"
                    rows={1}
                  />
                </div>
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  leftIcon={<Send size={18} />}
                  className="flex-shrink-0"
                >
                  Send
                </Button>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                AI responses are generated for educational purposes. Always verify important information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
