import React from 'react'
import '../styles/toolbar.scss'
import { getIcon } from '../utils/toolsUtils'

const Tool = ({ toolName, onClick }) => {
  return (
    <button className={`tool ${toolName}`} onClick={onClick}>
      {getIcon(toolName)}
    </button>
  )
}

export default Tool