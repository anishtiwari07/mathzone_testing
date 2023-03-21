import { useContext, useState } from "react"
import styles from "./clickableOnYesNo.module.css"
import styles2 from "../../OnlineQuiz.module.css";
import { Pattern } from "./pattern"
import SolveButton from "../../SolveButton";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { ValidationContext } from "../../../MainOnlineQuiz/MainOnlineQuizPage";
import { ProgressBorder } from "../../../Modal2/modal2";
import { serializeResponse } from "../../../CommonJSFiles/gettingResponse";
import CustomAlertBoxMathZone from "../../../CommonJSFiles/CustomAlertBoxMathZone";
import ConditionOnProgressBar from "../../../CommonJsxComponent/ConditionOnProgressBar";
import { student_answer } from "../../../CommonJSFiles/ManupulateJsonData/oneDto2D";
// let data = {
//     operation: "addition",
//     type: "countofobjectsyesno",
//     questionName: "There are 7 lollipops and 6 candies",
//     row: 1,
//     col: 2,
//     answer: "yes",
//     questionContent: [
//       [
//         {
//           row: 1,
//           col: 1,
//           img: '\u003cimg src="https://s3.ap-south-1.amazonaws.com/begalileo-assets/CakesAndCandies/Rainbow%20Candy%20(lolipop).png"\u003e',
//           count: "12",
//         },
//         {
//           row: 1,
//           col: 2,
//           img: '\u003cimg src="https://s3.ap-south-1.amazonaws.com/begalileo-assets/CakesAndCandies/41.png"\u003e',
//           count: "6",
//         },
//       ],
//     ],
//     solution: { model: [{ val: "Yes" }] },
//   };
export const ClickableOnYesNo = ({data,meter}) => {
  meter=Number(meter)||0
  const {hasAnswerSubmitted,setHasAnswerSubmitted,setIsAnswerCorrect,setChoicesId,setStudentAnswerQuestion,isStudentAnswerResponse,setQuestionWithAnswer}=useContext(ValidationContext)

    const handleClick = (val) => {
        if(hasAnswerSubmitted||isStudentAnswerResponse)
        return
        if (data.answer === val) {
            setIsAnswerCorrect(true)
        } else {
            setIsAnswerCorrect(false)
        }
        
        setChoices(val)
        
    }
const [choices,setChoices]=useState("")
const [redAlert,setRedAlert]=useState(false)
const handleSubmit=()=>{
    if(hasAnswerSubmitted||isStudentAnswerResponse)
    return
    if(choices==="")
    {
      setRedAlert(true)
        return
    }
    setQuestionWithAnswer({...data,[student_answer]:choices})
    setHasAnswerSubmitted(true)
    
}
    return <div>
    {!isStudentAnswerResponse&&<SolveButton onClick={handleSubmit}/>}
    {redAlert&&!hasAnswerSubmitted&& <CustomAlertBoxMathZone />}
    <div id="studentAnswerResponse">
        <div className={styles2.questionName}>{HtmlParser(data?.questionName)}</div >
        {data?.upload_file_name&&<div><img src={data?.upload_file_name} alt="image not found"/></div>}
        <div>
         <ConditionOnProgressBar meter={meter} />
        </div>
        <div>
        <div style={{ display: 'flex' ,flexWrap:'wrap',gap:'4rem',margin:'2rem 0'}}>
            {data.questionContent[0].map((e, i) => {
                return <div className={styles.frame}  ><Pattern count={data.questionContent[0][i].count} imgUrl={data.questionContent[0][i].img} /></div>
            })}
        </div>

        <button className={styles.yesNoButton} onClick={() => {
            handleClick("yes")
        }} style={{background:(isStudentAnswerResponse&&String(data[student_answer])?.trim()==="yes")?"#b9c2fc":choices=="yes"?'#b9c2fc':'initial'}}>Yes</button>
        <button className={styles.yesNoButton} style={{background:(isStudentAnswerResponse&&String(data[student_answer])?.trim()==="no")?"#b9c2fc":choices=="no"?'#b9c2fc':'initial'}} onClick={() => {
            handleClick("no")
        }}>No</button>


       
    </div>
    </div>
    </div>
}