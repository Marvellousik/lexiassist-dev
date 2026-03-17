import { Link } from 'react-router';
import svgPaths from '../../imports/svg-kyjk689txb';
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from '../../imports/svg-afs49';
import imgRectangle9 from 'figma:asset/ec9f20a6dde2af4d8bbb4ba6c62194cc146a41d0.png';
import imgFrame127 from 'figma:asset/ab8d6a9743d4e4b36d8deaeeb53ecfe1e606935d.png';

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

// Button Component
function Button({ children, variant = 'primary', to }: { children: React.ReactNode; variant?: 'primary' | 'white'; to?: string }) {
  const baseClasses = "rounded-full px-8 py-3 md:px-12 md:py-4 font-semibold text-base transition-all hover:scale-105";
  const variantClasses = variant === 'primary' 
    ? "bg-[#377749] text-white" 
    : "bg-white text-[#272a28]";
  
  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variantClasses} inline-block text-center`}>
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

export default function LandingPage() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-[1128px]">
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-10 py-4 flex items-center justify-between">
          <Logo variant="black" />
          <div className="flex items-center gap-4">
            <Button variant="white" to="/signin">Login</Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-40">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-12 max-w-[526px]">
            <div className="space-y-4">
              <h1 className="text-8xl leading-none tracking-[-3.84px] font-normal">
                <span className="block">Read. </span>
                <span className="block text-[#3c8350]">Understand.</span>
                <span className="block"> Write. Easier.</span>
              </h1>
              <p className="text-2xl text-[#5d655f] leading-tight tracking-[-0.48px]">
                Lexi Assist is designed to make reading, studying, and writing significantly easier for students who learn differently.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="primary">Get Started</Button>
              <Button variant="white">Get Started</Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-[918px] -mr-40">
            <div className="absolute h-[1132px] left-[-50px] top-[-28px] w-[900px]">
              <div className="absolute inset-0 bg-[#d9d9d9]">
                <img alt="Student reading" className="absolute h-full w-full object-cover" src={imgRectangle9} />
              </div>
            </div>
            <div className="absolute bg-[#193722] h-[918px] left-[2px] opacity-69 top-0 w-[722px]" />
            
            {/* Floating Card */}
            <div className="absolute h-[333px] left-[179px] top-[275px] w-[334px]">
              <div className="absolute border-2 border-white left-0 size-[296px] top-0" />
              <div className="absolute bg-white flex flex-col items-start left-[36px] pb-16 pl-[54px] pr-[38px] pt-[39px] size-[298px] top-[35px]">
                <div className="space-y-8">
                  <p className="font-semibold text-lg text-[#5d655f]">
                    Simplified Reading Mode
                  </p>
                  <p className="text-base text-[#5d655f] leading-relaxed">
                    The mitochondria is often called the powerhouse of the cell. It converts glucose into energy that cells can use for daily functions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Shouldn't Be a Struggle */}
      <section className="py-24 px-4 md:px-40">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-7">
            <h2 className="text-5xl leading-none tracking-[-1.92px]">
              <p className="mb-0">Learning Shouldn't Be</p>
              <p>a <span className="font-semibold text-[#3c8350]">Struggle.</span></p>
            </h2>
            <p className="text-xl text-[#424843] leading-tight tracking-[-0.4px]">
              We understand the biggest challenges for students who learn differently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-white border-[0.5px] border-[#cdcfcd] p-10 h-[193px] flex items-center">
              <div className="space-y-4">
                <p className="font-medium text-lg leading-relaxed">Complex Text</p>
                <p className="text-[#5d655f] leading-relaxed">Struggling to read complex, crowded text.</p>
              </div>
            </div>
            <div className="bg-white border-[0.5px] border-[#cdcfcd] p-10 h-[193px] flex items-center">
              <div className="space-y-4">
                <p className="font-semibold text-lg leading-relaxed">Word Decoding</p>
                <p className="text-[#5d655f] leading-relaxed">Difficulty decoding words and retaining information.</p>
              </div>
            </div>
            <div className="bg-white border-[0.5px] border-[#cdcfcd] p-10 h-[193px] flex items-center">
              <div className="space-y-4">
                <p className="font-semibold text-lg leading-relaxed">Writing Stress</p>
                <p className="text-[#5d655f] leading-relaxed">Stress and anxiety from writing lengthy assignments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Around Your Learning Style */}
      <section className="bg-white py-24 px-4 md:px-40">
        <div className="max-w-[1127px] mx-auto space-y-24">
          <div className="text-center space-y-7">
            <p className="text-[#7cac8a] text-sm font-semibold tracking-[1.68px] uppercase">
              OUR APPROACH
            </p>
            <h2 className="text-5xl leading-none tracking-[-1.92px]">
              <p className="mb-0">Built Around</p>
              <p><span className="font-semibold text-[#3c8350]">Your</span> Learning Style</p>
            </h2>
          </div>

          <div className="space-y-28">
            {/* Feature 01 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="text-[#eff0ef] text-[128px] leading-none tracking-[-5.12px]">01</div>
                <h3 className="text-4xl leading-tight tracking-[-1.6px]">
                  Simplified, readable text and structured explanations.
                </h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  AI-powered text simplification breaks down complex content into clear, digestible language without losing the meaning.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-[376px] rounded-full bg-[#193722] flex items-center justify-center">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex lg:order-1">
                <div className="size-[376px] rounded-full bg-[#193722] flex items-center justify-center">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <circle cx="45" cy="40" r="25" fill="white" />
                    <circle cx="45" cy="40" r="12" fill="#193722" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 lg:order-2">
                <div className="text-[#eff0ef] text-[128px] leading-none tracking-[-5.12px]">02</div>
                <h3 className="text-4xl leading-tight tracking-[-1.6px]">
                  Individual needs matter. You choose your perfect settings.
                </h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Fully customizable reader mode with font choices, spacing, color overlays, and contrast settings tuned to you.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd]" />

            {/* Feature 03 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="text-[#eff0ef] text-[128px] leading-none tracking-[-5.12px]">03</div>
                <h3 className="text-4xl leading-tight tracking-[-1.6px]">
                  Multisensory learning is key.
                </h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Text-to-speech, visual highlights, and interactive tools engage multiple senses to reinforce comprehension and memory.
                </p>
              </div>
              <div className="flex justify-end">
                <div className="size-[376px] rounded-full bg-[#193722] flex items-center justify-center">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex lg:order-1">
                <div className="size-[376px] rounded-full bg-[#193722] flex items-center justify-center">
                  <svg width="90" height="80" viewBox="0 0 90 80" fill="none">
                    <rect x="38" y="15" width="14" height="25" rx="7" fill="white" />
                    <path d="M30 35C30 42 36 48 45 48C54 48 60 42 60 35" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <line x1="45" y1="48" x2="45" y2="60" stroke="white" strokeWidth="3" />
                    <line x1="35" y1="60" x2="55" y2="60" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4 lg:order-2">
                <div className="text-[#eff0ef] text-[128px] leading-none tracking-[-5.12px]">04</div>
                <h3 className="text-4xl leading-tight tracking-[-1.6px]">
                  Reduce writing stress, leverage your verbal strengths.
                </h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Voice-to-text and AI writing assistance transform how you express ideas — no more blank-page anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps to Easier Learning */}
      <section className="py-24 px-4 md:px-40">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-7">
            <p className="text-[#7cac8a] text-sm font-semibold tracking-[1.68px] uppercase">
              PROCESS
            </p>
            <h2 className="text-5xl leading-none tracking-[-1.92px]">
              <p className="mb-0">Three Steps to</p>
              <p><span className="font-semibold text-[#3c8350]">Easier</span> Learning</p>
            </h2>
          </div>

          <div className="relative space-y-16">
            <div className="absolute left-[62px] top-[80px] bottom-[80px] w-px bg-[#cdcfcd] hidden md:block" />

            {/* Step 1 */}
            <div className="flex gap-28 items-start">
              <div className="flex-shrink-0 size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-4xl tracking-tight">
                1
              </div>
              <div className="flex-1 space-y-4 pt-6">
                <h3 className="text-2xl leading-tight tracking-tight">Upload Your Content</h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Drop in any .docx, PDF, or image file. LexiAssist instantly processes your document and prepares it for accessible reading.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd] ml-[235px]" />

            {/* Step 2 */}
            <div className="flex gap-28 items-start">
              <div className="flex-shrink-0 size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-4xl tracking-tight">
                2
              </div>
              <div className="flex-1 space-y-4 pt-6">
                <h3 className="text-2xl leading-tight tracking-tight">Choose Your Tools</h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Activate text-to-speech, AI simplification, or open Reader Mode to customize every aspect of your reading experience.
                </p>
              </div>
            </div>

            <div className="border-t border-[#cdcfcd] ml-[235px]" />

            {/* Step 3 */}
            <div className="flex gap-28 items-start">
              <div className="flex-shrink-0 size-[123px] rounded-full bg-[#193722] flex items-center justify-center text-white text-4xl tracking-tight">
                3
              </div>
              <div className="flex-1 space-y-4 pt-6">
                <h3 className="text-2xl leading-tight tracking-tight">Learn Effortlessly</h3>
                <p className="text-lg text-[#5d655f] leading-relaxed">
                  Read, study, and write with reduced stress and increased comprehension. Your learning, on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black from-[36%] to-[#011f0a] to-[88%]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src={imgFrame127} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-6xl text-white leading-none tracking-[-2.24px]">
              Built on Evidence-Based Dyslexia Learning Research.
            </h2>
            <p className="text-3xl text-[#cdcfcd] leading-tight tracking-[-0.64px]">
              Unlock easier learning
            </p>
          </div>
          <div className="flex justify-center">
            <Button variant="white">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 md:px-40">
        <div className="max-w-[1128px] mx-auto flex items-center justify-between">
          <Logo variant="black" />
          <p className="text-sm text-[#5d655f] text-center">
            @2026 LexiAssist. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
