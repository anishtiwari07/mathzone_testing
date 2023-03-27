import { useEffect, useState } from "react";
import MainOnlineQuizPage from "./OnlineQuizPage/MainOnlineQuiz/MainOnlineQuizPage";

function App() {
  const [state, setState] = useState({});

  const changeQuestion = (data) => {
    setState({})
    setState({ ...data });
  };
window.changeQuestion = changeQuestion;

  return (
    <>{Object.keys(state).length ? <MainOnlineQuizPage obj={state} /> : ""}</>
  );
}

export default App;
