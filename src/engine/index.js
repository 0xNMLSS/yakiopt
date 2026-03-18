// engine/index.js
import { personalKappa } from './constants.js';
import { simulateFatigue } from './fatigue.js';
import { simulateUtility } from './utility.js';
import { simulateGrill } from './grill.js';
import { buildPolicy } from './scheduler.js';

export function runSimulation(params) {
  // Set defaults
  const defaults = {
    // Environment
    timeLimitMin:     90,
    grillSpeed:       'medium',   // 'slow' | 'medium' | 'fast'
    serveDelay:       'medium',   // 'low' | 'medium' | 'high'
    fattyRatio:       0.7,        // 0.0–1.0

    // User
    appetite:         'medium',   // 'small' | 'medium' | 'large'
    fatigueSensitivity: 'medium', // 'low' | 'medium' | 'high'
    eatingSpeed:      'medium',
    groupSize:        1,          // 1–6
  };

  // Merge params with defaults
  const finalParams = { ...defaults, ...params };

  const kappa = personalKappa(finalParams);
  const phaseBreaks = [0, 30, 65, 90];
  const policy = buildPolicy(finalParams);
  const fatigueTrace = simulateFatigue(finalParams);
  const utilityTrace = simulateUtility(finalParams);
  const grillTrace = simulateGrill(finalParams);
  
  // Simplified grill reset times (every 20 minutes for demo)
  const grillResetAt = [];
  for (let t = 20; t <= finalParams.timeLimitMin; t += 20) {
    grillResetAt.push(t);
  }
  
  // Simple stopping point logic (when utility drops below 0.4)
  const stoppingPoint = utilityTrace.timePoints.findIndex(
    (t, i) => utilityTrace.utilityValues[i] < 0.4
  );
  const stoppingTime = stoppingPoint !== -1 ? 
    utilityTrace.timePoints[stoppingPoint] : 
    finalParams.timeLimitMin;
  
  const summaryText = `Your optimal strategy: ${policy[1].tip}`;
  
  const bottleneck = utilityTrace.utilityValues[utilityTrace.timePoints.length-1] < 0.3 ? 
    'stomach' : 
    fatigueTrace.fatigueValues[fatigueTrace.timePoints.length-1] > 0.8 ? 
      'fatigue' : 
      'time';

  return {
    kappa:          kappa,
    phaseBreaks:    phaseBreaks,
    policy:         policy,
    fatigueTrace:   fatigueTrace,
    utilityTrace:   utilityTrace,
    grillTrace:     grillTrace,
    grillResetAt:   grillResetAt,
    stoppingPoint:  stoppingTime,
    summaryText:    summaryText,
    bottleneck:     bottleneck,
  };
}