import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [canvasContext,
    setCanvasContext] = useState({});
  const [isDragging,
    setIsDragging] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext('2d'));
  }, []);

  const onMouseMove = (e) => {
    if (isDragging) {
      const x = e.pageX - canvasRef.current.offsetLeft;
      const y = e.pageY - canvasRef.current.offsetTop;

      canvasContext.beginPath();
      canvasContext.arc(x, y, 40, 0, 2 * Math.PI);
      canvasContext.stroke();
    }
  };

  const onMouseDown = () => setIsDragging(true);

  const onMouseUp = () => setIsDragging(false);

  return (
    <div className="App">
      The app is running
      <canvas
        ref={canvasRef}
        className="canvas"
        height="500"
        width="500"
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}/>
    </div>
  );
}

export default App;
