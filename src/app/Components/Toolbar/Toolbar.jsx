import React from 'react';
import {HuePicker} from 'react-color';

const Toolbar = ({lineColor, lineWidth, onLineWidthChange, onLineColorChange}) => (
    <div>
        <input value={lineWidth} type="number" onChange={onLineWidthChange}/>
        <HuePicker color={lineColor} onChangeComplete={onLineColorChange}/>
    </div>
);

export default Toolbar;