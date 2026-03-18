import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function UtilityChart({ utilityTrace, grillTrace }) {
  if (!utilityTrace || !utilityTrace.timePoints || utilityTrace.timePoints.length === 0) {
    return <div className="text-center py-8">Loading utility data...</div>;
  }

  const data = utilityTrace.timePoints.map((time, index) => ({
    time,
    utility: utilityTrace.utilityValues[index] || 0,
    grill: grillTrace ? (grillTrace.grillValues[index] || 0) : 0
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Utility and Grill Quality Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: 'Time (min)', position: 'insideBottom' }} />
          <YAxis label={{ value: 'Level (0-1)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="utility" stroke="#10b981" name="Utility" />
          <Line type="monotone" dataKey="grill" stroke="#f59e0b" name="Grill Quality" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}