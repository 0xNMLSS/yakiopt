import { useTranslation } from 'react-i18next';

export function StrategyCard({ phase }) {
  const { t } = useTranslation();

  const getPhaseStyles = (p) => {
    switch(p) {
      case 'I': return 'from-red-500 to-orange-500';
      case 'II': return 'from-orange-500 to-yellow-500';
      case 'III': return 'from-yellow-400 to-green-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-slate-900/50 group overflow-hidden">
      {/* Colorful side accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${getPhaseStyles(phase.phase)}`}></div>
      
      <div className="ml-2">
        <h3 className="text-xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
          {t(`phases.${phase.phase}.title`)}
        </h3>
        
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] w-14">{t('common.focus', 'Focus')}</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-slate-700/50 text-[var(--text-main)] rounded-lg text-sm font-semibold border border-gray-100 dark:border-slate-700">
              {t(`phases.${phase.phase}.label`)}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] w-14 shrink-0">{t('common.order', 'Order')}</span>
            <div className="flex flex-wrap gap-1.5">
              {phase.order.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700/30 dark:to-slate-700/50 border border-gray-200 dark:border-slate-700 text-[var(--text-main)] rounded-lg text-sm font-medium shadow-sm">
                  {t(`food.${item}`, item)}
                  {i < phase.order.length - 1 && <span className="text-gray-300 dark:text-slate-600 ml-2">→</span>}
                </span>
              ))}
            </div>
          </div>

          {phase.kimchiFreq && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-500 dark:text-green-400 w-14">{t('food.kimchi')}</span>
              <span className="px-3 py-1 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold border border-green-100 dark:border-green-500/20">
                {t('phases.II.kimchiDesc', { defaultValue: 'Every {{kappa}} meat portions', kappa: phase.kimchiFreq.toFixed(1) })}
              </span>
            </div>
          )}

          {phase.avoid && phase.avoid.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 dark:text-rose-300 w-14">{t('common.avoid', 'Avoid')}</span>
              <div className="flex flex-wrap gap-1.5">
                {phase.avoid.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 rounded-lg text-sm font-medium border border-rose-100 dark:border-rose-500/20">
                    {t(`food.${item}`, item)}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-50 dark:border-slate-700/50">
          <p className="text-sm font-medium text-[var(--text-muted)] italic flex items-start gap-2">
            <span className="text-gray-300 dark:text-slate-600 not-italic">💡</span>
            {t(`phases.${phase.phase}.tip`, { kappa: phase.kimchiFreq?.toFixed(1) })}
          </p>
        </div>
      </div>
    </div>
  );
}