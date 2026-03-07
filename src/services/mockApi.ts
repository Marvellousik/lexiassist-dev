import { mockUser, mockStudyMaterials, mockQuizzes, mockAnalytics, mockDelay } from '@/lib/mockData';
import type { LoginCredentials, RegisterCredentials, User, ApiResponse } from '@/types';

// Mock Auth Service
export const mockAuthApi = {
  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User }>> {
    await mockDelay(800);
    
    // Simulate validation
    if (credentials.email === 'error@test.com') {
      throw new Error('Invalid credentials');
    }
    
    return {
      data: { user: mockUser },
      message: 'Login successful',
      success: true,
    };
  },

  async register(credentials: RegisterCredentials): Promise<ApiResponse<{ user: User }>> {
    await mockDelay(800);
    
    return {
      data: { 
        user: { 
          ...mockUser, 
          name: credentials.name,
          email: credentials.email 
        } 
      },
      message: 'Registration successful',
      success: true,
    };
  },

  async logout(): Promise<ApiResponse<void>> {
    await mockDelay(300);
    return {
      data: undefined as unknown as void,
      message: 'Logout successful',
      success: true,
    };
  },

  async getCurrentUser(): Promise<ApiResponse<User>> {
    await mockDelay(500);
    return {
      data: mockUser,
      message: 'User fetched successfully',
      success: true,
    };
  },
};

// Mock Study Service
export const mockStudyApi = {
  async getMaterials(filters?: { subject?: string; difficulty?: string }) {
    await mockDelay(600);
    
    let materials = [...mockStudyMaterials];
    
    if (filters?.subject && filters.subject !== 'All') {
      materials = materials.filter(m => m.subject === filters.subject);
    }
    
    if (filters?.difficulty && filters.difficulty !== 'All') {
      materials = materials.filter(m => m.difficulty.toLowerCase() === filters.difficulty?.toLowerCase());
    }
    
    return {
      data: materials,
      message: 'Materials fetched successfully',
      success: true,
    };
  },

  async getMaterialById(id: string) {
    await mockDelay(400);
    const material = mockStudyMaterials.find(m => m.id === id);
    
    if (!material) {
      throw new Error('Material not found');
    }
    
    return {
      data: material,
      message: 'Material fetched successfully',
      success: true,
    };
  },
};

// Mock Quiz Service
export const mockQuizApi = {
  async getQuizzes() {
    await mockDelay(600);
    return {
      data: mockQuizzes,
      message: 'Quizzes fetched successfully',
      success: true,
    };
  },

  async getQuizById(id: string) {
    await mockDelay(400);
    const quiz = mockQuizzes.find(q => q.id === id);
    
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    
    return {
      data: quiz,
      message: 'Quiz fetched successfully',
      success: true,
    };
  },

  async submitAttempt(quizId: string, answers: Record<string, string>) {
    await mockDelay(1000);
    
    // Calculate mock score
    const score = Math.floor(Math.random() * 30) + 70; // 70-100%
    
    return {
      data: {
        score,
        correctAnswers: Math.floor(Object.keys(answers).length * (score / 100)),
        totalQuestions: Object.keys(answers).length,
      },
      message: 'Quiz submitted successfully',
      success: true,
    };
  },
};

// Mock Analytics Service
export const mockAnalyticsApi = {
  async getAnalytics(period: string = 'week') {
    await mockDelay(700);
    return {
      data: mockAnalytics,
      message: 'Analytics fetched successfully',
      success: true,
    };
  },
};

// Check if mock mode is enabled
export const isMockMode = () => {
  if (typeof window === 'undefined') return false;
  return process.env.NEXT_PUBLIC_MOCK_MODE === 'true';
};
