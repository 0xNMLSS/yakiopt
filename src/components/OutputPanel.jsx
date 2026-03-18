import { useTranslation } from 'react-i18next';
import { KappaGauge } from './OutputPanel/KappaGauge.jsx';
import { PhaseTimeline } from './OutputPanel/PhaseTimeline.jsx';
import { StrategyCard } from './OutputPanel/StrategyCard.jsx';
import { FatigueChart } from './OutputPanel/FatigueChart.jsx';
import { UtilityChart } from './OutputPanel/UtilityChart.jsx';

export default function OutputPanel({ results }) {
  const { t } = useTranslation();

  if (!results) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{t('results.placeholder')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Results Summary with premium styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-50/90 to-orange-50/90 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-900/30 p-8 shadow-sm backdrop-blur-md">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center text-xl">
              🎯
            </div>
            <h2 className="text-2xl font-black text-red-700 dark:text-red-400 tracking-tight">{t('results.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <KappaGauge kappa={results.kappa.toFixed(2)} />
                <div>
                  <div className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-1">{t('results.kappaLabel')}</div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white leading-none">κ = {results.kappa.toFixed(2)}</div>
                  <p className="text-xs text-[var(--text-muted)] mt-2 font-medium">{t('results.kappaSub')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center gap-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl p-5 border border-white/50 dark:border-slate-800/50">
              <div className="flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <div>
                  <div className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase">{t('common.bottleneck')}</div>
                  <div className="text-md font-bold text-gray-800 dark:text-gray-200 mt-1 leading-tight">{t(`bottlenecks.${results.bottleneck}`)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background glow for summary */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-red-200/30 dark:bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            {t('results.phasesTitle', 'Execution Phases')}
          </h3>
          <div className="space-y-6">
            {results.policy.map((phase, idx) => (
              <StrategyCard key={idx} phase={phase} />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            {t('results.chartsTitle', 'Performance Metrics')}
          </h3>
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
      </div>
    </div>
  );
}