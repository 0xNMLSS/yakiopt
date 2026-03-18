import { KappaGauge } from './OutputPanel/KappaGauge.jsx';
import { PhaseTimeline } from './OutputPanel/PhaseTimeline.jsx';
import { StrategyCard } from './OutputPanel/StrategyCard.jsx';
import { FatigueChart } from './OutputPanel/FatigueChart.jsx';
import { UtilityChart } from './OutputPanel/UtilityChart.jsx';

export default function OutputPanel({ results }) {
  if (!results) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Adjust parameters and click "Run Simulation" to see your optimal yakiniku strategy</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with Kappa */}
      <div className="flex flex-col items-center text-center space-y-4">
        <KappaGauge kappa={results.kappa} />
        <p className="text-lg text-gray-600">Your personal Kimchi Constant (κ)</p>
      </div>
      
      {/* Main content grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <PhaseTimeline 
            phaseBreaks={results.phaseBreaks} 
            stoppingPoint={results.stoppingPoint}
          />
          
          {/* Strategy Cards */}
          <div className="space-y-4">
            {results.policy.map((phase, index) => (
              <StrategyCard 
                key={index} 
                phase={phase} 
                kappa={results.kappa}
              />
            ))}
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <FatigueChart 
            fatigueTrace={results.fatigueTrace} 
            utilityTrace={results.utilityTrace}
          />
          <UtilityChart 
            utilityTrace={results.utilityTrace}
            grillTrace={results.grillTrace}
          />
        </div>
      </div>
      
      {/* Summary section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-50/90 to-orange-50/90 border border-red-100 p-8 shadow-sm backdrop-blur-md">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
        <h3 className="text-xl font-extrabold text-red-800 mb-3 flex items-center gap-2">
          <span>💡</span> Strategy Summary
        </h3>
        <p className="text-red-900 leading-relaxed font-medium text-lg">{results.summaryText}</p>
        <div className="mt-5 inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-red-100 shadow-sm">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Main Bottleneck</span>
          <span className="font-bold text-red-600 tracking-tight">{results.bottleneck}</span>
        </div>
      </div>
    </div>
  );
}