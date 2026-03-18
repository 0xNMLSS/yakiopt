import { useSessionStore } from '../store/useSessionStore';

export default function InputPanel() {
  const { params, setParam, resetToDefaults } = useSessionStore();

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 sm:p-8 space-y-8 relative overflow-hidden">
      {/* Decorative gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-400 to-red-500"></div>
      
      <div>
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">Session Settings</h2>
        <p className="text-sm text-gray-500 mt-1 pb-4 border-b border-gray-100">Dial in your yakiniku parameters to generate the perfect strategy.</p>
      </div>
      
      {/* Environment Section */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider flex items-center gap-2">
          <span>🌡</span> Environment
        </h3>
        <div className="space-y-4">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-red-600">Grill Speed</label>
            <select
              value={params.grillSpeed}
              onChange={(e) => setParam('grillSpeed', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-gray-700 shadow-sm appearance-none"
            >
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Fast</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-red-600">Serve Delay</label>
            <select
              value={params.serveDelay}
              onChange={(e) => setParam('serveDelay', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-gray-700 shadow-sm appearance-none"
            >
              <option value="low">Low (Fast Service)</option>
              <option value="medium">Medium</option>
              <option value="high">High (Slow Service)</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-red-600">Time Limit (minutes)</label>
            <div className="relative">
              <input
                type="number"
                value={params.timeLimitMin}
                onChange={(e) => setParam('timeLimitMin', parseInt(e.target.value) || 90)}
                min="30"
                max="180"
                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-gray-700 shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none">min</span>
            </div>
          </div>
          
          <div className="group">
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-semibold text-gray-700 transition-colors group-focus-within:text-red-600">Fatty Meat Ratio</label>
              <span className="text-xs font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-md">{(params.fattyRatio * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={params.fattyRatio}
              onChange={(e) => setParam('fattyRatio', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="flex justify-between text-[11px] font-medium text-gray-400 mt-2 uppercase tracking-wide">
              <span>Lean (0.0)</span>
              <span>Fatty (1.0)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Section */}
      <div className="space-y-5 pt-2">
        <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider flex items-center gap-2">
          <span>🧍</span> You & Your Group
        </h3>
        <div className="space-y-4">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-orange-500">Appetite Level</label>
            <select
              value={params.appetite}
              onChange={(e) => setParam('appetite', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-gray-700 shadow-sm appearance-none"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-orange-500">Fatigue Sensitivity</label>
            <select
              value={params.fatigueSensitivity}
              onChange={(e) => setParam('fatigueSensitivity', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-gray-700 shadow-sm appearance-none"
            >
              <option value="low">Low (Iron Stomach)</option>
              <option value="medium">Medium</option>
              <option value="high">High (Get oily fast)</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-orange-500">Eating Speed</label>
            <select
              value={params.eatingSpeed}
              onChange={(e) => setParam('eatingSpeed', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-gray-700 shadow-sm appearance-none"
            >
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Fast</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 transition-colors group-focus-within:text-orange-500">Group Size</label>
            <div className="relative">
              <input
                type="number"
                value={params.groupSize}
                onChange={(e) => setParam('groupSize', parseInt(e.target.value) || 1)}
                min="1"
                max="6"
                className="w-full px-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-gray-700 shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none">ppl</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="pt-6 border-t border-gray-100 flex gap-3">
        <button
          onClick={resetToDefaults}
          className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 font-bold rounded-xl transition-all hover:text-gray-900 active:scale-95"
        >
          Reset
        </button>
        <button
          onClick={() => {
            // Already handled by debounced runSimulation in Planner
          }}
          className="flex-[2] bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/30 transition-all hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}