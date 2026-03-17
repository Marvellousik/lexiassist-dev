'use client';

import Link from 'next/link';
import svgPaths, { imgGroup } from './svg-paths';

// Image paths (copied to public/landing/)
const imgHeroStudent = '/landing/ec9f20a6dde2af4d8bbb4ba6c62194cc146a41d0.png';
const imgCtaBackground = '/landing/ab8d6a9743d4e4b36d8deaeeb53ecfe1e606935d.png';

// ==========================================
// COMPONENTS
// ==========================================

// Logo Component
function Logo({ variant = 'black' }: { variant?: 'black' | 'white' }) {
  const isBlack = variant === 'black';
  
  return (
    <div className="h-[42px] w-[140px] relative flex-shrink-0">
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

// Button Component - normalized padding and hover
function Button({ children, variant = 'primary', href }: { children: React.ReactNode; variant?: 'primary' | 'white'; href?: string }) {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
  const variantClasses = variant === 'primary' 
    ? "bg-[#377749] text-white hover:bg-[#2d6340] shadow-sm hover:shadow-md" 
    : "bg-white text-[#272a28] border border-[#cdcfcd] hover:bg-[#f5f5f5]";
  
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}

// ==========================================
// MAIN LANDING PAGE
// ==========================================

export default function LandingPage() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Navigation - improved mobile padding */}
      <nav className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-[1128px]">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between shadow-sm border border-[#cdcfcd]/30">
          <Logo variant="black" />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="white" href="/login">Login</Button>
            <Button variant="primary" href="/register">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - improved responsive padding */}
      <section className="relative min-h-screen pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 max-w-[526px]">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-[-0.04em] font-normal">
                <span className="block">Read. </span>
                <span className="block text-[#3c8350]">Understand.</span>
                <span className="block"> Write. Easier.</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#5d655f] leading-relaxed tracking-[-0.02em] max-w-lg">
                Lexi Assist is designed to make reading, studying, and writing significantly easier for students who learn differently.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="primary" href="/register">Get Started</Button>
              <Button variant="white" href="/login">Get Started</Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[918px] lg:-mr-20 xl:-mr-40">
            <div className="absolute h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1132px] left-0 lg:left-[-50px] top-0 lg:top-[-28px] w-full lg:w-[900px]">
              <div className="absolute inset-0 bg-[#d9d9d9]">
                <img alt="Student reading" className="absolute h-full w-full object-cover" src={imgHeroStudent} />
              </div>
            </div>
            <div className="absolute bg-[#193722] h-full lg:h-[918px] left-0 lg:left-[2px] opacity-69 top-0 w-full lg:w-[722px]" />
            
            {/* Floating Card - improved responsive sizing */}
            <div className="absolute w-[280px] sm:w-[300px] lg:w-[334px] left-1/2 lg:left-[179px] top-1/2 lg:top-[275px] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0">
              <div className="absolute border-2 border-white left-0 size-[250px] sm:size-[280px] lg:size-[296px] top-0" />
              <div className="absolute bg-white flex flex-col items-start left-4 sm:left-6 lg:left-[36px] pb-8 sm:pb-12 lg:pb-16 pl-6 sm:pl-8 lg:pl-[54px] pr-5 sm:pr-6 lg:pr-[38px] pt-6 sm:pt-8 lg:pt-[39px] size-[260px] sm:size-[290px] lg:size-[298px] top-4 sm:top-5 lg:top-[35px] shadow-xl">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <p className="font-semibold text-base lg:text-lg text-[#5d655f]">
                    Simplified Reading Mode
                  </p>
                  <p className="text-sm lg:text-base text-[#5d655f] leading-relaxed">
                    The mitochondria is often called the powerhouse of the cell. It converts glucose into energy that cells can use for daily functions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Shouldn't Be a Struggle - improved spacing */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.04em]">
              <span className="block">Learning Shouldn&apos;t Be</span>
              <span>a <em className="font-semibold not-italic text-[#3c8350]">Struggle.</em></span>
            </h2>
            <p className="text-lg sm:text-xl text-[#424843] leading-relaxed tracking-[-0.02em]">
              We understand the biggest challenges for students who learn differently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-[#cdcfcd] rounded-2xl overflow-hidden">
            <div className="bg-white p-6 sm:p-8 lg:p-10 min-h-[160px] flex items-center border-b md:border-b-0 md:border-r border-[#cdcfcd]">
              <div className="space-y-3">
                <p className="font-medium text-lg leading-snug">Complex Text</p>
                <p className="text-[#5d655f] leading-relaxed text-sm sm:text-base">Struggling to read complex, crowded text.</p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10 min-h-[160px] flex items-center border-b md:border-b-0 md:border-r border-[#cdcfcd]">
              <div className="space-y-3">
                <p className="font-semibold text-lg leading-snug">Word Decoding</p>
                <p className="text-[#5d655f] leading-relaxed text-sm sm:text-base">Difficulty decoding words and retaining information.</p>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10 min-h-[160px] flex items-center">
              <div className="space-y-3">
                <p className="font-semibold text-lg leading-snug">Writing Stress</p>
                <p className="text-[#5d655f] leading-relaxed text-sm sm:text-base">Stress and anxiety from writing lengthy assignments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Around Your Learning Style - improved vertical rhythm */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-[1127px] mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          <div className="text-center space-y-4 sm:space-y-6">
            <p className="text-[#7cac8a] text-sm font-semibold tracking-[0.1em] uppercase">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.04em]">
              <span className="block">Built Around</span>
              <span><em className="font-semibold not-italic text-[#3c8350]">Your</em> Learning Style</span>
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {/* Feature 01 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="text-[#eff0ef] text-7xl sm:text-8xl lg:text-[128px] leading-none tracking-[-0.04em]">01</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                  Simplified, readable text and structured explanations.
                </h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  AI-powered text simplification breaks down complex content into clear, digestible language without losing the meaning.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="size-[280px] sm:size-[320px] lg:size-[376px] rounded-full bg-[#193722] flex items-center justify-center shadow-lg">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <rect x="10" y="0" width="50" height="70" rx="2" fill="white" />
                    <rect x="15" y="5" width="15" height="60" fill="white" stroke="white" strokeWidth="2" />
                    <rect x="35" y="5" width="20" height="60" fill="white" />
                    <line x1="38" y1="10" x2="52" y2="10" stroke="#193722" strokeWidth="2" />
                    <line x1="38" y1="18" x2="52" y2="18" stroke="#193722" strokeWidth="2" />
                    <line x1="38" y1="26" x2="52" y2="26" stroke="#193722" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd]" />

            {/* Feature 02 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-1">
                <div className="size-[280px] sm:size-[320px] lg:size-[376px] rounded-full bg-[#193722] flex items-center justify-center shadow-lg">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <circle cx="45" cy="40" r="25" fill="white" />
                    <circle cx="45" cy="40" r="12" fill="#193722" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 lg:order-2">
                <div className="text-[#eff0ef] text-7xl sm:text-8xl lg:text-[128px] leading-none tracking-[-0.04em]">02</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                  Individual needs matter. You choose your perfect settings.
                </h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Fully customizable reader mode with font choices, spacing, color overlays, and contrast settings tuned to you.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd]" />

            {/* Feature 03 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="text-[#eff0ef] text-7xl sm:text-8xl lg:text-[128px] leading-none tracking-[-0.04em]">03</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                  Multisensory learning is key.
                </h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Text-to-speech, visual highlights, and interactive tools engage multiple senses to reinforce comprehension and memory.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="size-[280px] sm:size-[320px] lg:size-[376px] rounded-full bg-[#193722] flex items-center justify-center shadow-lg">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <path d="M45 15C30 15 20 25 20 40V55" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M45 15C60 15 70 25 70 40V55" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <rect x="15" y="45" width="10" height="20" rx="3" fill="white" />
                    <rect x="65" y="45" width="10" height="20" rx="3" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd]" />

            {/* Feature 04 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-1">
                <div className="size-[280px] sm:size-[320px] lg:size-[376px] rounded-full bg-[#193722] flex items-center justify-center shadow-lg">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <rect x="38" y="15" width="14" height="25" rx="7" fill="white" />
                    <path d="M30 35C30 42 36 48 45 48C54 48 60 42 60 35" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <line x1="45" y1="48" x2="45" y2="60" stroke="white" strokeWidth="3" />
                    <line x1="35" y1="60" x2="55" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 lg:order-2">
                <div className="text-[#eff0ef] text-7xl sm:text-8xl lg:text-[128px] leading-none tracking-[-0.04em]">04</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-[-0.03em]">
                  Reduce writing stress, leverage your verbal strengths.
                </h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Voice-to-text and AI writing assistance transform how you express ideas — no more blank-page anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps to Easier Learning */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <p className="text-[#7cac8a] text-sm font-semibold tracking-[0.1em] uppercase">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-[-0.04em]">
              <span className="block">Three Steps to</span>
              <span><em className="font-semibold not-italic text-[#3c8350]">Easier</em> Learning</span>
            </h2>
          </div>

          <div className="relative space-y-12 sm:space-y-16">
            <div className="absolute left-[30px] sm:left-[62px] top-[60px] sm:top-[80px] bottom-[60px] sm:bottom-[80px] w-px bg-[#cdcfcd] hidden md:block" />

            {/* Step 1 */}
            <div className="flex gap-6 sm:gap-8 lg:gap-28 items-start">
              <div className="flex-shrink-0 size-[60px] sm:size-[80px] lg:size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-xl sm:text-2xl lg:text-4xl tracking-tight shadow-md">
                1
              </div>
              <div className="flex-1 space-y-2 sm:space-y-4 pt-2 sm:pt-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight">Upload Your Content</h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Drop in any .docx, PDF, or image file. LexiAssist instantly processes your document and prepares it for accessible reading.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd] ml-[80px] sm:ml-[120px] lg:ml-[235px]" />

            {/* Step 2 */}
            <div className="flex gap-6 sm:gap-8 lg:gap-28 items-start">
              <div className="flex-shrink-0 size-[60px] sm:size-[80px] lg:size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-xl sm:text-2xl lg:text-4xl tracking-tight shadow-md">
                2
              </div>
              <div className="flex-1 space-y-2 sm:space-y-4 pt-2 sm:pt-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight">Choose Your Tools</h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Activate text-to-speech, AI simplification, or open Reader Mode to customize every aspect of your reading experience.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd] ml-[80px] sm:ml-[120px] lg:ml-[235px]" />

            {/* Step 3 */}
            <div className="flex gap-6 sm:gap-8 lg:gap-28 items-start">
              <div className="flex-shrink-0 size-[60px] sm:size-[80px] lg:size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-xl sm:text-2xl lg:text-4xl tracking-tight shadow-md">
                3
              </div>
              <div className="flex-1 space-y-2 sm:space-y-4 pt-2 sm:pt-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl leading-tight tracking-tight">Learn Effortlessly</h3>
                <p className="text-base sm:text-lg text-[#5d655f] leading-relaxed">
                  Read, study, and write with reduced stress and increased comprehension. Your learning, on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black from-[36%] to-[#011f0a] to-[88%]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src={imgCtaBackground} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 lg:space-y-16">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-[-0.04em]">
              Built on Evidence-Based Dyslexia Learning Research.
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#cdcfcd] leading-tight tracking-[-0.02em]">
              Unlock easier learning
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="white" href="/register">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-[1128px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo variant="black" />
          <p className="text-sm text-[#5d655f] text-center">
            ©2026 LexiAssist. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
