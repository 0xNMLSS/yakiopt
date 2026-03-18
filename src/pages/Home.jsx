import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSelector from '../components/LanguageSelector';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden transition-colors duration-500">
      {/* Settings Positioned Top-Right */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        <LanguageSelector />
        <ThemeToggle />
      </div>

      {/* Decorative background shapes with motion */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 bg-orange-200 dark:bg-orange-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-rose-200 dark:bg-rose-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="text-center max-w-4xl relative z-10 glass dark:bg-slate-900/60 dark:border-slate-800 rounded-3xl p-10 md:p-16 transition-colors duration-300">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-widest shadow-sm">
          🔥 {t('common.tagline')}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
          <Trans i18nKey="hero.title">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Kimchi Constant</span>
          </Trans>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed font-medium">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/planner" 
            className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-lg rounded-2xl shadow-xl shadow-red-500/30 transition-all hover:shadow-red-500/50 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 overflow-hidden text-center"
          >
            <span className="relative z-10">{t('common.calculate')}</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
          </Link>
          
          <Link 
            to="/paper" 
            className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 font-bold text-lg rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-all active:scale-95 text-center"
          >
            {t('common.readPaper')}
          </Link>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-slate-800">
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {t('hero.basedOn')}
          </p>
        </div>
      </div>
    </div>
  );
}