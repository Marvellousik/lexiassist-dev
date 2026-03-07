import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Brain, BookOpen, BarChart3, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Get personalized explanations and summaries powered by advanced AI models.',
  },
  {
    icon: BookOpen,
    title: 'Smart Study Materials',
    description: 'Access curated study content tailored to your learning goals and pace.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    description: 'Track your learning journey with detailed analytics and insights.',
  },
  {
    icon: Sparkles,
    title: 'Adaptive Quizzes',
    description: 'Test your knowledge with AI-generated quizzes that adapt to your level.',
  },
];

const benefits = [
  'Personalized learning paths',
  'Real-time AI assistance',
  'Progress tracking & analytics',
  'Collaborative study groups',
  'Mobile-friendly experience',
  'Enterprise-grade security',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {/* Logo placeholder - replace with company asset tomorrow */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <span className="text-sm font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold text-slate-900">LexiAssist</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">
                AI-Powered Learning Platform
              </span>
            </div>
            
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Master Any Subject with
              <span className="text-indigo-600"> AI Assistance</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              LexiAssist combines cutting-edge AI technology with proven learning
              methodologies to help you achieve academic excellence faster.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  Start Learning Free
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Already have an account?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Powerful features designed to enhance your learning experience
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Why Choose LexiAssist?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Join thousands of students who have transformed their learning
                experience with our AI-powered platform.
              </p>
              
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/register">
                  <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Placeholder for hero image - replace with company asset tomorrow */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-indigo-100 to-purple-100 p-8">
                <div className="flex h-full items-center justify-center rounded-xl bg-white shadow-lg">
                  <div className="text-center">
                    <Brain className="mx-auto h-16 w-16 text-indigo-600" />
                    <p className="mt-4 text-sm text-slate-500">
                      Hero Image Placeholder
                      <br />
                      (Replace with company asset tomorrow)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform Your Learning?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Start your journey to academic excellence today. No credit card required.
          </p>
          <div className="mt-10">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <span className="text-sm font-bold text-white">L</span>
              </div>
              <span className="text-lg font-bold text-slate-900">LexiAssist</span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} LexiAssist. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
