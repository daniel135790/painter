import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState({});

  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext('2d'));
  }, []);

  const onMouseMove = (e) => {
    const x = e.pageX - canvasRef.current.offsetLeft; 
    const y = e.pageY - canvasRef.current.offsetTop; 

    canvasContext.beginPath();
    canvasContext.arc(x, y, 40, 0, 2 * Math.PI);
    canvasContext.stroke();
  };

  return (
    <div className="App">
      The app is running
      <canvas onMouseMove={onMouseMove} ref={canvasRef} className="canvas" height="500" width="500"></canvas>
    </div>
  );
}

export default App;
