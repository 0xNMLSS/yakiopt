// engine/constants.js
export const KAPPA_BASE = 2.72;

export function personalKappa(params) {
  let k = KAPPA_BASE;
  if (params.fatigueSensitivity === 'high')  k *= 0.75;  // needs more kimchi
  if (params.fatigueSensitivity === 'low')   k *= 1.30;
  if (params.fattyRatio > 0.8)               k *= 0.85;
  if (params.groupSize > 3)                  k *= 0.90;  // social mimicry
  return parseFloat(k.toFixed(2));
}