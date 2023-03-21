import React, { useContext, useEffect } from "react";
import { useState, useRef } from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import styled from "styled-components";
import HtmlParserComponent from "../../../CommonJSFiles/HtmlParserComponent";
import { student_answer } from "../../../CommonJSFiles/ManupulateJsonData/oneDto2D";
import { ValidationContext } from "../../../MainOnlineQuiz/MainOnlineQuizPage";
import styles from "../../OnlineQuiz.module.css";
export default function SelectChoice({
  choices,
  inputRef,
  answerHasSelected,
  content,
  totalRows,studentAnswer
}) {
  const [row, setRow] = useState([]);
  let [choicesState, setChoicesState] = useState([]);
 
  const {isStudentAnswerResponse}=useContext(ValidationContext)
  let prev = useRef(0);
  useEffect(() => {
    let arr2 = [];
    choices?.map((item) => {
      let obj = { value: item, show: false };
      arr2.push({ ...obj });
    });

    let arr = [];
    totalRows = Number(totalRows) || 0;
  
    for (let i = 0; i < totalRows; i++) {
      let temp = [];
      content?.map((item) => {
      
        item.row == i && temp.push(item);
      });
      arr.push(temp);
    }
    setRow([...arr]);
    
    setChoicesState([...arr2]);
  }, []);
  const handleChoiceSelection = (i) => {
    if (answerHasSelected||isStudentAnswerResponse) return;
    choicesState[prev.current].show = false;
    choicesState[i].show = true;
    setChoicesState([...choicesState]);
    prev.current = i;
  };
  inputRef.current = choicesState;
  
  return (
    <>
      {row?.map((items, index) => (
        <div
          className={styles.HorizontalPictureSelectChoiceFlexBox}
          key={index}
        >
          {items?.map((item, i) =>
            item.isMissed !== "true" ? (
              <div key={i}><HtmlParserComponent value={item?.value}/></div>
            ) : (
              <div value={item.value} key={i}>
                <input style={InlineCss.Input} disabled={true} />
              </div>
            )
          )}
        </div>
      ))}
      <div
        className={`${styles.flex} ${styles.flexGap2rem} ${styles.flexWrap} ${styles.boxChoices}`}
      >
        {choicesState?.map((value, i) => (
          <div
            className={`${styles.flex} ${styles.choiceType} ${
              styles.selectChoicesFont
            } ${(isStudentAnswerResponse&&String(value?.value)?.trim()==String(studentAnswer)?.trim())?styles.selectedChoiceType:
              value.show
                ? styles.selectedChoiceType
                : styles.prevSelectionAnswerSelection
            }`}
            key={i}
            onClick={() => handleChoiceSelection(i)}
          >
            <div>
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
export const FlexBox = styled.div`
  display: flex;

  //justify-content:center;
  align-items: center;
  gap: 10px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Input = styled.input`
  height: 50px;
  text-align: center;
  width: 80px;
`;
const InlineCss = {
  Input: {
    height: "50px",
    textAlign: "center",
    width: "80px",
  },
};
