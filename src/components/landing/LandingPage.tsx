'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import {
  BookOpen,
  Brain,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Smart Reading',
    description: 'Upload documents and get AI-powered summaries tailored to your learning style.',
  },
  {
    icon: Brain,
    title: 'Study Tools',
    description: 'Generate flashcards, quizzes, and study materials automatically from your content.',
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    description: 'Get instant help with homework, explanations, and writing assistance.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'High School Student',
    content: 'LexiAssist helped me improve my grades significantly. The flashcard generator is a game-changer!',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'College Freshman',
    content: 'The reading assistant helps me understand complex texts so much faster. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emily R.',
    role: 'Graduate Student',
    content: 'Finally, a study tool that actually adapts to how I learn. The AI chat is incredibly helpful.',
    rating: 5,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4A8B5C] via-[#3C8350] to-[#2d6340]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>Trusted by 10,000+ students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Learn Smarter with{' '}
              <span className="text-[#89CFF0]">AI-Powered</span>{' '}
              Study Tools
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Transform your study experience with intelligent summaries, flashcards, 
              quizzes, and a personal AI tutor. Designed for students who learn differently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-[#3C8350] hover:bg-gray-100">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-white/20">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">50K+</div>
                <div className="text-white/60 text-sm mt-1">Active Students</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">1M+</div>
                <div className="text-white/60 text-sm mt-1">Study Sessions</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
                <div className="text-white/60 text-sm mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Study Better
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful AI tools designed to help you learn faster, remember more, 
              and achieve your academic goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#4A8B5C]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#4A8B5C]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How LexiAssist Works
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to supercharge your learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Your Materials',
                description: 'Upload PDFs, documents, or paste text directly into the app.',
              },
              {
                step: '02',
                title: 'AI Processing',
                description: 'Our AI analyzes your content and generates personalized study tools.',
              },
              {
                step: '03',
                title: 'Start Learning',
                description: 'Use flashcards, take quizzes, and chat with your AI tutor.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-bold text-[#4A8B5C]/10 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#4A8B5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Students Love LexiAssist
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of students who have transformed their learning experience 
                with our AI-powered study platform.
              </p>
              
              <div className="space-y-4">
                {[
                  'Personalized learning for your unique style',
                  'Save hours of manual study material creation',
                  '24/7 AI tutor available whenever you need help',
                  'Track progress and identify knowledge gaps',
                  'Accessible on any device, anywhere',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#89CFF0] flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4A8B5C] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-500">Happy Students</div>
                </div>
              </div>
              
              <div className="h-px bg-gray-200 my-6"></div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#89CFF0] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-500">Secure & Private</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from real students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already studying smarter with LexiAssist. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-[#4A8B5C] hover:bg-[#3C8350]">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                I Already Have an Account
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#4A8B5C] rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LexiAssist</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered learning assistant designed to make studying easier for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/tutorials" className="hover:text-white">Tutorials</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} LexiAssist. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
