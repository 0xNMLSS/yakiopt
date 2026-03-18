import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Planner from './pages/Planner.jsx';
import Paper from './pages/Paper.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;