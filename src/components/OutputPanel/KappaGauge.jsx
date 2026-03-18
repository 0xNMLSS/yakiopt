export function KappaGauge({ kappa }) {
  return (
    <div className="relative w-32 h-32">
      {/* Circular background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border-8 border-red-200 dark:border-red-900/30 flex items-center justify-center transition-colors">
          <div className="text-4xl font-black text-red-600 dark:text-red-400">
            {kappa}
          </div>
        </div>
      </div>
    </div>
  );
}