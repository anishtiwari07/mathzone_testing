import { useContext, useRef } from "react";
import { dragdropPointCordinate } from "./dragdropPointCordinate";

export function useScrollBar(){
    let scrollPositionRef=useRef()
    const timerRef=useRef(null)
    const handleDrag=(e)=>{
       return
      }
      const handleDragStart=(e)=>{
       return
        
      }
      return [handleDrag,handleDragStart]
}