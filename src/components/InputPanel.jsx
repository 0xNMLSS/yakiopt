import { useTranslation } from 'react-i18next';
import { useSessionStore } from '../store/useSessionStore';

export default function InputPanel() {
  const { t } = useTranslation();
  const { params, setParam, resetToDefaults } = useSessionStore();

  return (
    <div className="glass dark:bg-slate-900/40 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-orange-400 to-red-500"></div>
      
      <div>
        <h2 className="text-2xl font-extrabold text-[var(--text-main)] tracking-tight">{t('planner.settings.title')}</h2>
        <p className="text-sm text-[var(--text-muted)] mt-1 pb-4 border-b border-gray-100 dark:border-slate-800">{t('planner.settings.description')}</p>
      </div>
      
      {/* Environment Section */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
          <span>🌡</span> {t('planner.settings.environment')}
        </h3>
        <div className="space-y-4">
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-red-600 dark:group-focus-within:text-red-400">{t('planner.params.grillSpeed')}</label>
            <select
              value={params.grillSpeed}
              onChange={(e) => setParam('grillSpeed', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-[var(--text-main)] shadow-sm appearance-none"
            >
              <option value="slow">{t('planner.options.slow')}</option>
              <option value="medium">{t('planner.options.medium')}</option>
              <option value="fast">{t('planner.options.fast')}</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-red-600 dark:group-focus-within:text-red-400">{t('planner.params.serveDelay')}</label>
            <select
              value={params.serveDelay}
              onChange={(e) => setParam('serveDelay', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-[var(--text-main)] shadow-sm appearance-none"
            >
              <option value="low">{t('planner.options.fastService')}</option>
              <option value="medium">{t('planner.options.medium')}</option>
              <option value="high">{t('planner.options.slowService')}</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-red-600 dark:group-focus-within:text-red-400">{t('planner.params.timeLimit')}</label>
            <div className="relative">
              <input
                type="number"
                value={params.timeLimitMin}
                onChange={(e) => setParam('timeLimitMin', parseInt(e.target.value) || 90)}
                min="30"
                max="180"
                className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all font-medium text-[var(--text-main)] shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] font-medium pointer-events-none">min</span>
            </div>
          </div>
          
          <div className="group">
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-sm font-semibold text-[var(--text-main)] transition-colors group-focus-within:text-red-600 dark:group-focus-within:text-red-400">{t('planner.params.fattyRatio')}</label>
              <span className="text-xs font-bold px-2 py-0.5 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-md">{(params.fattyRatio * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={params.fattyRatio}
              onChange={(e) => setParam('fattyRatio', parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="flex justify-between text-[11px] font-medium text-[var(--text-muted)] mt-2 uppercase tracking-wide">
              <span>Lean (0.0)</span>
              <span>Fatty (1.0)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Section */}
      <div className="space-y-5 pt-2">
        <h3 className="text-sm font-bold text-orange-500 dark:text-orange-400 uppercase tracking-wider flex items-center gap-2">
          <span>🧍</span> {t('planner.settings.userGroup')}
        </h3>
        <div className="space-y-4">
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-orange-500">{t('planner.params.appetite')}</label>
            <select
              value={params.appetite}
              onChange={(e) => setParam('appetite', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-[var(--text-main)] shadow-sm appearance-none"
            >
              <option value="small">{t('planner.options.small')}</option>
              <option value="medium">{t('planner.options.medium')}</option>
              <option value="large">{t('planner.options.large')}</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-orange-500">{t('planner.params.fatigueSensitivity')}</label>
            <select
              value={params.fatigueSensitivity}
              onChange={(e) => setParam('fatigueSensitivity', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-[var(--text-main)] shadow-sm appearance-none"
            >
              <option value="low">{t('planner.options.ironStomach')}</option>
              <option value="medium">{t('planner.options.medium')}</option>
              <option value="high">{t('planner.options.oilyFast')}</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-orange-500">{t('planner.params.eatingSpeed')}</label>
            <select
              value={params.eatingSpeed}
              onChange={(e) => setParam('eatingSpeed', e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-[var(--text-main)] shadow-sm appearance-none"
            >
              <option value="slow">{t('planner.options.slow')}</option>
              <option value="medium">{t('planner.options.medium')}</option>
              <option value="fast">{t('planner.options.fast')}</option>
            </select>
          </div>
          
          <div className="group">
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5 transition-colors group-focus-within:text-orange-500">{t('planner.params.groupSize')}</label>
            <div className="relative">
              <input
                type="number"
                value={params.groupSize}
                onChange={(e) => setParam('groupSize', parseInt(e.target.value) || 1)}
                min="1"
                max="6"
                className="w-full px-4 py-2.5 bg-gray-50/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all font-medium text-[var(--text-main)] shadow-sm"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] font-medium pointer-events-none">ppl</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex gap-3">
        <button
          onClick={resetToDefaults}
          className="flex-1 py-3 px-4 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 font-bold rounded-xl transition-all hover:text-gray-900 dark:hover:text-white active:scale-95"
        >
          {t('common.reset')}
        </button>
        <button
          onClick={() => {}}
          className="flex-[2] bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-500/30 transition-all hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
        >
          {t('common.calculate')}
        </button>
      </div>
    </div>
  );
}