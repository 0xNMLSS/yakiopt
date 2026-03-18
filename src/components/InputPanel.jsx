import { useSessionStore } from '../store/useSessionStore';

export default function InputPanel() {
  const { params, setParam, resetToDefaults } = useSessionStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Yakiniku Session</h2>
      
      {/* Environment Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">🌡 Environment</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grill Speed</label>
            <select
              value={params.grillSpeed}
              onChange={(e) => setParam('grillSpeed', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Fast</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Serve Delay</label>
            <select
              value={params.serveDelay}
              onChange={(e) => setParam('serveDelay', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Limit (minutes)</label>
            <input
              type="number"
              value={params.timeLimitMin}
              onChange={(e) => setParam('timeLimitMin', parseInt(e.target.value) || 90)}
              min="30"
              max="180"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fatty Meat Ratio</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={params.fattyRatio}
              onChange={(e) => setParam('fattyRatio', parseFloat(e.target.value))}
              className="w-full"
            >
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Lean (0.0)</span>
              <span>Fatty (1.0)</span>
            </div>
            </input>
          </div>
        </div>
      </div>
      
      {/* User Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">🧍 You</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Appetite Level</label>
            <select
              value={params.appetite}
              onChange={(e) => setParam('appetite', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fatigue Sensitivity</label>
            <select
              value={params.fatigueSensitivity}
              onChange={(e) => setParam('fatigueSensitivity', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Eating Speed</label>
            <select
              value={params.eatingSpeed}
              onChange={(e) => setParam('eatingSpeed', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Fast</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
            <input
              type="number"
              value={params.groupSize}
              onChange={(e) => setParam('groupSize', parseInt(e.target.value) || 1)}
              min="1"
              max="6"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-200">
        <button
          onClick={() => {
            // The simulation will run automatically via useEffect in Planner when params change
            // This button is just for explicit triggering if needed
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-shadow duration-300 hover:shadow-lg text-lg"
        >
          Run Simulation
        </button>
        
        <button
          onClick={resetToDefaults}
          className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-shadow duration-200 hover:shadow-sm"
        >
          Reset to Defaults
        </button>
      </div>
    </div>
  );
}