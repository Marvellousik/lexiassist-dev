'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Brain, Clock, Trophy, ArrowRight, Target, Flame } from 'lucide-react';
import Link from 'next/link';

// Placeholder quizzes
const availableQuizzes = [
  {
    id: 1,
    title: 'Python Basics',
    description: 'Test your understanding of Python fundamentals',
    subject: 'Computer Science',
    difficulty: 'Beginner',
    questions: 20,
    timeLimit: 30,
    attempts: 1250,
    avgScore: 78,
  },
  {
    id: 2,
    title: 'Data Structures',
    description: 'Arrays, linked lists, trees, and more',
    subject: 'Computer Science',
    difficulty: 'Intermediate',
    questions: 25,
    timeLimit: 45,
    attempts: 890,
    avgScore: 72,
  },
  {
    id: 3,
    title: 'Machine Learning',
    description: 'Supervised and unsupervised learning concepts',
    subject: 'Computer Science',
    difficulty: 'Advanced',
    questions: 30,
    timeLimit: 60,
    attempts: 650,
    avgScore: 68,
  },
];

// Placeholder recent attempts
const recentAttempts = [
  { id: 1, quiz: 'Python Basics', score: '92%', date: '2 hours ago', correct: 18, total: 20 },
  { id: 2, quiz: 'JavaScript Fundamentals', score: '85%', date: '1 day ago', correct: 17, total: 20 },
  { id: 3, quiz: 'HTML & CSS', score: '95%', date: '3 days ago', correct: 19, total: 20 },
];

export default function QuizPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quizzes</h1>
          <p className="mt-1 text-slate-600">
            Test your knowledge with AI-generated quizzes
          </p>
        </div>
        <Button leftIcon={<Brain size={18} />}>
          Generate Custom Quiz
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                <Trophy className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Quizzes Taken</p>
                <p className="text-xl font-bold text-slate-900">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Average Score</p>
                <p className="text-xl font-bold text-slate-900">87%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                <Flame className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Current Streak</p>
                <p className="text-xl font-bold text-slate-900">5 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Available Quizzes */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Available Quizzes</h2>
          {availableQuizzes.map((quiz) => (
            <Card key={quiz.id} className="transition-all hover:shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{quiz.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {quiz.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{quiz.description}</p>
                    
                    <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Brain className="h-4 w-4" />
                        {quiz.questions} questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {quiz.timeLimit} min
                      </span>
                      <span>{quiz.attempts.toLocaleString()} attempts</span>
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      Avg. Score: <span className="font-medium text-slate-700">{quiz.avgScore}%</span>
                    </div>
                  </div>
                  <Button size="sm" rightIcon={<ArrowRight size={16} />}>
                    Start
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Attempts */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Attempts</h2>
          <Card>
            <CardContent className="p-0">
              {recentAttempts.map((attempt, index) => (
                <div
                  key={attempt.id}
                  className={`p-4 ${index !== recentAttempts.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{attempt.quiz}</p>
                      <p className="text-sm text-slate-500">{attempt.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        parseInt(attempt.score) >= 90 ? 'text-green-600' :
                        parseInt(attempt.score) >= 70 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {attempt.score}
                      </p>
                      <p className="text-xs text-slate-500">
                        {attempt.correct}/{attempt.total} correct
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Link href="/analytics">
            <Button variant="outline" className="mt-4 w-full">
              View All Results
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
