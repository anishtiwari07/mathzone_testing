import { useEffect, useState } from "react";
import MainOnlineQuizPage from "./OnlineQuizPage/MainOnlineQuiz/MainOnlineQuizPage";
let arr = [
  { id: 96074, type: "Multiple choice" },
  { id: 93278, type: "True/False" },
  { id: 95221, type: "Fill in the blanks" },
  { id: 91542, type: "multi select" },
  { id: 94637, type: "ckeditor" },
  { id: 88439, type: "orc" },
  { id: 44618, type: "oprc" },
  { id: 42912, type: "ol" },
  { id: 52020, type: "horizontalpreviewclick" },
  { id: 77261, type: "horizontalnotsymbols" },
  { id: 94013, type: "matchobjectsvertical" },
  { id: 55106, type: "countontenframes" },
  { id: 65904, type: "count_tenframes_multiple" },
  { id: 55109, type: "tenframes" },
  { id: 52157, type: "questiontextoptions" },
  { id: 51923, type: "countofobjectsyesno" },
  { id: 51933, type: "randomarrangementdragdrop" },
  { id: 80549, type: "matchobjectshorizontal" },
  { id: 76148, type: "horizontalpicture" },
  { id: 95671, type: "options_multiple_pictures" },
  { id: 77018, type: "comparison_of_images" },
  { id: 84113, type: "compare_drag_operator" },
  { id: 66538, type: "base_block_images" },
  { id: 95682, type: "horizontal_fill_ups" },
  { id: 80508, type: "place_value_chart" },
  { id: 83894, type: "vertical" },
  { id: 88870, type: "horizontal" },
  { id: 77353, type: "verticalwithsymbols" },
  { id: 94989, type: "questiontextimages" },
  { id: 95028, type: "place_value_table_select" },
  { id: 75467, type: "long_multiplication" },
  { id: 56192, type: "logical_table_kg" },
  { id: 79310, type: "number_bond" },
  { id: 93171, type: "horizontal_fill_ups_multi_row" },
];
function App() {
  const [state, setState] = useState({});
  const [data, setData] = useState({});
  const apiCall = (index) => {
    return fetch(
      `https://www.begalileo.com//app_teachers/test_app_mathzone?question_id=${arr[index]?.id}`
    ).then(res=>res.json())
    .then(res=>{
      console.log(res?.question_data[0]?.question_type)
      setData({...res})
    })
  };
  const changeQuestionType=(type)=>{
    let temp=JSON.parse(data.question_data[0]?.question_text)
    temp["choiceType"]=type
    temp=JSON.stringify(temp)
    data.question_data[0].question_text=temp
    setData({...data})
  }
  const changeQuestion = () => {
    setState({});
    console.log(data)
    setState({...data});
  };
  useEffect(() => {
    window.changeQuestion = changeQuestion;
    window.apiCall=apiCall
    window.changeQuestionType=changeQuestionType
  }, [{...state}]);

  return (
    <>{Object.keys(state).length ? <MainOnlineQuizPage obj={state} /> : ""}</>
  );
}

export default App;
