import React, {useState} from 'react';
import Canvas from '../Components/Canvas'
import Toolbar from '../Components/Toolbar';
import constants from "../constants";
import './App.css';

const {DEFAULT_LINE_COLOR, DEFAULT_LINE_WIDTH} = constants;

const App = () => {
  const [lineWidth,
    setLineWidth] = useState(DEFAULT_LINE_WIDTH);
  const [lineColor,
    setLineColor] = useState(DEFAULT_LINE_COLOR);

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
