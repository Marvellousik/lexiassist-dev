import { useState } from 'react';
import { Link } from 'react-router';
import svgPaths from '../../imports/svg-amnh553owh';
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from '../../imports/svg-0nug8';
import { Eye, EyeOff } from 'lucide-react';

// Logo Component
function Logo({ variant = 'black' }: { variant?: 'black' | 'white' }) {
  const isBlack = variant === 'black';
  
  return (
    <div className="h-[42px] w-[140px] relative">
      {/* L */}
      <div className="absolute inset-[28.81%_0_29.57%_94.45%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77602 17.4815">
          <path d={svgPaths.p28a91900} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* e */}
      <div className="absolute inset-[36.62%_53.29%_29.02%_36.99%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6017 14.4286">
          <path d={svgPaths.p37f52800} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* x */}
      <div className="absolute inset-[37.17%_45.52%_29.57%_46.23%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.55 13.9726">
          <path d={svgPaths.p1147c0c0} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* i */}
      <div className="absolute inset-[24.26%_43.43%_29.57%_54.35%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.1028 19.3944">
          <path d={svgPaths.p2e544800} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* A */}
      <div className="absolute inset-[28.39%_32.13%_29.57%_56.8%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5014 17.6589">
          <path d={svgPaths.p127c2b00} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* s */}
      <div className="absolute inset-[36.62%_24.45%_29.02%_67.83%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8028 14.4286">
          <path d={svgPaths.p306408f0} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* s */}
      <div className="absolute inset-[36.62%_16.44%_29.02%_75.84%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8028 14.4286">
          <path d={svgPaths.p5a49580} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* i */}
      <div className="absolute inset-[24.26%_13.67%_29.57%_84.12%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.10281 19.3944">
          <path d={svgPaths.p2ecd9500} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* s */}
      <div className="absolute inset-[36.62%_5.45%_29.02%_86.83%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8028 14.4286">
          <path d={svgPaths.p115c4400} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* t */}
      <div className="absolute inset-[28.15%_62.66%_29.57%_31.24%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.53588 17.7602">
          <path d={svgPaths.p1a289e80} fill={isBlack ? "#040404" : "white"} />
        </svg>
      </div>
      {/* Leaf icon */}
      <div className="absolute inset-[0_81.46%_28.36%_5.69%]" style={{ maskImage: `url('${imgGroup}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9942 30.0896">
          <path clipRule="evenodd" d={svgPaths.p23bc8a80} fill={isBlack ? "#040404" : "white"} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex bg-[#ecf3ee] relative overflow-hidden items-center justify-center p-16">
        {/* Decorative Circles */}
        <div className="absolute size-[25px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.35)', left: '71px', top: '317px' }} />
        <div className="absolute size-[35px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.63)', left: '233px', top: '916px' }} />
        <div className="absolute size-[25px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.35)', left: '717px', top: '478px' }} />
        <div className="absolute size-[35px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.63)', left: '384px', top: '881px' }} />
        <div className="absolute size-[35px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.63)', left: '216px', top: '237px' }} />
        <div className="absolute size-[35px] rounded-full" style={{ background: 'rgba(60, 131, 80, 0.63)', left: '682px', top: '680px' }} />
        
        {/* Illustration */}
        <div className="relative w-full max-w-md">
          {/* Window */}
          <div className="relative bg-white rounded-lg p-8 shadow-lg border-2 border-[#37474F] mb-8">
            <div className="space-y-4">
              {/* Window bars */}
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-8 bg-[#C7C7C7] rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Character */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
            <div className="relative">
              {/* Simplified character illustration */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  {/* Head */}
                  <div className="w-24 h-24 rounded-full bg-[#F7A9A0] mx-auto mb-4" />
                  {/* Body */}
                  <div className="w-32 h-40 bg-[#7CAC8A] rounded-t-full mx-auto" />
                  {/* Arm waving */}
                  <div className="absolute -right-8 top-20 w-16 h-6 bg-[#7CAC8A] rounded-full rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Speech Bubble */}
          <div className="absolute -top-12 left-32 bg-white rounded-2xl py-4 px-6 shadow-lg border-2 border-[#263238]">
            <p className="text-2xl font-bold text-[#263238]">HELLO!</p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="mb-12">
            <Link to="/">
              <Logo variant="black" />
            </Link>
          </div>

          {/* Form Header */}
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight text-[#272a28]">
              Welcome Back
            </h1>
            <p className="text-sm text-[#555c56]">Log into your account</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#101928]">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 px-4 rounded-full border border-[#d0d5dd] focus:outline-none focus:ring-2 focus:ring-[#377749] transition"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-[#101928]">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full h-14 px-4 pr-12 rounded-full border border-[#d0d5dd] focus:outline-none focus:ring-2 focus:ring-[#377749] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-14 bg-[#377749] text-white rounded-full font-semibold hover:bg-[#2d5f3a] transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[#d0d5dd]" />
              <span className="text-sm text-[#555c56]">or</span>
              <div className="flex-1 h-px bg-[#d0d5dd]" />
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="h-14 border-[1.5px] border-[#377749] rounded-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.1713 8.36788H17.5V8.33329H10V11.6666H14.7096C14.0225 13.6071 12.1763 15 10 15C7.23875 15 5 12.7612 5 9.99996C5 7.23871 7.23875 4.99996 10 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6741 3.90913C14.1858 2.52204 12.1933 1.66663 10 1.66663C5.39791 1.66663 1.66666 5.39788 1.66666 9.99996C1.66666 14.602 5.39791 18.3333 10 18.3333C14.6021 18.3333 18.3333 14.602 18.3333 9.99996C18.3333 9.44121 18.2758 8.89579 18.1713 8.36788Z" fill="#FFC107"/>
                  <path d="M2.6275 6.12121L5.36542 8.12913C6.10625 6.29496 7.90042 4.99996 10 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6742 3.90913C14.1858 2.52204 12.1933 1.66663 10 1.66663C6.79917 1.66663 4.02334 3.47371 2.6275 6.12121Z" fill="#FF3D00"/>
                  <path d="M10 18.3333C12.1525 18.3333 14.1084 17.5095 15.5871 16.17L13.0079 13.9875C12.1432 14.6452 11.0864 15.0009 10 15C7.83255 15 5.99213 13.6179 5.29879 11.6891L2.58130.1V11.7841C3.96046 14.4816 6.76213 18.3333 10 18.3333Z" fill="#4CAF50"/>
                  <path d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3355 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z" fill="#1976D2"/>
                </svg>
                <span className="font-semibold text-sm">Google</span>
              </button>

              <button
                type="button"
                className="h-14 border-[1.5px] border-[#377749] rounded-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.04 17.043h-2.962v-4.64c0-1.107-.02-2.531-1.542-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.04c.396-.75 1.363-1.542 2.806-1.542 3.002 0 3.556 1.976 3.556 4.545v5.24zM4.447 6.194c-.953 0-1.72-.774-1.72-1.726 0-.952.767-1.726 1.72-1.726.951 0 1.72.774 1.72 1.726 0 .952-.769 1.726-1.72 1.726zM5.93 17.043H2.963V7.5H5.93v9.543zM18.52 0H1.476C.66 0 0 .645 0 1.441v17.118C0 19.355.66 20 1.476 20h17.042c.816 0 1.482-.645 1.482-1.441V1.44C20 .646 19.335 0 18.519 0h.001z" fill="#0077B5"/>
                </svg>
                <span className="font-semibold text-sm">LinkedIn</span>
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center text-sm">
              <span className="text-[#555c56]">Already have an account? </span>
              <Link to="/register" className="text-[#377749] font-semibold hover:underline">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
