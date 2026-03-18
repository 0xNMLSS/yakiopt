// engine/fatigue.js
export function simulateFatigue(params) {
  // dF/dt simulation - simplified model
  const timePoints = [];
  const fatigueValues = [];
  
  let fatigue = 0;
  const timeLimit = params.timeLimitMin || 90;
  const fatigueSensitivity = params.fatigueSensitivity === 'high' ? 1.5 : 
                          params.fatigueSensitivity === 'low' ? 0.7 : 1.0;
  
  for (let t = 0; t <= timeLimit; t += 5) {
    // Base fatigue accumulation
    fatigue += 0.1 * fatigueSensitivity;
    
    // Cap at 1.0 (normalized)
    fatigue = Math.min(fatigue, 1.0);
    
    timePoints.push(t);
    fatigueValues.push(fatigue);
  }
  
  return { timePoints, fatigueValues };
}