import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSessionStore } from '../store/useSessionStore';
import { Link } from 'react-router-dom';
import InputPanel from '../components/InputPanel';
import OutputPanel from '../components/OutputPanel';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';

export default function Planner() {
  const { t } = useTranslation();
  const { params, results, runSimulation, setParam } = useSessionStore();

  // Load params from URL hash on mount
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.toString()) {
      const loadedParams = {
        timeLimitMin: parseInt(hashParams.get('timeLimitMin')) || 90,
        grillSpeed: hashParams.get('grillSpeed') || 'medium',
        serveDelay: hashParams.get('serveDelay') || 'medium',
        fattyRatio: parseFloat(hashParams.get('fattyRatio')) || 0.7,
        appetite: hashParams.get('appetite') || 'medium',
        fatigueSensitivity: hashParams.get('fatigueSensitivity') || 'medium',
        eatingSpeed: hashParams.get('eatingSpeed') || 'medium',
        groupSize: parseInt(hashParams.get('groupSize')) || 1
      };
      Object.keys(loadedParams).forEach(key => {
        setParam(key, loadedParams[key]);
      });
    }
  }, [setParam]);

  // Update URL hash and run simulation when params change (debounced)
  useEffect(() => {
    const handler = setTimeout(() => {
      // Update URL hash
      const newHash = new URLSearchParams();
      newHash.set('timeLimitMin', params.timeLimitMin);
      newHash.set('grillSpeed', params.grillSpeed);
      newHash.set('serveDelay', params.serveDelay);
      newHash.set('fattyRatio', params.fattyRatio);
      newHash.set('appetite', params.appetite);
      newHash.set('fatigueSensitivity', params.fatigueSensitivity);
      newHash.set('eatingSpeed', params.eatingSpeed);
      newHash.set('groupSize', params.groupSize);
      window.location.hash = newHash.toString();

      // Run simulation
      runSimulation();
    }, 150);

    return () => clearTimeout(handler);
  }, [params.timeLimitMin, params.grillSpeed, params.serveDelay, params.fattyRatio, 
       params.appetite, params.fatigueSensitivity, params.eatingSpeed, params.groupSize, 
       runSimulation]);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* Sleek App Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              Y
            </div>
            <span className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              {t('common.appTitle')}
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/paper" className="hidden sm:block text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 font-semibold text-sm transition-colors py-2 px-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10">
              {t('common.readPaper')}
            </Link>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left Panel: Inputs */}
          <div className="w-full lg:w-[380px] shrink-0 relative lg:sticky lg:top-24">
            <InputPanel />
          </div>
          
          {/* Right Panel: Outputs */}
          <div id="results-panel" className="w-full lg:flex-1 min-w-0 scroll-mt-24">
            <OutputPanel 
              results={results} 
              params={params}
            />
          </div>
        </div>
      </main>
    </div>
  );
}