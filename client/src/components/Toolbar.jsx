import React from 'react';
import canvasState from '../store/canvasState'
import toolsState from '../store/toolsState';
import '../styles/toolbar.scss'
import Brush from '../tools/Brush'
import Circle from '../tools/Circle'
import Eraser from '../tools/Eraser'
import Line from '../tools/Line'
import Rect from '../tools/Rect'
import Tool from './Tool'

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <Tool toolName='brush' onClick={() => toolsState.setTool(new Brush(canvasState.canvas))} />
      <Tool toolName='rect' onClick={() => toolsState.setTool(new Rect(canvasState.canvas))} />
      <Tool toolName='circle' onClick={() => toolsState.setTool(new Circle(canvasState.canvas))} />
      <Tool toolName='eraser' onClick={() => toolsState.setTool(new Eraser(canvasState.canvas))} />
      <Tool toolName='line' onClick={() => toolsState.setTool(new Line(canvasState.canvas))} />
      <Tool toolName='undo' onClick={() => canvasState.undo()} />
      <Tool toolName='redo' onClick={() => canvasState.redo()} />
      <Tool toolName='save' onClick={() => { }} />
    </div>
  )
}

export default Toolbar