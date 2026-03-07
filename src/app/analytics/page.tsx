'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Calendar, 
  Target,
  BookOpen,
  Brain,
  Award
} from 'lucide-react';

// Placeholder weekly data for charts
const weeklyData = [
  { day: 'Mon', studyTime: 2.5, quizzes: 1, score: 85 },
  { day: 'Tue', studyTime: 3.0, quizzes: 2, score: 90 },
  { day: 'Wed', studyTime: 1.5, quizzes: 0, score: 0 },
  { day: 'Thu', studyTime: 4.0, quizzes: 1, score: 88 },
  { day: 'Fri', studyTime: 2.0, quizzes: 1, score: 92 },
  { day: 'Sat', studyTime: 5.0, quizzes: 3, score: 87 },
  { day: 'Sun', studyTime: 3.5, quizzes: 2, score: 91 },
];

const subjectBreakdown = [
  { subject: 'Computer Science', hours: 45, percentage: 40, color: 'bg-indigo-500' },
  { subject: 'Mathematics', hours: 30, percentage: 27, color: 'bg-purple-500' },
  { subject: 'History', hours: 20, percentage: 18, color: 'bg-blue-500' },
  { subject: 'Chemistry', hours: 17, percentage: 15, color: 'bg-green-500' },
];

const achievements = [
  { id: 1, name: 'Week Warrior', description: 'Study 7 days in a row', unlocked: true, icon: '🔥' },
  { id: 2, name: 'Quiz Master', description: 'Complete 50 quizzes', unlocked: true, icon: '🏆' },
  { id: 3, name: 'Perfect Score', description: 'Get 100% on a quiz', unlocked: false, icon: '⭐' },
  { id: 4, name: 'Bookworm', description: 'Study for 100 hours', unlocked: false, icon: '📚' },
];

export default function AnalyticsPage() {
  const totalStudyTime = weeklyData.reduce((acc, day) => acc + day.studyTime, 0);
  const totalQuizzes = weeklyData.reduce((acc, day) => acc + day.quizzes, 0);
  const avgScore = weeklyData
    .filter(day => day.score > 0)
    .reduce((acc, day) => acc + day.score, 0) / weeklyData.filter(day => day.score > 0).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="mt-1 text-slate-600">
          Track your learning progress and achievements
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Study Time</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">112h</p>
                <p className="text-xs text-green-600 mt-1">+12% this month</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Quizzes Completed</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">47</p>
                <p className="text-xs text-green-600 mt-1">+8 this month</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                <Brain className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Average Score</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">87%</p>
                <p className="text-xs text-green-600 mt-1">+3% improvement</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                <Target className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Current Streak</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">12 days</p>
                <p className="text-xs text-slate-500 mt-1">Best: 21 days</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress & Subject Breakdown */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card>
          <CardHeader
            title="Weekly Activity"
            description="Your study time and quiz performance this week"
          />
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day) => (
                <div key={day.day} className="flex items-center gap-4">
                  <span className="w-8 text-sm font-medium text-slate-600">{day.day}</span>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-2 rounded-full bg-indigo-500 transition-all"
                        style={{ width: `${(day.studyTime / 5) * 100}%` }}
                      />
                      <span className="text-xs text-slate-500">{day.studyTime}h</span>
                    </div>
                    {day.quizzes > 0 && (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs">
                          <Brain className="h-3 w-3 text-purple-500" />
                          <span className="text-slate-600">{day.quizzes} quizzes</span>
                          <span className="text-green-600">({day.score}%)</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <span>Total: {totalStudyTime}h study time</span>
              <span>{totalQuizzes} quizzes</span>
              <span>Avg: {avgScore.toFixed(0)}% score</span>
            </div>
          </CardContent>
        </Card>

        {/* Subject Breakdown */}
        <Card>
          <CardHeader
            title="Subject Breakdown"
            description="Time spent on each subject"
          />
          <CardContent>
            <div className="space-y-4">
              {subjectBreakdown.map((subject) => (
                <div key={subject.subject}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{subject.subject}</span>
                    <span className="text-slate-500">{subject.hours}h ({subject.percentage}%)</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div
                      className={`h-2 rounded-full ${subject.color}`}
                      style={{ width: `${subject.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 rounded-lg bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="font-medium text-slate-900">Most Improved</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">
                You've improved 15% in Computer Science this month. Keep it up!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader
          title="Achievements"
          description="Unlock achievements by reaching milestones"
        />
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-lg border p-4 text-center transition-all ${
                  achievement.unlocked
                    ? 'border-indigo-200 bg-indigo-50'
                    : 'border-slate-200 bg-slate-50 opacity-60'
                }`}
              >
                <span className="text-3xl">{achievement.icon}</span>
                <h3 className="mt-2 font-semibold text-slate-900">{achievement.name}</h3>
                <p className="text-sm text-slate-500">{achievement.description}</p>
                {achievement.unlocked && (
                  <span className="mt-2 inline-block text-xs font-medium text-green-600">
                    Unlocked!
                  </span>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
