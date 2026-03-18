// src/store/useSessionStore.js
import { create } from 'zustand';
import { runSimulation } from '../engine/index.js';

export const useSessionStore = create((set, get) => ({
  // Parameters
  params: {
    // Environment
    timeLimitMin: 90,
    grillSpeed: 'medium',
    serveDelay: 'medium',
    fattyRatio: 0.7,

    // User
    appetite: 'medium',
    fatigueSensitivity: 'medium',
    eatingSpeed: 'medium',
    groupSize: 1,
  },
  
  // Results
  results: null,
  
  // Actions
  setParam: (key, value) => set(state => ({
    params: {
      ...state.params,
      [key]: value
    }
  }), false),
  
  setParams: (newParams) => set(state => ({
    params: {
      ...state.params,
      ...newParams
    }
  }), false),
  
  runSimulation: () => {
    const results = runSimulation(get().params);
    set({ results });
    return results;
  },
  
  resetToDefaults: () => set({
    params: {
      timeLimitMin: 90,
      grillSpeed: 'medium',
      serveDelay: 'medium',
      fattyRatio: 0.7,
      appetite: 'medium',
      fatigueSensitivity: 'medium',
      eatingSpeed: 'medium',
      groupSize: 1,
    },
    results: null
  })
}));