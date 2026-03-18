export function StrategyCard({ phase, kappa }) {
  const getPhaseColor = (phaseLetter) => {
    switch (phaseLetter) {
      case 'I': return 'bg-red-50 border-l-4 border-red-500';
      case 'II': return 'bg-orange-50 border-l-4 border-orange-500';
      case 'III': return 'bg-yellow-50 border-l-4 border-yellow-500';
      default: return 'bg-gray-50 border-l-4 border-gray-300';
    }
  };

  const getPhaseTitle = (phaseLetter) => {
    switch (phaseLetter) {
      case 'I': return 'Phase I: Exploitation';
      case 'II': return 'Phase II: Maintenance';
      case 'III': return 'Phase III: Graceful Exit';
      default: return `Phase ${phaseLetter}`;
    }
  };

  return (
    <div className={`${getPhaseColor(phase.phase)} rounded-lg p-4`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {getPhaseTitle(phase.phase)}
      </h3>
      <p className="text-sm text-gray-600 mb-2"><strong>Focus:</strong> {phase.label}</p>
      <p className="text-sm text-gray-600 mb-2"><strong>Order:</strong> {phase.order.join(' → ')}</p>
      {phase.kimchiFreq && (
        <p className="text-sm text-gray-600 mb-2"><strong>Kimchi Frequency:</strong> Every {phase.kimchiFreq} meat portions</p>
      )}
      {phase.avoid && phase.avoid.length > 0 && (
        <p className="text-sm text-gray-600 mb-2"><strong>Avoid:</strong> {phase.avoid.join(', ')}</p>
      )}
      <p className="text-xs text-gray-500 italic">{phase.tip}</p>
    </div>
  );
}