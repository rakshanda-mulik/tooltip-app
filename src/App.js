import { useState } from 'react';
import './App.css';
import Tooltip from './components/tooltip';
import TooltipPositionSelector from './components/tooltip-position-selector';

function App() {
  const [position, setPosition] = useState("top");

  return (
    <div className="App">
      <TooltipPositionSelector position={position} setPosition={setPosition} />
      <Tooltip position={position} />
    </div>
  );
}


export default App;
