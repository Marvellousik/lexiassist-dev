import type { User, Quiz, StudyMaterial, UserAnalytics } from '@/types';

// Mock User
export const mockUser: User = {
  id: '1',
  email: 'demo@lexiassist.com',
  name: 'Demo User',
  role: 'student',
  createdAt: '2024-01-01T00:00:00Z',
  updatedAt: '2024-01-01T00:00:00Z',
};

// Mock Study Materials
export const mockStudyMaterials: StudyMaterial[] = [
  {
    id: '1',
    title: 'Introduction to Python Programming',
    content: 'Python is a high-level, interpreted programming language...',
    subject: 'Computer Science',
    difficulty: 'beginner',
    createdBy: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms',
    content: 'Learn about arrays, linked lists, trees, and graphs...',
    subject: 'Computer Science',
    difficulty: 'intermediate',
    createdBy: 'admin',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    content: 'Introduction to ML concepts, supervised and unsupervised learning...',
    subject: 'Computer Science',
    difficulty: 'advanced',
    createdBy: 'admin',
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
];

// Mock Quizzes
export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Python Basics Quiz',
    description: 'Test your Python fundamentals',
    subject: 'Computer Science',
    difficulty: 'easy',
    timeLimit: 30,
    questions: [
      {
        id: '1',
        type: 'multiple_choice',
        question: 'What is the output of print(2 ** 3)?',
        options: ['6', '8', '9', 'Error'],
        correctAnswer: '8',
        explanation: '** is the exponentiation operator in Python',
        points: 10,
      },
    ],
    createdBy: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
  },
];

// Mock Analytics
export const mockAnalytics: UserAnalytics = {
  totalStudyTime: 112,
  quizzesTaken: 47,
  averageScore: 87,
  streakDays: 12,
  subjectsStudied: ['Computer Science', 'Mathematics', 'History'],
  weeklyProgress: [
    { date: '2024-01-01', studyTime: 2.5, quizzesCompleted: 1, averageScore: 85 },
    { date: '2024-01-02', studyTime: 3.0, quizzesCompleted: 2, averageScore: 90 },
    { date: '2024-01-03', studyTime: 1.5, quizzesCompleted: 0, averageScore: 0 },
    { date: '2024-01-04', studyTime: 4.0, quizzesCompleted: 1, averageScore: 88 },
    { date: '2024-01-05', studyTime: 2.0, quizzesCompleted: 1, averageScore: 92 },
    { date: '2024-01-06', studyTime: 5.0, quizzesCompleted: 3, averageScore: 87 },
    { date: '2024-01-07', studyTime: 3.5, quizzesCompleted: 2, averageScore: 91 },
  ],
};

// Simulate API delay
export const mockDelay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));
