import React, {useState} from 'react';
import {HuePicker} from 'react-color';
import Canvas from '../Components/Canvas'
import './App.css';

const App = () => {
  const [lineWidth,
    setLineWidth] = useState(1);
  const [lineColor,
    setLineColor] = useState('#fff');

  const onLineWidthChange = e => setLineWidth(e.target.value);

  const onLineColorChange = color => setLineColor(color.hex);

  return (
    <div className="canvas-container">
      <div>
        <input type="number" onChange={onLineWidthChange}/>
        <HuePicker color={lineColor} onChangeComplete={onLineColorChange}/>
      </div>
      <Canvas lineColor={lineColor} lineWidth={lineWidth} />
    </div>
  );
}

export default App;
