import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffdf0] text-black font-sans selection:bg-pink-400 selection:text-white">
      
      {/* Navbar / Top spacer */}
      <header className="w-full px-6 py-4 border-b-4 border-black bg-yellow-300 flex justify-between items-center z-50 sticky top-0">
        <div className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          Jihoon's Lab
        </div>
        <div className="hidden sm:inline-flex items-center gap-2 font-bold bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0_0_#000] -rotate-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-black"></span>
          VIBE CODING 💻
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-24 overflow-hidden">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="flex-1 space-y-10 z-10 w-full mb-8 lg:mb-0">
            <h1 className="text-7xl sm:text-8xl lg:text-[120px] font-black uppercase tracking-tighter leading-[0.9] drop-shadow-[6px_6px_0_rgba(0,0,0,1)] lg:drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
              오지훈
            </h1>
            <div className="bg-pink-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-6 sm:p-8 max-w-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 cursor-default">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed break-keep">
                "안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다. 🚀"
              </p>
            </div>
            {/* Quick action button */}
            <div>
              <a href="#contact" className="inline-block bg-white text-black font-black text-2xl md:text-3xl border-4 border-black shadow-[6px_6px_0_0_#000] px-8 py-4 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#000] active:translate-y-2 active:shadow-none transition-all uppercase">
                Let's Talk &rarr;
              </a>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 px-4">
             {/* Abstract Graphic Element instead of profile photo */}
             <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-500 border-4 border-black shadow-[12px_12px_0_0_#000] rounded-full flex items-center justify-center rotate-6 hover:-rotate-12 transition-transform duration-500">
                   <span className="text-8xl sm:text-[120px] md:text-[150px] font-black text-white drop-shadow-[8px_8px_0_rgba(0,0,0,1)]">
                     OH
                   </span>
                </div>
                {/* Abstract decorative shapes */}
                <div className="absolute top-[-20px] right-[-10px] sm:right-[-30px] w-20 h-20 sm:w-28 sm:h-28 bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] -rotate-12 flex items-center justify-center text-4xl sm:text-6xl font-black rounded-xl">
                  !
                </div>
                <div className="absolute bottom-[-10px] left-[-20px] w-16 h-16 bg-red-400 border-4 border-black shadow-[4px_4px_0_0_#000] rotate-45 rounded-full"></div>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-10">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-black drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)] relative z-10">
              My Skills
            </h2>
            <div className="h-4 w-full bg-cyan-400 border-2 border-black -mt-4 relative z-0"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-emerald-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 sm:p-8 text-center font-black text-2xl hover:-translate-y-2 hover:bg-emerald-300 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer">
              Web Dev
            </div>
            <div className="bg-violet-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 sm:p-8 text-center font-black text-2xl hover:-translate-y-2 hover:bg-violet-300 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer">
               React
            </div>
            <div className="bg-orange-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 sm:p-8 text-center font-black text-2xl hover:-translate-y-2 hover:bg-orange-300 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer">
               Next.js
            </div>
            <div className="bg-rose-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 sm:p-8 text-center font-black text-2xl hover:-translate-y-2 hover:bg-rose-300 hover:shadow-[10px_10px_0_0_#000] transition-all cursor-pointer">
               Tailwind
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section id="contact" className="space-y-10 pt-12">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-black drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)] relative z-10">
              Connection
            </h2>
            <div className="h-4 w-full bg-yellow-400 border-2 border-black -mt-4 relative z-0"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
            <a href="#" className="flex-1 bg-black text-white border-4 border-black shadow-[8px_8px_0_0_#ec4899] p-8 flex flex-row items-center justify-center gap-6 font-black text-3xl md:text-4xl uppercase hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#ec4899] hover:bg-zinc-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              GitHub
            </a>
            <a href="#" className="flex-1 bg-white text-black border-4 border-black shadow-[8px_8px_0_0_#38bdf8] p-8 flex flex-row items-center justify-center gap-6 font-black text-3xl md:text-4xl uppercase hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#38bdf8] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              Email
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t-8 border-black bg-emerald-400 p-8 md:p-12 mt-16 text-center shadow-[inset_0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-black text-2xl md:text-3xl uppercase tracking-widest drop-shadow-[2px_2px_0_#fff]">&copy; 2026 오지훈</p>
          <div className="font-black mt-2 text-xl bg-black text-white inline-block px-4 py-2 rotate-2 border-2 border-black">
            STAY VIBING!
          </div>
        </div>
      </footer>
    </div>
  );
}
