import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <div className="relative group">
      <select
        value={i18n.language.split('-')[0]}
        onChange={handleLanguageChange}
        className="appearance-none bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-bold py-2.5 pl-4 pr-10 rounded-xl border border-transparent dark:border-slate-700 hover:text-red-600 dark:hover:text-red-400 transition-all cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/20"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-900">
             {lang.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
}
