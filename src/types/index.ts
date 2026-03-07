// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt: string;
  updatedAt: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  message?: string;
}

// Study Material Types
export interface StudyMaterial {
  id: string;
  title: string;
  content: string;
  subject: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

// Quiz Types
export interface Quiz {
  id: string;
  title: string;
  description: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number; // in minutes
  questions: Question[];
  createdBy: string;
  createdAt: string;
}

export interface Question {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  points: number;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  score: number;
  maxScore: number;
  answers: Record<string, string | string[]>;
  timeTaken: number; // in seconds
  completedAt: string;
}

// AI Types
export interface AIRequest {
  prompt: string;
  context?: string;
  type: 'explain' | 'summarize' | 'quiz' | 'chat';
}

export interface AIResponse {
  content: string;
  type: string;
  metadata?: Record<string, unknown>;
}

// Analytics Types
export interface UserAnalytics {
  totalStudyTime: number; // in minutes
  quizzesTaken: number;
  averageScore: number;
  streakDays: number;
  subjectsStudied: string[];
  weeklyProgress: WeeklyProgress[];
}

export interface WeeklyProgress {
  date: string;
  studyTime: number;
  quizzesCompleted: number;
  averageScore: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
}

// UI Types
export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}
