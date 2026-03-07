'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { Eye, EyeOff, Brain } from 'lucide-react';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';
  
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      login(formData);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">LexiAssist</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-600">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              autoComplete="email"
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[34px] text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home */}
        <p className="mt-6 text-center text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
