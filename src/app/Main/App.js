import React, {useState} from 'react';
import Canvas from '../Components/Canvas'
import './App.css';
import Toolbar from '../Components/Toolbar/Toolbar';

const App = () => {
  const [lineWidth,
    setLineWidth] = useState(1);
  const [lineColor,
    setLineColor] = useState('#fff');

  const onLineWidthChange = e => setLineWidth(e.target.value);

  const onLineColorChange = color => setLineColor(color.hex);

  return (
    <div className="canvas-container">
      <Toolbar
        lineColor={lineColor}
        lineWidth={lineWidth}
        onLineColorChange={onLineColorChange}
        onLineWidthChange={onLineWidthChange}/>
      <Canvas lineColor={lineColor} lineWidth={lineWidth}/>
    </div>
  );
}

export default App;
