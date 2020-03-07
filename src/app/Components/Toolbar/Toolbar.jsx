import React from 'react';
import {SketchPicker} from 'react-color';
import './toolbar.css';

const Toolbar = ({lineColor, lineWidth, onLineWidthChange, onLineColorChange}) => (
    <div className="toolbar">
        Line Width: <input className="line-width-input" value={lineWidth} type="number" onChange={onLineWidthChange}/>
        <SketchPicker className="line-color-picker" color={lineColor} onChangeComplete={onLineColorChange}/>
    </div>
);

export default Toolbar;