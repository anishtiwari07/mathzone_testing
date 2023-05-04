import React, { useContext, useEffect, useState } from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import styled from "styled-components";
import HtmlParserComponent from "../../CommonJSFiles/HtmlParserComponent";
import { student_answer } from "../../CommonJSFiles/ManupulateJsonData/oneDto2D";
import { ValidationContext } from "../../MainOnlineQuiz/MainOnlineQuizPage";
import styles from "../OnlineQuiz.module.css";
export default function LongDivisionKeyingChoiceType({
  inputRef,
  content,
  totalRows,
  hasAnswerSubmitted,
}) {
  const [row, setRow] = useState([]);
  const { isStudentAnswerResponse } = useContext(ValidationContext);
  const handleChange = (e, rows, cols) => {
    row[rows][cols].dropVal = e.target.value;
    if (row[rows][cols].dropVal == "") {
      row[rows][cols].show = false;
    } else row[rows][cols].show = true;
    setRow([...row]);
  };

  useEffect(() => {
    let arr = [];
    arr=Object.assign([],content)
    arr=arr.map((item)=>{
      return item?.map((items)=>{
        return {...items,show:false}
      })
    })

    setRow([...arr]);
  }, []);
  inputRef.current = row;

  return <div style={{width:'fit-content'}}>
   { row?.map((items, index) => (
    <div key={index} className={styles.LongDivisonDragDropFlexBox}>
      {items?.map((item, i) =>
        item.isMissed !== "true" ? (
          <div className={styles.LongDivisonDragDropFlexBox3}  style={{
              width:`calc((100% - ${(items.length-1)*2}rem) / ${items.length})`,borderBottom:`${(index%2===0&&i>0)?1:0}px solid indigo`,
              borderLeft:`${(index>0&&i===1)?1:0}px solid indigo`,padding:10
             }}>
           
            <div>
              <b>
                <HtmlParserComponent value={item?.value} />
              </b>
            </div>
          </div>
        ) : (
          <div className={styles.LongDivisonDragDropFlexBox3}  style={{
              width:`calc((100% - ${(items.length-1)*2}rem) / ${items.length})`,borderBottom:`${(index%2===0&&i>0)?1:0}px solid indigo`,
              borderLeft:`${(index>0&&i===1)?1:0}px solid indigo`,padding:10
             }}>
            <div>{HtmlParser(item.imgvalue)}</div>
            <div>
              <div>
                {
                  <input
                    style={InlineCss.Input}
                    value={
                      isStudentAnswerResponse
                        ? item[student_answer]
                        : row[index][i]?.dropVal
                    }
                    onChange={(e) => {
                      handleChange(e, index, i);
                    }}
                    disabled={hasAnswerSubmitted || isStudentAnswerResponse}
                  />
                }
              </div>
            </div>
          </div>
        )
      )}
    </div>
  ))
}
  </div>

}


const InlineCss = {
  Input: {
    height: "30px",
    textAlign: "center",
    width: "50px",
  },
};
