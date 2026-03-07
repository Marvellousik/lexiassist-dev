'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Search, BookOpen, Filter, Clock, Star } from 'lucide-react';
import { useState } from 'react';

// Placeholder study materials
const studyMaterials = [
  {
    id: 1,
    title: 'Introduction to Python Programming',
    subject: 'Computer Science',
    difficulty: 'Beginner',
    duration: '2 hours',
    rating: 4.8,
    students: 1250,
    tags: ['Programming', 'Python'],
  },
  {
    id: 2,
    title: 'Data Structures and Algorithms',
    subject: 'Computer Science',
    difficulty: 'Intermediate',
    duration: '4 hours',
    rating: 4.9,
    students: 980,
    tags: ['Algorithms', 'Data Structures'],
  },
  {
    id: 3,
    title: 'Calculus I: Limits and Derivatives',
    subject: 'Mathematics',
    difficulty: 'Intermediate',
    duration: '3 hours',
    rating: 4.7,
    students: 750,
    tags: ['Math', 'Calculus'],
  },
  {
    id: 4,
    title: 'World History: Ancient Civilizations',
    subject: 'History',
    difficulty: 'Beginner',
    duration: '2.5 hours',
    rating: 4.6,
    students: 620,
    tags: ['History', 'Ancient'],
  },
  {
    id: 5,
    title: 'Machine Learning Fundamentals',
    subject: 'Computer Science',
    difficulty: 'Advanced',
    duration: '5 hours',
    rating: 4.9,
    students: 890,
    tags: ['AI', 'Machine Learning'],
  },
  {
    id: 6,
    title: 'Organic Chemistry Basics',
    subject: 'Chemistry',
    difficulty: 'Advanced',
    duration: '4 hours',
    rating: 4.5,
    students: 430,
    tags: ['Chemistry', 'Organic'],
  },
];

const subjects = ['All', 'Computer Science', 'Mathematics', 'History', 'Chemistry'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function StudyPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || material.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'All' || material.difficulty === selectedDifficulty;
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Study Materials</h1>
        <p className="mt-1 text-slate-600">
          Browse and learn from our curated collection of study materials
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-500" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="cursor-pointer transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  material.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  material.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {material.difficulty}
                </span>
              </div>
              
              <h3 className="mt-3 font-semibold text-slate-900 line-clamp-2">
                {material.title}
              </h3>
              <p className="text-sm text-slate-500">{material.subject}</p>
              
              <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {material.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  {material.rating}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {material.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="mt-4 w-full" variant="outline" size="sm">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-medium text-slate-900">No materials found</h3>
          <p className="mt-1 text-slate-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
