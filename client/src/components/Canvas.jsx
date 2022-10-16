import React, { useEffect, useRef } from 'react'
import '../styles/canvas.scss'
import { observer } from "mobx-react-lite"
import canvasState from '../store/canvasState'
import toolsState from '../store/toolsState'
import Brush from '../tools/Brush'

const Canvas = observer(() => {
  const canvasRef = useRef()

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolsState.setTool(new Brush(canvasRef.current))
  }, [])

  const onMouseUpHandler = () => canvasState.pushToUndoList(canvasRef.current.toDataURL())

  return (
    <div className='canvas-wrap'>
      <canvas
        className='canvas'
        onMouseUp={onMouseUpHandler}
        ref={canvasRef}
        width={800}
        height={600}
      />
    </div>
  )
})

export default Canvas