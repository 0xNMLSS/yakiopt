import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useTranslation } from 'react-i18next';

export function UtilityChart({ utilityTrace, grillTrace }) {
  const { t } = useTranslation();

  if (!utilityTrace || !utilityTrace.timePoints || utilityTrace.timePoints.length === 0) {
    return <div className="text-center py-8">{t('charts.loadingData', 'Loading data...')}</div>;
  }

  const data = utilityTrace.timePoints.map((time, index) => ({
    time,
    utility: utilityTrace.utilityValues[index] || 0,
    grill: grillTrace ? (grillTrace.grillValues[index] || 0) : 0
  }));

  // Detect dark mode by checking HTML class
  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#94A3B8' : '#6B7280';
  const gridColor = isDark ? '#334155' : '#E5E7EB';

  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-5 transition-colors duration-300">
      <h4 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4 border-b border-gray-100 dark:border-slate-700/50 pb-3">
        {t('charts.utilityVsGrill', 'Utility vs Grill Quality')}
      </h4>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
          <XAxis dataKey="time" tick={{ fill: textColor, fontSize: 12 }} axisLine={{ stroke: gridColor }} tickLine={{ stroke: gridColor }} />
          <YAxis tick={{ fill: textColor, fontSize: 12 }} axisLine={{ stroke: gridColor }} tickLine={{ stroke: gridColor }} />
          <Tooltip 
            contentStyle={{ backgroundColor: isDark ? '#1E293B' : '#FFFFFF', borderColor: isDark ? '#334155' : '#E5E7EB', color: isDark ? '#F1F5F9' : '#1F2937', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
          />
          <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: textColor }} />
          <Line type="monotone" dataKey="utility" stroke="#10b981" strokeWidth={3} dot={false} name={t('charts.utility', 'Utility')} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="grill" stroke="#f59e0b" strokeWidth={3} dot={false} name={t('charts.grillQuality', 'Grill Quality')} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}