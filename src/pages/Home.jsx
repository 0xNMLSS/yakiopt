import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="text-center max-w-3xl relative z-10 glass rounded-3xl p-10 md:p-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-6 tracking-tight drop-shadow-sm">
          YakiOpt
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Optimize Your Yakiniku Experience
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate strategy calculator for all-you-can-eat yakiniku. Maximize your utility and beat meat fatigue with science!
        </p>
        <Link 
          to="/planner" 
          className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1 transform ring-2 ring-white ring-offset-2 ring-offset-transparent"
        >
          Calculate My Strategy
        </Link>
        <div className="mt-8 flex items-center justify-center space-x-2">
          <span className="h-px w-8 bg-gray-300"></span>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Based on Kimchi Constant <span className="text-red-500 font-bold">(κ = 2.72)</span>
          </p>
          <span className="h-px w-8 bg-gray-300"></span>
        </div>
      </div>
    </div>
  );
}