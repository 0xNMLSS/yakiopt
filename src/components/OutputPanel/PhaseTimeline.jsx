export function PhaseTimeline({ phaseBreaks, stoppingPoint }) {
  const phase1End = phaseBreaks[1] || 30;
  const phase2End = phaseBreaks[2] || 65;
  const timeLimit = phaseBreaks[3] || 90;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Phase Timeline</h3>
      <div className="relative h-12">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-300"></div>
        
        {/* Phase markers */}
        <div className="absolute inset-y-0 left-0 -translate-x-1/2 w-0.5 bg-red-500"></div>
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-red-500"></div>
        <div className="absolute inset-y-0 right-0 -translate-x-1/2 w-0.5 bg-red-500"></div>
        
        {/* Phase labels */}
        <div className="absolute bottom-full left-0 -translate-x-1/2 mb-1 text-xs text-gray-600">
          Phase I
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs text-gray-600">
          Phase II
        </div>
        <div className="absolute bottom-full right-0 -translate-x-1/2 mb-1 text-xs text-gray-600">
          Phase III
        </div>
        
        {/* Time markers */}
        <div className="absolute bottom-0 left-0 -translate-x-1/2 mb-1 text-xs text-gray-500">
          0min
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-1 text-xs text-gray-500">
          {phase1End}min
        </div>
        <div className="absolute bottom-0 right-0 -translate-x-1/2 mb-1 text-xs text-gray-500">
          {timeLimit}min
        </div>
        
        {/* Stopping point indicator */}
        {stoppingPoint !== null && stoppingPoint !== undefined && (
          <div 
            className={`absolute bottom-0 
              ${stoppingPoint < phase1End ? 'left-0' : 
                      stoppingPoint < phase2End ? 'left-1/2' : 'right-0'} 
              -translate-x-1/2 -translate-y-1/2 
              w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-500`}
          />
        )}
      </div>
    </div>
  );
}