import React from 'react';
import {HuePicker} from 'react-color';
import './toolbar.css';

const Toolbar = ({lineColor, lineWidth, onLineWidthChange, onLineColorChange}) => (
    <div className="toolbar">
        <input className="line-width-input" value={lineWidth} type="number" onChange={onLineWidthChange}/>
        <HuePicker className="line-color-picker" color={lineColor} onChangeComplete={onLineColorChange}/>
    </div>
);

export default Toolbar;