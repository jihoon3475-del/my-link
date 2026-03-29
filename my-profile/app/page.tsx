import React from 'react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-zinc-950 font-sans overflow-hidden selection:bg-emerald-500/30 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

      <main className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Glassmorphism Profile Card */}
        <div className="bg-zinc-900/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 shadow-2xl flex flex-col items-center gap-8 transition-all duration-500 hover:border-white/20 hover:shadow-emerald-500/10 w-full">
          
          {/* Avatar Section */}
          <div className="relative group cursor-pointer mt-4">
            {/* Animated Glow Behind Avatar */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            {/* Avatar Container */}
            <div className="relative w-32 h-32 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center shadow-inner overflow-hidden">
              <span className="text-5xl font-black bg-gradient-to-br from-emerald-300 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">JH</span>
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
              오지훈
            </h1>
            <p className="text-zinc-400 font-medium leading-relaxed max-w-[280px] mx-auto break-keep">
              "안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다."
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Web Developer
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Learning React
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 w-full pt-6 border-t border-white/5">
            <a href="#" className="p-3 bg-white/5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300" aria-label="Mail">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
          </div>
        </div>

        <footer className="mt-8 text-center text-zinc-600 text-xs font-medium tracking-wide">
          &copy; 2026 오지훈. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
