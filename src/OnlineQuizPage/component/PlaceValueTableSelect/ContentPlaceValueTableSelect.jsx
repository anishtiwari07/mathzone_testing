import React, { useContext } from "react"
import {useState} from "react"
import styles from "../OnlineQuiz.module.css";
import HtmlParser from "react-html-parser";
import { GridPlaceValueTable, HeaderRowPlaceValueTable } from "./PlaceValueTableChoiceType/PlaceValueTableSelectChoice/PlaceValueTableSelectChoice";
import HtmlParserComponent from "../../CommonJSFiles/HtmlParserComponent";
import { student_answer } from "../../CommonJSFiles/ManupulateJsonData/oneDto2D";
import { useEffect } from "react";
import { ValidationContext } from "../../MainOnlineQuiz/MainOnlineQuizPage";
export default function ContentPlaceValueTableSelect({content,inputRef,totalEmptyBox,hasAnswerSubmitted,questionHead,totalCols,input2Ref}){
  let [rowsData,setRowsData]=useState([]) 
  const {isStudentAnswerResponse}=useContext(ValidationContext)
  useEffect(()=>{
let arr=content?.map((row)=>row?.map((cols)=>{
let item={...cols,[student_answer]:""}
return item
}))

setRowsData([...arr])
   },[])
    const [state,setState]=useState({})
    const handleChange=(e,rows,cols)=>{
       
        let str=''+rows+cols
        setState({...state,
            [str]:e.target.value})
            rowsData[rows][cols][student_answer]=e.target.value
            setRowsData([...rowsData])
            
        }
       
        
        let currentIndex=0
        input2Ref.current=[...rowsData] 
return <div style={GridPlaceValueTable}>
    <div totalCols={totalCols} className={styles.PlaceValueTableSelectFlexBoxDragDropTypeFlexBox} style={HeaderRowPlaceValueTable}>
    {questionHead?.map((item,i)=><div key={i}
    style={{
      width:`Calc(100% / ${totalCols})`
    }}
    ><HtmlParserComponent value={item?.value} /></div>)}
    </div>
    {
content?.map((items,index)=><div key={index} totalCols={totalCols} className={styles.PlaceValueTableSelectFlexBoxDragDropTypeFlexBox}>
    {items.map((item,i)=>item?.isMissed!=='true'?<div key={i} style={{
      width:`Calc(100% / ${totalCols})`
    }}><HtmlParserComponent value={item.value} /></div>: <div key={i} style={{
      maxWidth:`Calc(100% / ${totalCols})`,
      width:`100%`
    }} ref={el=>{
        inputRef.current[currentIndex]=el
        if(currentIndex<totalEmptyBox-1)
        currentIndex=currentIndex+1
    }} value={item.value}><input type="text" value={isStudentAnswerResponse?item[student_answer]:state[`${index}${i}`]?state[`${index}${i}`]:''} onChange={(e)=>{handleChange(e,index,i)}} disabled={hasAnswerSubmitted||isStudentAnswerResponse}/></div>)}
</div>)
    }
</div>
}
