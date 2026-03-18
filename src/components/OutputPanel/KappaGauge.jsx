export function KappaGauge({ kappa }) {
  return (
    <div className="relative w-32 h-32">
      {/* Circular background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border-8 border-red-200 flex items-center justify-center">
          <div className="text-4xl font-bold text-red-600">
            {kappa}
          </div>
        </div>
      </div>
      
      {/* Tooltip/easter egg hint */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-xs text-gray-500">
        Click 3x for paper
      </div>
    </div>
  );
}