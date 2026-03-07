'use client';

import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Moon,
  Globe,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const settingSections = [
  { id: 'profile', name: 'Profile', icon: User },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'appearance', name: 'Appearance', icon: Moon },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="mt-1 text-slate-600">
          Manage your account preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <Card className="h-fit">
          <CardContent className="p-2">
            <nav className="space-y-1">
              {settingSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <section.icon className="h-4 w-4" />
                    {section.name}
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeSection === 'profile' && (
            <Card>
              <CardHeader
                title="Profile Information"
                description="Update your personal details"
              />
              <CardContent>
                <form className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600">
                      JD
                    </div>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="First Name"
                      defaultValue="John"
                    />
                    <Input
                      label="Last Name"
                      defaultValue="Doe"
                    />
                  </div>

                  <Input
                    label="Email"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Bio
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about yourself..."
                      className="flex w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {activeSection === 'notifications' && (
            <Card>
              <CardHeader
                title="Notification Preferences"
                description="Choose what you want to be notified about"
              />
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
                    { id: 'quiz', label: 'Quiz Reminders', desc: 'Get reminded about scheduled quizzes' },
                    { id: 'streak', label: 'Streak Alerts', desc: 'Notifications about your study streak' },
                    { id: 'updates', label: 'Product Updates', desc: 'News about new features and improvements' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium text-slate-900">{item.label}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <div className="peer h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-indigo-600 peer-focus:ring-4 peer-focus:ring-indigo-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full" />
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'security' && (
            <Card>
              <CardHeader
                title="Security Settings"
                description="Manage your account security"
              />
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-slate-900">Change Password</h3>
                    <form className="mt-4 space-y-4">
                      <Input
                        label="Current Password"
                        type="password"
                      />
                      <Input
                        label="New Password"
                        type="password"
                      />
                      <Input
                        label="Confirm New Password"
                        type="password"
                      />
                      <Button>Update Password</Button>
                    </form>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="font-medium text-slate-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                    <div className="mt-4">
                      <Button variant="outline">Enable 2FA</Button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h3 className="font-medium text-red-600">Danger Zone</h3>
                    <p className="text-sm text-slate-500">Once you delete your account, there's no going back</p>
                    <div className="mt-4">
                      <Button variant="danger">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === 'appearance' && (
            <Card>
              <CardHeader
                title="Appearance"
                description="Customize how LexiAssist looks"
              />
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-slate-900">Theme</p>
                    <p className="text-sm text-slate-500">Choose your preferred theme</p>
                    <div className="mt-3 flex gap-3">
                      <button className="flex items-center gap-2 rounded-lg border-2 border-indigo-500 bg-white px-4 py-2">
                        <div className="h-4 w-4 rounded-full bg-white border border-slate-300" />
                        Light
                      </button>
                      <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-900 px-4 py-2 text-white">
                        <div className="h-4 w-4 rounded-full bg-slate-800" />
                        Dark
                      </button>
                      <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-4 py-2">
                        <Globe className="h-4 w-4" />
                        System
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-medium text-slate-900">Language</p>
                    <p className="text-sm text-slate-500">Select your preferred language</p>
                    <select className="mt-3 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
