import { KappaGauge } from './OutputPanel/KappaGauge.jsx';
import { PhaseTimeline } from './OutputPanel/PhaseTimeline.jsx';
import { StrategyCard } from './OutputPanel/StrategyCard.jsx';
import { FatigueChart } from './OutputPanel/FatigueChart.jsx';
import { UtilityChart } from './OutputPanel/UtilityChart.jsx';

export default function OutputPanel({ results, params }) {
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
      <div className="bg-red-50 border-l-4 border-red-500 p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-2">Strategy Summary</h3>
        <p className="text-red-700">{results.summaryText}</p>
        <p className="mt-2 text-sm text-gray-500">
          Main bottleneck: <span className="font-medium">{results.bottleneck}</span>
        </p>
      </div>
    </div>
  );
}