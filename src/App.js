import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [canvasContext,
    setCanvasContext] = useState({});
  const [lineWidth,
    setLineWidth] = useState(1);
  const [isDragging,
    setIsDragging] = useState(false);
  const [prevPosition,
    setPrevPosition] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    if (canvasContext) {
      canvasContext.lineWidth = lineWidth;
    }
  }, [canvasContext, lineWidth]);

  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext('2d'));
  }, []);

  const onMouseMove = (e) => {
    if (isDragging) {
      var rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (!prevPosition) {
        setPrevPosition({x, y});
      } else {
        canvasContext.moveTo(prevPosition.x, prevPosition.y);
        canvasContext.lineTo(x, y);
        canvasContext.stroke();
        setPrevPosition({x, y});
      }
    }
  };

  const onMouseDown = (e) => {
    canvasContext.beginPath();
    canvasContext.moveTo(e.clientX, e.clientY);
    setIsDragging(true);
  }

  const onMouseUp = () => {
    setIsDragging(false);
    setPrevPosition(null);
  }

  const onLineWidthChange = (e) => setLineWidth(e.target.value);

  return (
    <div className="canvas-container">
      <div>
        <input type="number" onChange={onLineWidthChange}/>
      </div>
      <canvas
        ref={canvasRef}
        className="canvas"
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}/>
    </div>
  );
}

export default App;
