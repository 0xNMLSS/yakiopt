export function StrategyCard({ phase }) {
  const getPhaseStyles = (phaseLetter) => {
    switch (phaseLetter) {
      case 'I': return 'from-red-500 to-rose-500';
      case 'II': return 'from-orange-500 to-amber-500';
      case 'III': return 'from-amber-400 to-yellow-500';
      default: return 'from-gray-400 to-slate-500';
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
    <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group overflow-hidden">
      {/* Colorful side accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${getPhaseStyles(phase.phase)}`}></div>
      
      <div className="ml-2">
        <h3 className="text-xl font-extrabold text-gray-800 mb-4 tracking-tight">
          {getPhaseTitle(phase.phase)}
        </h3>
        
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 w-14">Focus</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">{phase.label}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 w-14 shrink-0">Order</span>
            <div className="flex flex-wrap gap-1.5">
              {phase.order.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium shadow-sm">
                  {item}
                  {i < phase.order.length - 1 && <span className="text-gray-300 ml-2">→</span>}
                </span>
              ))}
            </div>
          </div>

          {phase.kimchiFreq && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-500 w-14">Kimchi</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-semibold border border-green-100">
                Every {phase.kimchiFreq} meat portions
              </span>
            </div>
          )}

          {phase.avoid && phase.avoid.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 w-14">Avoid</span>
              <div className="flex flex-wrap gap-1.5">
                {phase.avoid.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-rose-50 text-rose-700 rounded-lg text-sm font-medium border border-rose-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-50">
          <p className="text-sm font-medium text-gray-500 italic flex items-start gap-2">
            <span className="text-gray-300 not-italic">💡</span>
            {phase.tip}
          </p>
        </div>
      </div>
    </div>
  );
}