// engine/scheduler.js
import { personalKappa } from './constants.js';

export function buildPolicy(params) {
  const kappa = personalKappa(params);
  return [
    {
      phase: 'I',
      label: 'Exploitation',
      range: [0, 30],
      order: ['wagyu', 'karubi', 'harami'],
      avoid: ['rice', 'soda', 'salad'],
      kimchiFreq: null,
      tip: 'Pure aggression. No palate resets yet — F(t) is still low.',
    },
    {
      phase: 'II',
      label: 'Maintenance',
      range: [30, 65],
      order: ['karubi', 'tontoro', 'kimchi'],
      kimchiFreq: kappa,
      tip: `Insert kimchi every ${kappa} meat portions. Reorder before finishing current batch.`,
    },
    {
      phase: 'III',
      label: 'Graceful Exit',
      range: [65, 90],
      order: ['tan', 'vegetables'],
      kimchiFreq: kappa * 0.7,
      tip: 'Monitor marginal utility. Stop when next piece costs more than it returns.',
    },
  ];
}