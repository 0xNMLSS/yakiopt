import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          YakiOpt: Optimize Your Yakiniku Experience
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The ultimate strategy calculator for all-you-can-eat yakiniku
        </p>
        <Link 
          to="/planner" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-shadow duration-300 hover:shadow-lg"
        >
          Calculate My Strategy
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          Based on the Kimchi Constant (κ = 2.72) research
        </p>
      </div>
    </div>
  );
}