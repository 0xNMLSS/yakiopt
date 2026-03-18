import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function FatigueChart({ fatigueTrace, utilityTrace }) {
  if (!fatigueTrace || !fatigueTrace.timePoints || fatigueTrace.timePoints.length === 0) {
    return <div className="text-center py-8">Loading fatigue data...</div>;
  }

  const data = fatigueTrace.timePoints.map((time, index) => ({
    time,
    fatigue: fatigueTrace.fatigueValues[index] || 0,
    utility: utilityTrace ? (utilityTrace.utilityValues[index] || 0) : 0
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Fatigue vs Utility Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Time (min)', position: 'insideBottom' }} />
          <YAxis label={{ value: 'Level (0-1)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="fatigue" stroke="#ef4444" name="Fatigue" />
          <Line type="monotone" dataKey="utility" stroke="#10b981" name="Utility" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}