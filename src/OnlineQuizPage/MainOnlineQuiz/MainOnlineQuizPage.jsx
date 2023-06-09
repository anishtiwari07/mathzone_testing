import React, {
  useState,
  forwardRef,
  useContext,
} from "react";
import replaceJsonData from "../CommonJSFiles/replacingJsonData";
import AllFile from "../../components/AllFile";
import { serializeResponse } from "../CommonJSFiles/gettingResponse";
import {addStyles} from "../ExternalPackages"
export const ValidationContext = React.createContext("Auth Context");
export function ValidationContextProvider({ children }) {
  const [hasAnswerSubmitted, setHasAnswerSubmitted] = useState(false);
  let [responseUrl, setResponseUrl] = useState("");
  let [questionWithAnswer, setQuestionWithAnswer] = useState({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [choicesId, setChoicesId] = useState("");
  const [choices, setChoices] = useState("");
  const [studentAnswerQuestion, setStudentAnswerQuestion] = useState("");
  const [studentAnswerChoice, setStudentAnswerChoice] = useState("");
  const [currentIdentity, setCurrentIdentity] = useState("");
  const handleCurrentIdentity = (identity) => {
    setCurrentIdentity(identity);
  };
  const [isStudentAnswerResponse, setIsStudentAnswerResponse] = useState(false);
  const handleUpdateStudentAnswerResponse = (value) => {
    setIsStudentAnswerResponse(value);
  };
  const value = {
    hasAnswerSubmitted,
    setHasAnswerSubmitted,
    setIsAnswerCorrect,
    isAnswerCorrect,
    choicesId,
    setChoicesId,
    studentAnswerChoice,
    setStudentAnswerChoice,
    studentAnswerQuestion,
    setStudentAnswerQuestion,
    responseUrl,
    setResponseUrl,
    handleCurrentIdentity,
    currentIdentity,
    setQuestionWithAnswer,
    questionWithAnswer,
    handleUpdateStudentAnswerResponse,
    isStudentAnswerResponse,
    choices,
    setChoices,
  };
  
  return (
    <ValidationContext.Provider value={value}>
      {children}
    </ValidationContext.Provider>
  );
}
addStyles()
const StudentQuizDisplay = ({obj}) => {
  const {studentAnswerQuestion,setStudentAnswerQuestion,questionWithAnswer,setQuestionWithAnswer,handleUpdateStudentAnswerResponse,isStudentAnswerResponse,choices,choicesId}=useContext(ValidationContext)
  const checkData=(data)=>{
    let arr=["orc","ol",'oprc']
    let arr2=["Multiple choice","Fill in the blanks","multi select"]
    let arr3=["ckeditor"]
    if(arr.includes(data)){
      return serializeResponse("studentAnswerResponse")
    }
    else if(arr2.includes(data)){
      return choicesId
    }
    else if(arr3.includes(data)){
      return {html:studentAnswerQuestion,choices:choicesId}
    }
    let temp={}
    setQuestionWithAnswer((prev)=>{
      temp={...prev}
      return prev
      return
    })
    return temp
  }
  var temp = {};
  let operation = null;
  try {
    operation = obj?.question_data[0]?.operation;
    temp = JSON.parse(obj.question_data[0].question_text);
    temp = {
      ...temp,
      upload_file_name: obj.question_data[0]?.upload_file_name,
    };
  } catch (e) {
    temp = obj;
  }

  window.checkData=checkData
  window.handleUpdateStudentAnswerResponse=handleUpdateStudentAnswerResponse;
  
  return (
    <>
          <AllFile type={obj?.question_data[0]?.question_type} obj={obj} temp={temp} isResponse={isStudentAnswerResponse}/>  
    </>
  );
};
function RenderingQuizPage({
  obj,
}) {
  if (obj?.question_data && obj?.question_data[0]?.operation) {
    obj = replaceJsonData(obj);
  }
  return (
    <>
      
      <ValidationContextProvider>
        <StudentQuizDisplay
         obj={obj}
        />
      </ValidationContextProvider>
      
    </>
  );
}

const MainOnlineQuizPage = forwardRef(
  ({ props, obj, refreshQuestion }, ref) => {



    const [count, setCount] = useState(0);
    return <>
        <RenderingQuizPage obj={obj}/>
      </>

  }
);

export default MainOnlineQuizPage;
