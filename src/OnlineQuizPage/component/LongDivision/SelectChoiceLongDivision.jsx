import React, { useEffect } from "react";
import { useState, useRef } from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import styled from "styled-components";
import styles from "../OnlineQuiz.module.css";
export default function LongDivisonSelectChoice({
  choices,
  inputRef,
  answerHasSelected,
  content,
  totalRows,
}) {
  const [row, setRow] = useState([]);
  let [choicesState, setChoicesState] = useState([]);
  let prev = useRef(0);
  useEffect(() => {
    let arr2 = [];
    choices?.map((item) => {
      let obj = { value: item, show: false };
      arr2.push({ ...obj });
    });

    let arr = [];
    arr=Object.assign([],content)
    arr=arr.map((item)=>{
      return item?.map((items)=>{
        return {...items,show:false}
      })
    })
    setRow([...arr]);
    setChoicesState([...arr2]);
  }, []);
  const handleChoiceSelection = (i) => {
    if (answerHasSelected) return;
    choicesState[prev.current].show = false;
    choicesState[i].show = true;
    setChoicesState([...choicesState]);
    prev.current = i;
  };
  inputRef.current = choicesState;
  return (
    <>
   <div style={{width:'fit-content'}}>
   {row?.map((items, index) => (
        <div
          key={index}
          className={styles.LongDivisonDragDropFlexBox}
        >
          {items?.map((item, i) =>
            item.isMissed !== "true" ? (
              <div
              key={i}
                className={styles.LongDivisonDragDropFlexBox3}
                style={{   width:`calc((100% - ${(items.length-1)*2}rem) / ${items.length})`,borderBottom:`${(index%2===0&&i>0)?1:0}px solid indigo`,
                borderLeft:`${(index>0&&i===1)?1:0}px solid indigo`,padding:10}}
              >
               
                <div>
                  <b>
                    {typeof item?.value == "string"
                      ? HtmlParser(item?.value)
                      : item?.value}
                  </b>
                </div>
              </div>
            ) : (
              <div
              key={i}
                className={styles.LongDivisonDragDropFlexBox3}
                style={{   width:`calc((100% - ${(items.length-1)*2}rem) / ${items.length})`,borderBottom:`${(index%2===0&&i>0)?1:0}px solid indigo`,
                borderLeft:`${(index>0&&i===1)?1:0}px solid indigo`,padding:10}}
              >
              
              
                  <div>{<input style={InlineCss.Input} disabled={true} value={"?"}/>}</div>
                
              </div>
            )
          )}
        </div>
      ))}
   </div>
      <div
        className={`${styles.flex} ${styles.flexGap2rem} ${styles.flexWrap} ${styles.boxChoices}`}
      >
        {choicesState?.map((value, i) => (
          <div
          key={i}
            className={`${styles.flex} ${styles.choiceType} ${
              styles.selectChoicesFont
            } ${
              value.show
                ? styles.selectedChoiceType
                : styles.prevSelectionAnswerSelection
            }`}
            
            onClick={() => handleChoiceSelection(i)}
          >
            <div className="mathzone-circle-selectbox">
              {" "}
              <b>{String.fromCharCode(65 + i)}</b>
            </div>
            <div key={i}>{HtmlParser(value?.value)}</div>
          </div>
        ))}
      </div>
    </>
  );
}
const InlineCss = {
  Input: {
    height: "30px",
    textAlign: "center",
    width: "50px",
  },
};
