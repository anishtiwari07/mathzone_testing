import React, { useEffect } from "react";
import { DivBox, Grid, TextBox } from "./ORC";
import parse from "html-react-parser";
import styles from "../OnlineQuiz.module.css";
import { EditableMathField, StaticMathField } from "../../../../../ExternalPackages";
import { ProgressBorder } from "../../../../../Modal2/modal2";
import HtmlParser from "react-html-parser";
const disabledOrcAnswered = () => {
  let parent = document.getElementById("disabledOrcAnswered");
  if (!parent) return;
  let inputBoxes = document.querySelectorAll("input");
  for (let inputs of inputBoxes) inputs.disabled = true;
};
export default function DisabledTeacherOrcAnswered({
  obj,
  question_text,
  meter,
}) {
  meter = Number(meter) || 0;
  const optionSelect = {
    replace: (domNode) => {
      if (domNode?.attribs?.class) {
        let clsName = String(domNode?.attribs?.class);
        if (clsName.includes("mathquill-rendered-math")) {
          if (clsName.includes("mathquill-editable")) {
            return (
              <div>
                <StaticMathField>{domNode.attribs.title}</StaticMathField>
              </div>
            );
          }
          return (
            <StaticMathField>{domNode?.children[0]?.data}</StaticMathField>
          );
        }
      }
    },
  };
  useEffect(() => {
    disabledOrcAnswered();
  }, []);
  return (
    <div>
      <div style={{ clear: "both" }}>
        <div className={styles.questionName}>
          {parse(question_text, optionSelect)}
        </div>
        {obj?.upload_file_name && (
          <div>
            <img src={obj?.upload_file_name} alt="image not found" />
          </div>
        )}
        <div>
          <ProgressBorder meter={meter + 1}>
            <div></div>
          </ProgressBorder>
        </div>
        <div className={styles.contentParent}>
          <>
            {obj?.orc_oprc_data[0]?.column_headers &&
              obj?.orc_oprc_data[0]?.column_headers?.length > 0 && (
                <Grid totalCols={obj?.orc_oprc_data[0]?.column_headers?.length}>
                  {obj?.orc_oprc_data[0]?.column_headers?.map((item, i) => (
                    <div key={i}>{parse(item, optionSelect)}</div>
                  ))}
                  {obj?.orc_oprc_data[0]?.response?.map((items, i) => (
                    <DivBox className="droppableOrc" id={i}>
                      {items?.map((item, index) => (
                        <div style={{ cursor: "pointer" }}>
                          {parse(item, optionSelect)}
                        </div>
                      ))}
                    </DivBox>
                  ))}
                </Grid>
              )}
          </>
          <TextBox id="disabledOrcAnswered">
            {obj?.text && parse(obj?.text, optionSelect)}
          </TextBox>
        </div>
      </div>
      <div id={styles.fibAfterText}>
        {typeof obj?.after_question_text == "string"
          ? HtmlParser(obj?.after_question_text)
          : obj?.after_question_text}
      </div>
    </div>
  );
}
