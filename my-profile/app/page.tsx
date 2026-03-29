export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-zinc-950 font-sans">
      <main className="flex flex-col items-center gap-6 max-w-md text-center">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm">
          <span className="text-4xl font-bold text-zinc-400 dark:text-zinc-600">JH</span>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            오지훈
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            " 안녕하세요 ! 바이브 코딩을 배우고 있는 대학생입니다. "
          </p>
        </div>

        {/* Links or Social (Optional but simple) */}
        <div className="flex gap-4 pt-4">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="text-sm font-medium text-zinc-500">Learning Web Development</span>
        </div>

        <footer className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900 w-full text-zinc-400 text-sm">
          &copy; 2026 오지훈. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
