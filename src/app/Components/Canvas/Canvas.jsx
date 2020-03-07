import React, {useState, useEffect, useRef} from "react";
import {Box} from '@material-ui/core';

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
            const canvasParentBoundingBox = canvasRef.current.parentNode.getBoundingClientRect(); 

            canvasRef.current.width = canvasParentBoundingBox.width;
            canvasRef.current.height = canvasParentBoundingBox.height;
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
                canvasContext.moveTo(prevPosition.x, prevPosition.y);
                canvasContext.lineTo(x, y);
                canvasContext.stroke();
                setPrevPosition({x, y});
            }
        }
    };

    const onMouseDown = (e) => {
        canvasContext.beginPath();
        const [x,
            y] = [e.clientX, e.clientY];
        canvasContext.moveTo(x, y);
        setIsDragging(true);
        setStartingPoint({x, y});
    }

    const onMouseUp = () => {
        setIsDragging(false);
        setPrevPosition(null);
    }

    return (
        <div style={{flex: 0.95}}>
            <canvas
                ref={canvasRef}
                className="canvas"
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}/>
        </div>
    );
};

export default Canvas;