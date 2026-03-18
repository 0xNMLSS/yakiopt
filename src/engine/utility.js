// engine/utility.js
export function simulateUtility(params) {
  // U(t) simulation - simplified model
  const timePoints = [];
  const utilityValues = [];
  
  let utility = 1.0; // Start with high utility
  const timeLimit = params.timeLimitMin || 90;
  const appetite = params.appetite === 'large' ? 1.3 : 
                  params.appetite === 'small' ? 0.7 : 1.0;
  const fattyRatio = params.fattyRatio || 0.7;
  
  for (let t = 0; t <= timeLimit; t += 5) {
    // Utility decreases over time due to fatigue and diminishing returns
    const timeFactor = 1.0 - (t / timeLimit) * 0.3; // 30% decrease over time
    const satiationFactor = Math.max(0.3, 1.0 - (t / timeLimit) * 0.7); // Never goes below 0.3
    
    utility = appetite * fattyRatio * timeFactor * satiationFactor;
    utility = Math.max(0, utility); // Don't go negative
    
    timePoints.push(t);
    utilityValues.push(utility);
  }
  
  return { timePoints, utilityValues };
}