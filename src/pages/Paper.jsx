export default function Paper() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          The Kimchi Constant Paper
        </h1>
        <p className="text-gray-600 mb-6">
          Read the full research behind YakiOpt
        </p>
        <a 
          href="https://www.notion.so/kimchikonstant/YakiOpt-The-Kimchi-Constant-Engineering-Spec-327398361d44818ea9d7dd75330eacb2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-shadow duration-300 hover:shadow-lg inline-block"
        >
          View Paper on Notion
        </a>
        <p className="mt-6 text-sm text-gray-500">
          Or <a href="#" className="text-blue-600 hover:underline">click the κ number 3 times in the planner</a> for quick access
        </p>
      </div>
    </div>
  );
}