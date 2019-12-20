import React, {useRef, useState, useEffect, useCallback} from 'react';
import './App.css';

const App = () => {
  const [canvasContext,
    setCanvasContext] = useState({});
  const [isDragging,
    setIsDragging] = useState(false);
  const [prevPosition,
    setPrevPosition] = useState(null);

  const canvasRef = useRef(null);

  const init = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    setCanvasContext(canvasRef.current.getContext('2d'));
    init();
  }, [init]);

  const onMouseMove = (e) => {
    if (isDragging) {
      var rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (!prevPosition) {
          setPrevPosition({x, y});
      } 
      else {
        canvasContext.moveTo(prevPosition.x ,prevPosition.y);
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

  return (
    <div className="canvas-container">
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
