import { useEffect } from 'react';
import { useSessionStore } from '../store/useSessionStore';
import InputPanel from '../components/InputPanel';
import OutputPanel from '../components/OutputPanel';

export default function Planner() {
  const { params, results, runSimulation, setParam, resetToDefaults } = useSessionStore();

  // Load params from URL hash on mount
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    if (hashParams.toString()) {
      const loadedParams = {
        timeLimitMin: parseInt(hashParams.get('timeLimitMin')) || 90,
        grillSpeed: hashParams.get('grillSpeed') || 'medium',
        serveDelay: hashParams.get('serveDelay') || 'medium',
        fattyRatio: parseFloat(hashParams.get('fattyRatio')) || 0.7,
        appetite: hashParams.get('appetite') || 'medium',
        fatigueSensitivity: hashParams.get('fatigueSensitivity') || 'medium',
        eatingSpeed: hashParams.get('eatingSpeed') || 'medium',
        groupSize: parseInt(hashParams.get('groupSize')) || 1
      };
      Object.keys(loadedParams).forEach(key => {
        setParam(key, loadedParams[key]);
      });
    }
  }, [setParam]);

  // Update URL hash and run simulation when params change (debounced)
  useEffect(() => {
    const handler = setTimeout(() => {
      // Update URL hash
      const newHash = new URLSearchParams();
      newHash.set('timeLimitMin', params.timeLimitMin);
      newHash.set('grillSpeed', params.grillSpeed);
      newHash.set('serveDelay', params.serveDelay);
      newHash.set('fattyRatio', params.fattyRatio);
      newHash.set('appetite', params.appetite);
      newHash.set('fatigueSensitivity', params.fatigueSensitivity);
      newHash.set('eatingSpeed', params.eatingSpeed);
      newHash.set('groupSize', params.groupSize);
      window.location.hash = newHash.toString();

      // Run simulation
      runSimulation();
    }, 150);

    return () => clearTimeout(handler);
  }, [params.timeLimitMin, params.grillSpeed, params.serveDelay, params.fattyRatio, 
       params.appetite, params.fatigueSensitivity, params.eatingSpeed, params.groupSize, 
       runSimulation]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Panel: Inputs */}
          <div className="w-full md:w-1/3 space-y-6">
            <InputPanel />
          </div>
          
          {/* Right Panel: Outputs */}
          <div className="w-full md:w-2/3 space-y-6">
            <OutputPanel 
              results={results} 
              params={params}
            />
          </div>
        </div>
      </div>
    </div>
  );
}