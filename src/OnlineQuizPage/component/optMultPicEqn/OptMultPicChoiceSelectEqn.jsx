import React, { useContext } from "react";
import { useRef, useState, useEffect } from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import styles from "../OnlineQuiz.module.css";
import styled from "styled-components";
import { optionSelectStaticMathField } from "../HorizontalFillUpsEquationType/replaceDomeNode/ReplaceDomNode";
import parse from "html-react-parser"
import { ValidationContext } from "../../MainOnlineQuiz/MainOnlineQuizPage";
import { student_answer } from "../../CommonJSFiles/ManupulateJsonData/oneDto2D";
function OptMultPicChoiceSelectEqn({
  choices,
  setIsAnswerCorrect,
  setanswerHasSelected,
  isAnswerSelected,
  totalRows,
  totalColumns,
  inputRef,
  studentAnswer
}) {
const [flag,setFlag]=useState()
  let prevRef = useRef(0);
  const [rows, setRows] = useState([]);
const {isStudentAnswerResponse}=useContext(ValidationContext)

  useEffect(() => {
    let flag=false
    let rows = [];
   
    for (let i = 0; i < Number(totalRows); i++) {
      choices[i]?.map((item, j) => {
       
        item.row == i + 1 &&
          item.col == j + 1 &&
          rows.push({ ...item, show: false });
          let text=String(item?.value)
          if(text.includes('img')&&text.includes('src'))
          {
            flag=true
         
          }
      });
    }
  setFlag(flag)
  
    setRows([...rows]);
  }, []);

  const selectOptionHandler = (i) => {
if(isAnswerSelected||isStudentAnswerResponse)
return
    rows[prevRef.current].show = false;
    rows[i].show = true;
    prevRef.current = i;
    setRows([...rows])
  };
inputRef.current=rows
  return (
    <div>
      <div totalRow={flag?1:2} style={{
        display:"grid",
        width:"90%",
        marginTop: "1rem",
        gap: "1rem",
        position:"relative",
        gridTemplateColumns:`repeat(${flag?1:2},1fr)`

      }}>
        {rows?.map((item, i) => (
          <div style={
{
  gap: "4px",


    display: "flex",
    cursor: "pointer",
    flexWrap: "wrap",
    border:" 1px solid black",
    padding: "1rem",
    alignItems: "center",
    borderRadius: "5px"
}

          }onClick={() => selectOptionHandler(i)} className={`${(isStudentAnswerResponse&&String(item?.value)?.trim()==String(studentAnswer)?.trim()) ?styles.selectedChoiceType:item.show
            ? styles.selectedChoiceType
            : styles.prevSelectionAnswerSelection}`}> 
            {parse(item.value,optionSelectStaticMathField)}
          </div>
        ))}
      </div>
    </div>
  );
}
export default OptMultPicChoiceSelectEqn;



const Grid = styled.div`
  display: grid;
  width:90%;
  margin-top: 1rem;
  gap: 1rem;
  position:relative;
  grid-template-columns: repeat(${(props) => props.totalRow},1fr);
  max-height:auto;
  > div {
  
    gap: 4px;


    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    border: 1px solid black;
    padding: 1rem;
    align-items: center;
    border-radius: 5px;
  }
`;
const InlineStyles={
Grid:{
  display:"grid",
  width:"90%",
  marginTop: "1rem",
  gap: "1rem",
  position:"relative",
  '& > div':{
    background:'red',
    width:"300px",
    height:'400px',
  }
}
}