// engine/grill.js
export function simulateGrill(params) {
  // G(t) degradation model - simplified
  const timePoints = [];
  const grillValues = [];
  
  let grillQuality = 1.0; // Start at full quality
  const timeLimit = params.timeLimitMin || 90;
  const grillSpeed = params.grillSpeed === 'fast' ? 1.5 : 
                    params.grillSpeed === 'slow' ? 0.7 : 1.0;
  const serveDelay = params.serveDelay === 'high' ? 1.3 : 
                    params.serveDelay === 'low' ? 0.7 : 1.0;
  
  for (let t = 0; t <= timeLimit; t += 5) {
    // Grill degrades over time, faster with higher grill speed
    const degradation = 0.005 * grillSpeed * serveDelay;
    grillQuality = Math.max(0.3, grillQuality - degradation); // Never below 0.3
    
    timePoints.push(t);
    grillValues.push(grillQuality);
  }
  
  return { timePoints, grillValues };
}