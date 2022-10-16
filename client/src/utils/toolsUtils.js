import { AiOutlineSave } from "react-icons/ai"
import { BsBrushFill, BsCircle, BsEraserFill, BsSlashLg } from "react-icons/bs"
import { BiRectangle, BiRedo, BiUndo } from "react-icons/bi"

export const getIcon = (iconName) => {
  switch (iconName) {
    case 'brush': return <BsBrushFill size={25} />
    case 'rect': return <BiRectangle size={25} />
    case 'circle': return <BsCircle size={25} />
    case 'eraser': return <BsEraserFill size={25} />
    case 'line': return <BsSlashLg size={25} />
    case 'undo': return <BiUndo size={25} />
    case 'redo': return <BiRedo size={25} />
    case 'save': return <AiOutlineSave size={25} />
    default: return ''
  }
}

export const getMouseCoordinates = (mouseEvent) => {
  return ({
    mouseX: mouseEvent.pageX - mouseEvent.target.offsetLeft,
    mouseY: mouseEvent.pageY - mouseEvent.target.offsetTop,
  })
}

