import React, {useState, useEffect, useRef} from "react";

const Canvas = ({lineWidth, lineColor}) => {
    const [canvasContext,
        setCanvasContext] = useState({});
    const [isDragging,
        setIsDragging] = useState(false);
    const [prevPosition,
        setPrevPosition] = useState(null);
    const [startingPoint,
        setStartingPoint] = useState(null);

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
            canvasContext.strokeStyle = lineColor;
        }
    }, [canvasContext, lineWidth, lineColor]);

    useEffect(() => {
        setCanvasContext(canvasRef.current.getContext('2d'));
    }, []);

    const onMouseMove = (e) => {
        if (isDragging) {
            var rect = canvasRef
                .current
                .getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (!prevPosition) {
                setPrevPosition({x, y});
            } else {
                canvasContext.clearRect(startingPoint.x, startingPoint.y, prevPosition.x - startingPoint.x, prevPosition.y - startingPoint.y);
                canvasContext.beginPath();
                canvasContext.rect(startingPoint.x, startingPoint.y, x - startingPoint.x, y - startingPoint.y);
                canvasContext.stroke();
                
                canvasContext.moveTo(prevPosition.x, prevPosition.y);
                canvasContext.lineTo(x, y);
                canvasContext.stroke();
                setPrevPosition({x, y});
            }
        }
    };

    const onMouseDown = (e) => {
        canvasContext.beginPath();
        const [x, y] = [e.clientX, e.clientY];
        canvasContext.moveTo(x, y);
        setIsDragging(true);
        setStartingPoint({x, y});
    }

    const onMouseUp = () => {
        setIsDragging(false);
        setPrevPosition(null);
    }

    return (<canvas
        ref={canvasRef}
        className="canvas"
        onMouseMove={onMouseMove}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}/>);
};

export default Canvas;