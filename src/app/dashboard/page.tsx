'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { 
  BookOpen, 
  Brain, 
  BarChart3, 
  Clock, 
  TrendingUp, 
  Flame,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

// Placeholder stats - will be fetched from API
const stats = [
  { name: 'Study Hours', value: '24.5', icon: Clock, change: '+12%', changeType: 'positive' },
  { name: 'Quizzes Completed', value: '18', icon: Brain, change: '+5', changeType: 'positive' },
  { name: 'Average Score', value: '87%', icon: BarChart3, change: '+3%', changeType: 'positive' },
  { name: 'Day Streak', value: '7', icon: Flame, change: 'Keep it up!', changeType: 'neutral' },
];

// Placeholder recent activities
const recentActivities = [
  { id: 1, type: 'quiz', title: 'Completed Python Basics Quiz', score: '92%', time: '2 hours ago' },
  { id: 2, type: 'study', title: 'Studied Data Structures', duration: '45 min', time: '5 hours ago' },
  { id: 3, type: 'ai', title: 'AI Explanation: Neural Networks', preview: 'Neural networks are...', time: '1 day ago' },
  { id: 4, type: 'quiz', title: 'Completed JavaScript Quiz', score: '85%', time: '1 day ago' },
];

// Placeholder recommended topics
const recommendedTopics = [
  { id: 1, title: 'Machine Learning Fundamentals', subject: 'Computer Science', difficulty: 'Intermediate' },
  { id: 2, title: 'Calculus II', subject: 'Mathematics', difficulty: 'Advanced' },
  { id: 3, title: 'World History: WWII', subject: 'History', difficulty: 'Beginner' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-slate-600">
            Welcome back! Here's your learning progress.
          </p>
        </div>
        <Link href="/study">
          <Button leftIcon={<BookOpen size={18} />}>
            Start Studying
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} padding="md">
            <CardContent className="p-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.name}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <stat.icon className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="mt-3">
                <span
                  className={`text-xs font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-slate-500'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-slate-500"> vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader
            title="Recent Activity"
            description="Your latest learning activities"
            action={
              <Link href="/analytics">
                <Button variant="ghost" size="sm" rightIcon={<ArrowRight size={16} />}>
                  View All
                </Button>
              </Link>
            }
          />
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between rounded-lg border border-slate-100 p-4 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      activity.type === 'quiz' ? 'bg-purple-50 text-purple-600' :
                      activity.type === 'study' ? 'bg-blue-50 text-blue-600' :
                      'bg-green-50 text-green-600'
                    }`}>
                      {activity.type === 'quiz' && <Brain size={20} />}
                      {activity.type === 'study' && <BookOpen size={20} />}
                      {activity.type === 'ai' && <Sparkles size={20} />}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{activity.title}</p>
                      <p className="text-sm text-slate-500">
                        {activity.score && `Score: ${activity.score}`}
                        {activity.duration && `Duration: ${activity.duration}`}
                        {activity.preview && activity.preview}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Topics */}
        <Card>
          <CardHeader
            title="Recommended for You"
            description="Topics based on your interests"
          />
          <CardContent>
            <div className="space-y-3">
              {recommendedTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="rounded-lg border border-slate-100 p-4 hover:border-indigo-200 hover:bg-indigo-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{topic.title}</p>
                      <p className="text-sm text-slate-500">{topic.subject}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {topic.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/study">
                <Button variant="outline" className="w-full">
                  Explore More Topics
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/study">
          <Card className="h-full cursor-pointer transition-all hover:shadow-md">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Study Materials</p>
                <p className="text-sm text-slate-500">Browse all topics</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/quiz">
          <Card className="h-full cursor-pointer transition-all hover:shadow-md">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Take a Quiz</p>
                <p className="text-sm text-slate-500">Test your knowledge</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/analytics">
          <Card className="h-full cursor-pointer transition-all hover:shadow-md">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-slate-900">View Analytics</p>
                <p className="text-sm text-slate-500">Track your progress</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Card className="h-full cursor-pointer transition-all hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="font-medium text-slate-900">AI Assistant</p>
              <p className="text-sm text-slate-500">Get instant help</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
