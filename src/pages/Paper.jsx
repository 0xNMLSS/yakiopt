import { Link } from 'react-router-dom';

export default function Paper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="w-full max-w-2xl text-center glass rounded-3xl p-10 md:p-16 relative z-10 shadow-xl border border-white/60">
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 text-3xl shadow-sm border border-red-200/50">
          📄
        </div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-6 tracking-tight">
          The Kimchi Constant Paper
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed font-medium">
          Read the full research and mathematical foundations behind YakiOpt's algorithms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.notion.so/On-the-Kimchi-Constant-A-Unified-Framework-for-Satiety-Constrained-Resource-Optimization-in-All-You-327398361d44816d830cfe2119e7281d?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform ring-2 ring-white ring-offset-2 ring-offset-transparent"
          >
            View Paper on Notion
          </a>
          <Link
            to="/"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 font-bold py-3.5 px-8 rounded-full border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 transform"
          >
            Go Back Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium">
          Tip: You can also access this by clicking the <strong className="text-gray-500">κ</strong> number 3 times in the planner.
        </p>
      </div>
    </div>
  );
}